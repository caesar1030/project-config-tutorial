import { View } from './View.js';
export class Result extends View {
  constructor({ parent, operandsModel, operatorModel }) {
    super(parent);
    this._operandsModel = operandsModel;
    this._operatorModel = operatorModel;
  }

  template() {
    const { firstOperand, secondOperand } = this._operandsModel;
    const { operator, operation } = this._operatorModel;

    return `
      <p> ${firstOperand} ${operator} ${secondOperand} = ${operation(
      firstOperand,
      secondOperand
    )} </p>
    `;
  }

  render() {
    try {
      this._parent.innerHTML = this.template();
    } catch ({ message }) {
      this._parent.innerHTML = `
      <p class="result__error">${message}</p>
    `;
    }
  }
}
