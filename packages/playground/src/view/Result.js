import { View } from './View.js';
export class Result extends View {
  constructor({ parent, operandsModel, operatorModel }) {
    super(parent);
    this._operandsModel = operandsModel;
    this._operatorModel = operatorModel;
  }

  showResult() {
    const { firstOperand, secondOperand } = this._operandsModel;
    const { operator, operation } = this._operatorModel;

    this._parent.innerHTML = `
      <p> ${firstOperand} ${operator} ${secondOperand} = ${operation(
      firstOperand,
      secondOperand
    )} </p>
    `;
  }

  showError(message) {
    this._parent.innerHTML = `
      <p class="result__error">${message}</p>
    `;
  }

  render() {
    try {
      this.showResult();
    } catch (error) {
      this.showError(error.message);
    }
  }
}
