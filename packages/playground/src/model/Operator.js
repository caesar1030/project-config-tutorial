import { add, divide, multiply, subtract } from 'calculator';
import { OPERATORS } from '../constants/operator';
import { Observable } from './Observable';

export class Operator extends Observable {
  constructor() {
    super();

    this._operator = OPERATORS.PLUS;
    this._operationMapper = {
      [OPERATORS.PLUS]: add,
      [OPERATORS.MINUS]: subtract,
      [OPERATORS.MULTIPLY]: multiply,
      [OPERATORS.DIVIDE]: divide,
    };
  }

  validateOperator(operator) {
    if (!Object.values(OPERATORS).includes(operator))
      throw new Error('잘못된 operator입니다.');
  }

  get operator() {
    return this._operator;
  }

  get operation() {
    return this._operationMapper[this._operator];
  }

  set operator(operator) {
    this.validateOperator(operator);

    this._operator = operator;
    this.notify();
  }
}
