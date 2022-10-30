export class Section {

  _items
  _renderer
  _container

  constructor( items, renderer, containerSelector) {
      this._items = items;
      this._renderer = renderer;
      this._container = document.querySelector(containerSelector);
  }

  renderItems() {
      this._items.forEach(item => this.addItem(item));
  }

  addItem(item) {
    if (item) {
      const newItem = this._renderer(item)
      this._container.prepend(newItem);
    }
  }
}
