import { View } from './View.js';

export class Operands extends View {
  constructor({ parent, operandsModel }) {
    super(parent);
    this._operandsModel = operandsModel;
  }

  template() {
    return `
    <input type="number" class="operands__first" placeholder="숫자를 입력하세요" value=${this._operandsModel.firstOperand} />
    <input type="number" class="operands__second" placeholder="숫자를 입력하세요" value=${this._operandsModel.secondOperand} />
    `;
  }

  setEvent() {
    this._parent.addEventListener('input', ({ target }) => {
      try {
        if (target.closest('.operands__first')) {
          this._operandsModel.firstOperand = Number(target.value);
        }

        if (target.closest('.operands__second')) {
          this._operandsModel.secondOperand = Number(target.value);
        }
      } catch (error) {
        alert(error.message);
        this._operandsModel.firstOperand = null;
        this._operandsModel.secondOperand = null;
      }
    });
  }

  render() {
    this._parent.querySelector('.operands__first').value =
      this._operandsModel.firstOperand;
    this._parent.querySelector('.operands__second').value =
      this._operandsModel.secondOperand;
  }
}
