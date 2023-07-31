import { Observable } from './Observable';

export class Operands extends Observable {
  constructor() {
    super();

    this._firstOperand = 0;
    this._secondOperand = 0;
  }

  validateOperandType(operand) {
    if (typeof operand !== 'number')
      throw new Error('잘못된 타입의 opreand입니다.');
  }

  get firstOperand() {
    return this._firstOperand;
  }

  get secondOperand() {
    return this._secondOperand;
  }

  set firstOperand(operand) {
    this.validateOperandType(operand);

    this._firstOperand = operand;
    this.notify();
  }

  set secondOperand(operand) {
    this.validateOperandType(operand);

    this._secondOperand = operand;
    this.notify();
  }
}
