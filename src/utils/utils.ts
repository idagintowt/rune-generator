export const isValueValid = (value: string): boolean => {
  const num = Number(value);
  return (
    /^\d*$/.test(value) &&
    value.length > 0 &&
    value.length <= 4 &&
    Number.isInteger(num) &&
    num >= 1 &&
    num <= 9999
  );
};
