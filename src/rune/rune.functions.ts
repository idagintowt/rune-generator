import { BASE_RUNES, TRANSFORMS } from "./rune.geometry";
import type { RuneModelType, DigitsType } from "./rune.types";

export const splitToDigits = (inputValue: string): DigitsType =>
  inputValue.padStart(4, "0").slice(0, 4).split("").map(Number) as DigitsType;

export const buildRune = (digits: DigitsType): RuneModelType => {
  return digits.reduce<RuneModelType>((acc, digit, i) => {
    if (!digit) return acc;

    acc.push({
      lines: BASE_RUNES[digit],
      transform: TRANSFORMS[i],
    });

    return acc;
  }, []);
};
