import { BASE_RUNES, TRANSFORMS } from "./rune.geometry";
import type { RuneModelType, DigitsType } from "./rune.types";

export const normalizeToPositionalDigits = (inputValue: string): DigitsType =>
  inputValue.padStart(4, "0").slice(0, 4).split("").map(Number) as DigitsType; //I'm 99,99999% sure that I have my exactly-4-length-DigitType tuple here.

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
