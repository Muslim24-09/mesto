export class Section {

  _items
  _renderer
  _container

  constructor(items, renderer, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems() {
    this._items.forEach(item => this._renderer(item));
  }

  addItem(item) {
    if (item) {
      this._container.prepend(item);
    }
  }
}
