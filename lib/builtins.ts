globalThis.printSubviews = (view, i = 0) => {
  if (view) log.debug(' '.repeat(i * 2), `frame: width: ${view.frame.width} height: ${view.frame.height}`, `translatesAutoresizingMask: ${view.translatesAutoresizingMaskIntoConstraints}`, view.constructor.toString());
  if (view.subviews) view.subviews.forEach(globalThis.printSubviews, i++);
};

export { };
