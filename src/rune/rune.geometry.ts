import type { LinePointsType, LineNameType, RuneDigitType } from "./rune.types";

const UNIT = 20;

// lines used to construct the base runes (1-9).
// vector - the direction from the starting point.
const BASE_LINES: Record<LineNameType, LinePointsType> = {
  line1: [0, -2 * UNIT, UNIT, -2 * UNIT], // horizontal line at the top - vector: (UNIT, 0)
  line2: [0, -UNIT, UNIT, -UNIT], // horizontal line shifted down by UNIT value - vector: (UNIT, 0)
  line3: [0, -2 * UNIT, UNIT, -UNIT], // diagonal line from the top pointing downwards - vector: (UNIT, UNIT)
  line4: [0, -UNIT, UNIT, -2 * UNIT], // diagonal line shifted down by the UNIT value pointing up - vector (UNIT, -UNIT)
  line6: [UNIT, -2 * UNIT, UNIT, -UNIT], //line parallel to the axis - vector: (0, UNIT)
};

const { line1, line2, line3, line4, line6 } = BASE_LINES;

// base runes
export const BASE_RUNES: Record<RuneDigitType, readonly LinePointsType[]> = {
  1: [line1],
  2: [line2],
  3: [line3],
  4: [line4],
  5: [line1, line4],
  6: [line6],
  7: [line1, line6],
  8: [line2, line6],
  9: [line1, line2, line6],
};

// Geometry values for the rune and the SVG viewBox.
// All measurements are based on UNIT, so everything scales proportionally.
export const GEOMETRY = {
  strokeWidth: UNIT / 8, // stroke thickness proportional to UNIT
  axisTop: -2 * UNIT, //coordinate for y1 in the main axis
  axisBottom: 2 * UNIT, //coordinate for y2 in the main axis
  viewHalf: 3 * UNIT, // half-size of the SVG viewBox, leaving one UNIT space around the rune
} as const;

// // transformations used for positioning runes in correct quadrants
export const TRANSFORMS = [
  "scale(-1,-1)", // thousands
  "scale(1,-1)", // hundreds
  "scale(-1,1)", // tens
  "", // units
] as const;
