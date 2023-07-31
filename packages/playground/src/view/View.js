export class View {
  constructor(parent) {
    this._parent = parent;
  }

  init() {
    this._parent.innerHTML = this.template();
    this.setEvent();
  }

  template() {
    return ``;
  }

  render() {}

  setEvent() {}
}
