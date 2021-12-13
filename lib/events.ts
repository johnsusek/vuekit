import { snakeToPascal } from './string';
import { valueTypeForJSType } from './type';

const ignoredKeys = ['flags', 'time', 'type', 'win', 'winNum', 'ctxt', 'NSEvent'];
const keyLookup = {
  loc: 'locationInWindow',
  count: 'clickCount'
};

let parsedValue = buff => {
  let value = buff;

  if (buff && !Number.isNaN(parseFloat(buff))) {
    value = parseFloat(buff);
  }

  return value;
};

function decorateEvent(eventDetails: NSEvent, serialized: string): NSEvent {
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

// This function gets called from the Swift side of the bridge when an NSEvent
// happens in one of our views. Here we'll check the node props for a callback
// matching the pattern `on[EventName]`, and call it if it exists.
//
// Note that Vue adds the "on" prefix to @ event handlers, so:
// @leftMouseDown="" becomes node.props.onLeftMouseDown
export function emitEvent(node: VueKitNode, event: NSEvent, extended: string): void {
  let eventType = event.type?.toString();

  if (!eventType) {
    log.error('Could not find event.type on ', event);
    return;
  }

  let eventName = NSEvent.EventType[eventType];

  if (!eventName) {
    log.error('Could not find event name in NSEvent.EventType enum for ', event);
    return;
  }

  let propName = `on${snakeToPascal(eventName)}`;

  // log.debug('Checking for callbacks for ', propName, 'on', node.instance);

  if (typeof node.props?.[propName] !== 'function') return;

  let populatedEvent = decorateEvent(event, extended);

  console.info('Emitting', propName, populatedEvent);

  node.props[propName](populatedEvent);
}

// View actions
// @action=""
export function emitAction(node: VueKitNode, event: NSEvent, extended: string): void {
  let { instance } = node;

  let vModelUpdateFn = node.props?.['onUpdate:modelValue'];

  if (instance && vModelUpdateFn) {
    let valueTypeKey = valueTypeForJSType(typeof node.props.modelValue);
    // log.debug('Updating v-model automatically from action call (calling node.props[\'onUpdate:modelValue\']) with value ', view[valueTypeKey]);
    vModelUpdateFn(instance[valueTypeKey]);
  }

  let actionHandler = node.props?.onAction;

  if (typeof actionHandler !== 'function') return;

  let eventType = event.type?.toString();

  if (!eventType) {
    log.error('Could not find event.type on ', event);
    return;
  }

  let eventName = NSEvent.EventType[eventType];

  if (!eventName) {
    log.error('Could not find event name in NSEvent.EventType enum for ', event);
    return;
  }

  let populatedEvent = decorateEvent(event, extended);

  actionHandler(populatedEvent);
}
