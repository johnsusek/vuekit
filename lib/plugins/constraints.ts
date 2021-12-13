import { App, reactive, watch } from '@vue/runtime-core';
import * as Runtime from '@vue/runtime-core';
import * as Constraint from '../../types/constraint';

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    constraints: Constraint.Definitions
  }
}

export function createConstraintsFromComponentDefinition(component: Runtime.ComponentPublicInstance, value: Constraint.Definition): NSLayoutConstraint[] {
  let constraints = [];

  for (let firstItem of Object.keys(value)) {
    let definitions: Constraint.Definition[] = value[firstItem];
    let firstRef: Runtime.Component = component.$refs[firstItem];
    let firstView: NSView;

    try {
      firstView = firstRef.$el.instance;
    }
    catch (error) {
      console.warn('Could not find ref named', firstItem, 'when trying to build constraint in component: ', component.$options.name);
      continue;
    }

    for (let anchorName of Object.keys(definitions)) {
      let definition = definitions[anchorName];
      let firstAnchor = firstView[`${anchorName}Anchor`];

      let secondInstance = firstRef.$el.parent.instance;
      let secondView;

      if (secondInstance instanceof NSWindow) {
        secondView = secondInstance.contentView;
      }
      else if (secondInstance instanceof NSView) {
        secondView = secondInstance;
      }

      let secondItem;
      let secondAnchorName;
      let constant;

      if (Array.isArray(definition)) {
        // { top: [20, 'player.bottom'] } shorthand
        let [constantDef, targetDef] = definition;

        if (typeof constantDef === 'number') {
          constant = constantDef;
        }
        else {
          console.warn('Malformed constraint array for ', firstItem, 'on', component.$options.name);
          continue;
        }
        let secondParts = targetDef.split('.');
        secondItem = secondParts[0];
        secondAnchorName = secondParts[1];
      }
      else if (definition.secondItem) {
        secondItem = definition.secondItem;
      }

      if (secondItem) {
        let secondRef: Runtime.Component = component.$refs[secondItem];

        try {
          secondView = secondRef.$el.instance;
        }
        catch (error) {
          console.warn('Could not find ref named', definition.secondItem, 'when trying to build constraint in component: ', component.$options.name);
          continue;
        }
      }

      secondAnchorName = secondAnchorName || definition.secondAnchor || anchorName;

      let secondAnchor;

      if (secondView) {
        secondAnchor = secondView[`${secondAnchorName}Anchor`];
      }

      let relationshipName = 'EqualTo';

      let constraint;

      if (typeof definition === 'number') {
        if (!secondAnchor) {
          log.debug(`Cannot use ${secondInstance} in constraint since it is not as NSView`);
          continue;
        }

        // { leading: 20 } shorthand
        constraint = firstAnchor.constraintWithEqualTo(secondAnchor);
        constant = definition;
        constraint.constant = constant;
      }
      else {
        // { leading: { constant: 20, priority: 499 } }

        if (definition.relationship === '<=') {
          relationshipName = 'LessThanOrEqualTo';
        }
        else if (definition.relationship === '>=') {
          relationshipName = 'GreaterThanOrEqualTo';
        }

        if (typeof definition['constant'] === 'number') constant = definition['constant'];

        if (anchorName === 'width' || anchorName === 'height') {
          constraint = firstAnchor[`constraintWith${relationshipName}Constant`](firstAnchor, constant);
        }
        else {
          if (!secondAnchor) {
            log.debug(`Cannot use ${secondInstance} in constraint since it is not as NSView`);
            continue;
          }

          constraint = firstAnchor[`constraintWith${relationshipName}`](secondAnchor);
          constraint.constant = constant;
        }

        if (typeof definition['priority'] === 'number') constraint['priority'] = definition['priority'];
        if (typeof definition['multiplier'] === 'number') constraint['multiplier'] = definition['multiplier'];
      }

      constraints.push(constraint);
    }
  }

  return constraints;
}

export default {
  install: (app: App): void => {
    app.mixin({
      mounted() {
        if (!this.$options.constraints) return;

        let createdConstraints = createConstraintsFromComponentDefinition(this, this.$options.constraints);

        DispatchQueue.main().async(() => {
          NSLayoutConstraint.activateConstraints(createdConstraints);
        });

        this.$options.constraints = reactive(this.$options.constraints);

        watch(this.$options.constraints, constraints => {
          DispatchQueue.main().async(() => {
            NSLayoutConstraint.deactivateConstraints(createdConstraints);
            createdConstraints = createConstraintsFromComponentDefinition(this, constraints);
            NSLayoutConstraint.activateConstraints(createdConstraints);
          });
        });
      }
    });
  }
};
