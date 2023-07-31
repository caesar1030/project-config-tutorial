import { OPERATORS } from '../constants/operator';

import { View } from './View.js';

export class Operators extends View {
  constructor({ parent, operatorModel }) {
    super(parent);
    this._operatorModel = operatorModel;
  }

  template() {
    return `
      <button value="${OPERATORS.PLUS}">+</button>
      <button value="${OPERATORS.MINUS}">-</button>
      <button value="${OPERATORS.MULTIPLY}">*</button>
      <button value="${OPERATORS.DIVIDE}">/</button>
    `;
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
}
