import { BASE_RUNES, TRANSFORMS } from "./rune.constants";
import type { RunePartType, DigitsType } from "./rune.types";

export const splitToDigits = (inputValue: string): DigitsType =>
  inputValue.padStart(4, "0").slice(0, 4).split("").map(Number) as DigitsType;

export const buildRune = (digits: DigitsType): RunePartType[] => {
  return digits.reduce<RunePartType[]>((acc, digit, i) => {
    if (!digit) return acc;

    acc.push({
      lines: BASE_RUNES[digit],
      transform: TRANSFORMS[i],
    });

    return acc;
  }, []);
};
