import { OPERATORS } from '../constants/operator';

import { View } from './View.js';

export class Operators extends View {
  constructor({ parent, operatorModel }) {
    super(parent);
    this._operatorModel = operatorModel;
  }

  template() {
    return Object.values(OPERATORS).reduce((acc, cur) => {
      return (acc += `<button class="${
        this._operatorModel.operator === cur
          ? 'operators__button operators__button--selected'
          : 'operators__button'
      }" value="${cur}">${cur}</button>`);
    }, '');
  }

  setEvent() {
    this._parent.addEventListener('click', ({ target }) => {
      if (!target.closest('button')) return;

      try {
        this._operatorModel.operator = target.value;
      } catch (error) {
        alert(error.message);
        this._operatorModel.operator = null;
      }
    });
  }

  render() {
    this._parent.innerHTML = this.template();
  }
}
