import { Operands as OperandsModel } from './model/Operands.js';
import { Operator as OperatorModel } from './model/Operator.js';
import { Operands as OperandsView } from './view/Operands.js';
import { Operators as OperatorsView } from './view/Operators.js';
import { Result as ResultView } from './view/Result.js';

export class App {
  constructor(parent) {
    this._parent = parent;
  }

  init() {
    this._parent.innerHTML = `
      <div class="operands"></div>
      <div class="operators"></div>
      <div class="result"></div>
    `;

    const operandsModel = new OperandsModel();
    const operatorModel = new OperatorModel();

    const operandsView = new OperandsView({
      parent: document.querySelector('.operands'),
      operandsModel,
    });
    const operatorsView = new OperatorsView({
      parent: document.querySelector('.operators'),
      operatorModel,
    });
    const resultView = new ResultView({
      parent: document.querySelector('.result'),
      operandsModel,
      operatorModel,
    });

    operandsModel.subscribe(operandsView);

    operatorModel.subscribe(operatorsView);

    operandsModel.subscribe(resultView);
    operatorModel.subscribe(resultView);

    operandsView.init();
    resultView.init();
    operatorsView.init();
  }
}
