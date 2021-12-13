import { ComponentPublicInstance } from '@vue/runtime-core';
import { updateInstanceFromComponent } from '.';

export function renderCollectionViewItem(collectionViewItem: NSCollectionViewItem, collection: ComponentPublicInstance, identifier: string, itemData: StringObject): void {
  if (!collection.$slots.default) {
    log.error('No default slot in CollectionView to render - add a CollectionItem');
    return;
  }

  let itemComponents = collection.$slots.default(collectionViewItem);
  let itemComponent = itemComponents.find(s => s.children?.[0].props.identifier === identifier);

  if (!itemComponent) {
    log.error(`Could not find CollectionItem with identifier: ${identifier}`);
    return;
  }

  log.trace('updateInstanceFromComponent itemComponent?.children?.[0]', itemComponent?.children?.[0]);

  // @ts-ignore
  updateInstanceFromComponent(collectionViewItem.view, itemComponent?.children?.[0]);

  if (!itemComponent.children) {
    log.error('No children for CollectionItem to render - add a TextField and/or Image');
    return;
  }

  let innerComponents = (itemComponent.children as any)?.[0]?.children;

  if (!innerComponents) {
    log.error('No children for CollectionItem to render - add a TextField and/or Image');
    return;
  }

  if (innerComponents.image) {
    let imageComponents = innerComponents.image(itemData);
    if (imageComponents.length) {
      log.trace('updateInstanceFromComponent imageComponents', imageComponents[0]);
      updateInstanceFromComponent(collectionViewItem.imageView, imageComponents[0]);
    }
  }

  if (innerComponents.text) {
    let textComponents = innerComponents.text(itemData);
    if (textComponents.length) {
      log.trace('updateInstanceFromComponent textComponents', textComponents[0]);
      updateInstanceFromComponent(collectionViewItem.textField, textComponents[0]);
    }
  }
}

export function createCollectionViewItem(indexPath: IndexPath, collection: ComponentPublicInstance, identifier: string, itemData: StringObject): NSCollectionViewItem {
  // TODO: check slots inside collection component and use those, instead
  // of assuming the convenience textField/imageView outlets

  let collectionView = collection.$el.instance as NSCollectionView;
  // @ts-ignore
  let itemView = collectionView.makeItemWithIdentifierForIndexPath(identifier, indexPath);
  itemView.view.wantsLayer = true;

  let textField = NSTextField();
  itemView.textField = textField;

  let imageView = NSImageView();
  itemView.imageView = imageView;

  itemView.view.addArrangedSubview(imageView);
  itemView.view.addArrangedSubview(textField);

  renderCollectionViewItem(itemView, collection, identifier, itemData);
  return itemView;
}
