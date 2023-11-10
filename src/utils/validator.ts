export const createValidate = function (regex: RegExp) {
  return function (text: string | number) {
    return regex.test(text as string);
  };
};
