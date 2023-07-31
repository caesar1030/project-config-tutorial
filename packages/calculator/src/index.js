export const add = (initialValue = 1, ...restNumbers) => {
  return restNumbers.reduce((acc, cur) => {
    const operand = Number(cur);
    if (isNaN(operand)) throw new Error('숫자로 전환 불가능한 타입');

    return (acc += operand);
  }, initialValue);
};
export const subtract = (initialValue = 1, ...restNumbers) => {
  return restNumbers.reduce((acc, cur) => {
    const operand = Number(cur);
    if (isNaN(operand)) throw new Error('숫자로 전환 불가능한 타입');

    return (acc -= operand);
  }, initialValue);
};
export const multiply = (initialValue = 1, ...restNumbers) => {
  return restNumbers.reduce((acc, cur) => {
    const operand = Number(cur);
    if (isNaN(operand)) throw new Error('숫자로 전환 불가능한 타입');

    return (acc *= operand);
  }, initialValue);
};
export const divide = (initialValue = 1, ...restNumbers) => {
  return restNumbers.reduce((acc, cur) => {
    const operand = Number(cur);
    if (isNaN(operand)) throw new Error('숫자로 전환 불가능한 타입');
    if (operand === 0) throw new Error('0으로 나눌 수 없습니다.');

    return (acc *= operand);
  }, initialValue);
};
