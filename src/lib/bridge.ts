import { valueTypeForJSType } from './type';
import { snakeToPascal } from './string';

const ignoredKeys = ['flags', 'time', 'type', 'win', 'winNum', 'ctxt', 'NSEvent'];
const keyLookup = {
  loc: 'locationInWindow',
  count: 'clickCount'
};

let parsedValue = (buff) => {
  let value = buff;

  if (buff && !Number.isNaN(parseFloat(buff))) {
    value = parseFloat(buff);
  }

  return value;
};

export function decorateEvent(eventDetails: NSEvent, serialized: string): NSEvent {
  let buffer = '';
  let valueBuffer = [];
  let insideValue = false;
  let keyName = '';

  let pushBuff = () => {
    if (keyName) {
      if (!ignoredKeys.includes(keyName) && eventDetails[keyName] === undefined) {
        eventDetails[keyLookup[keyName] || keyName] = parsedValue(buffer);
      }

      keyName = '';
    }
    else if (buffer.trim()) {
      keyName = buffer;
    }

    buffer = '';
  };

  for (let idx = 0; idx < serialized.length; idx++) {
    let char = serialized[idx];

    switch (char) {
      case '(':
      case '{':
        insideValue = true;
        break;

      case ')':
      case '}':
        insideValue = false;
        valueBuffer.push(parsedValue(buffer));
        if (!ignoredKeys.includes(keyName) && eventDetails[keyName] === undefined) {
          eventDetails[keyLookup[keyName] || keyName] = valueBuffer;
        }
        buffer = '';
        valueBuffer = [];
        keyName = '';
        break;

      case ',':
        if (insideValue) {
          valueBuffer.push(parsedValue(buffer));
          buffer = '';
        }
        else {
          buffer += char;
        }
        break;

      case '=':
      case ':':
        pushBuff();
        break;

      case ' ':
        if (!insideValue) pushBuff();
        break;

      default:
        buffer += char;
        break;
    }
  }

  pushBuff();

  return eventDetails;
}

// This function gets called from swift when an NSEvent happens in one of our views.
// Here we'll check the node props for a callback matching the pattern `on[EventName]`,
// and call it if it exists.
//
// Note that Vue adds the "on" prefix to @ event handlers, so:
// @leftMouseDown="" becomes node.props.onLeftMouseDown
export function emitEvent(node: VueKitNode, event: NSEvent, extended: string) {
  let eventType = event.type?.toString();

  if (!eventType) {
    console.log('Could not find event.type on ', event);
    return;
  }

  let eventName = NSEventType[eventType];

  if (!eventName) {
    console.log('Could not find event name in NSEventType enum for ', event);
    return;
  }

  let propName = `on${snakeToPascal(eventName)}`;

  // console.log('Checking for callbacks for ', propName, 'on', node.view);
  if (typeof node.props?.[propName] !== 'function') return;

  let populatedEvent = decorateEvent(event, extended);

  console.log('Emitting', propName, populatedEvent);

  node.props[propName](populatedEvent);
}

// View actions
// @action=""
export function emitAction(node: VueKitNode, event: NSEvent, extended: string) {
  let view = node.view;

  let vModelUpdateFn = node.props['onUpdate:modelValue'];

  if (view && vModelUpdateFn) {
    let valueTypeKey = valueTypeForJSType(typeof node.props.modelValue);
    // console.log('Updating v-model automatically from action call (calling node.props[\'onUpdate:modelValue\']) with value ', view[valueTypeKey]);
    vModelUpdateFn(view[valueTypeKey]);
  }

  let actionHandler = node.props?.onAction;

  if (typeof actionHandler !== 'function') return;

  let eventType = event.type?.toString();

  if (!eventType) {
    console.log('Could not find event.type on ', event);
    return;
  }

  let eventName = NSEventType[eventType];

  if (!eventName) {
    console.log('Could not find event name in NSEventType enum for ', event);
    return;
  }

  let populatedEvent = decorateEvent(event, extended);

  actionHandler(populatedEvent);
}
