export class Observable {
  constructor() {
    this._observers = [];
  }

  subscribe(observer) {
    this._observers.push(observer);
  }

  unsubscribe(observer) {
    this._observers.splice(
      this._observers.findIndex(
        (subscribingObserver) => subscribingObserver === observer
      ),
      1
    );
  }

  notify() {
    this._observers.forEach((v) => v.render());
  }
}
