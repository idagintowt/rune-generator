# Rune Generator

A simple React + TypeScript (built with Vite) application that converts integers (1–9999) into graphical runes rendered as SVG, which can then be downloaded as files.

## Running the project

```bash
npm install
npm run dev
```

## Project structure

```
src
├── components
│   ├── Button
│   └── NumberInput
│
├── rune
│   ├── components
│   │   └── RuneSVG.tsx
│   │
│   ├── rune.geometry.ts
│   ├── rune.types.ts
│   ├── rune.utils.ts
│   └── useBuildRune.ts
│
├── utils
│   └── utils.ts
│
└── App.tsx

```

## Architecture

The application follows a simple data pipeline:

```
input -> normalize -> model -> render
```

Flow:

```
1. User enters a number

2. The input is normalized into a digits array where the index represents the digit position

3. Digits are mapped to base runes and transormations which together form the final rune for the number

4. The rune is rendered as SVG and can be downloaded
```

## Rune construction model

```
primitive lines (1,2,3,4,6) -> base rune shapes (1-9 runes) -> quadrant transforms around main axis -> final rune
```

## Implementation notes

### 1. The number 0 is not allowed as input

The generator accepts numbers from **1 to 9999**.

Numbers can still contain 0 (for example 4067), but the **number 0 itself is not allowed**.

This rune system can represent numbers without using a symbol for zero. In this system, zero is simply nothing.

**There is no rune representation for 0** so input with standalone 0 value would also create some UX ambiguity.

For example, if the user entered 0:

**a)** _showing nothing could be confusing for user because an empty input also produces nothing_

**b)** _showing only the vertical axis could suggest that the axis represents zero, and this is not correct_

To avoid this possible confusion the application simply doesn't allow 0 as a standalone value.

---

### 2. Geometry is based on a single UNIT value

All coordinates in the rune geometry are based on a single constant:

```
UNIT
```

Every line is defined relative to this value.

This makes the system easier to work with:

- all proportions stay consistent

- the geometry is easier to reason and visualise

UNIT acts as the base measurement for the entire rune system.

---

### 3. SVG coordinate system is always centered at (0,0)

The SVG coordinate system is centered at: `(0,0)`

In the code this viewBox parameters ensure that:

```tsx
viewBox={`${-viewHalf} ${-viewHalf} ${viewHalf * 2} ${viewHalf * 2}`}
```

Calculations:

```
viewHalf = U

minX = -U
minY = -U
width = 2U
height = 2U

maxX = minX + width = -U + 2U = U
maxY =  minY + height = -U + 2U = U

centerX = (minX + maxX)/2 = (-U+U)/2 = 0/2 = 0;
centerY = (minY + maxY)/2 = (-U+U)/2 = 0/2 = 0;

```

So the center is always in:

```
(0,0)
```

This means the main vertical axis of the rune passes through the center, because this axis is defined with x = 0.

Using a centered coordinate system makes the geometry simpler for me. It also makes transformations easier to apply.

---

### 4. Main axis

The rune system is built around a main vertical axis that goes through the center of the SVG (0,0).
The main axis spans vertically from -2UNIT to 2UNIT.

In the code this axis is used as a line for transformations.
Base rune parts are mirrored and placed in 4 different quadrants relative to this axis.

But from the user's point of view the axis is just a part of the rune.

**Important:**

- **axis is not a digit**

- **it doesn't represent any value**

---

### 5. TypeScript

Even though the application is small, TypeScript is useful here because the code describes a geometric model.

Some parts of the system have clear limits. For example:

- there are only 9 base runes

- there are only 4 possible transformations

- a line is always defined by 4 coordinates

Using types makes the geometry easier to understand when reading the code (I hope so).

---

### 6. UI

The UI is intentionally minimal.

## Tech stack

- React

- TypeScript

- Vite

- SVG

- SCSS

## Author

Ida
