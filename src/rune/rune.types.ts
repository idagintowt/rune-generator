type DigitType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type LineNameType = "line1" | "line2" | "line3" | "line4" | "line6";

export type RuneDigitType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type LinePointsType = readonly [
  x1: number,
  y1: number,
  x2: number,
  y2: number,
];

export type DigitsType = [
  thousands: DigitType,
  hudreds: DigitType,
  tens: DigitType,
  units: DigitType,
];

type RunePartType = {
  lines: readonly LinePointsType[];
  transform: string;
};

export type RuneModelType = RunePartType[];
