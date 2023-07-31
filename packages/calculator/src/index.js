const pipe =
  (...funcs) =>
  (arg) =>
    funcs.reduce((result, func) => func(result), arg);

const validateAndConvert = (operand) => {
  const number = Number(operand);
  if (isNaN(number)) throw new Error('입력값이 숫자가 아닙니다.');

  return number;
};

const validateNotZero = (number) => {
  if (number === 0) throw new Error('0으로 나눌 수 없습니다.');
  return number;
};

export const add = (initialValue = 1, ...restNumbers) => {
  return restNumbers.reduce(
    (acc, cur) => acc + validateAndConvert(cur),
    initialValue
  );
};

export const subtract = (initialValue = 1, ...restNumbers) => {
  return restNumbers.reduce(
    (acc, cur) => acc - validateAndConvert(cur),
    initialValue
  );
};

export const multiply = (initialValue = 1, ...restNumbers) => {
  return restNumbers.reduce(
    (acc, cur) => acc * validateAndConvert(cur),
    initialValue
  );
};

export const divide = (initialValue = 1, ...restNumbers) => {
  return restNumbers.reduce(
    (acc, cur) => acc / pipe(validateAndConvert, validateNotZero)(cur),
    initialValue
  );
};
