import { GEOMETRY } from "../rune.geometry";
import type { RuneModelType } from "../rune.types";
import { forwardRef } from "react";
import "./runeSVG.scss";

const { strokeWidth, viewHalf, axisTop, axisBottom } = GEOMETRY;

type PropsType = {
  rune: RuneModelType;
};

const MainAxis = () => <line x1="0" y1={axisTop} x2="0" y2={axisBottom} />;

const Rune = ({ rune }: PropsType) => {
  return rune.map(({ lines, transform }, i) => (
    <g key={i} transform={transform}>
      {lines.map(([x1, y1, x2, y2], j) => (
        <line key={j} x1={x1} y1={y1} x2={x2} y2={y2} />
      ))}
    </g>
  ));
};

export const RuneSVG = forwardRef(
  ({ rune }: PropsType, ref: React.ForwardedRef<SVGSVGElement>) => {
    const hasRune = rune.length > 0;

    return (
      <div className="rune-container">
        <svg
          ref={ref}
          xmlns="http://www.w3.org/2000/svg"
          height="100%"
          width="100%"
          viewBox={`${-viewHalf} ${-viewHalf} ${viewHalf * 2} ${viewHalf * 2}`} // ensures the SVG coordinate system is always centered at (0,0)
          stroke={hasRune ? "#181818" : "#C8C8C8"}
          strokeWidth={strokeWidth}
          strokeLinejoin="round"
          strokeLinecap="round"
          fill="none"
        >
          <g>
            <MainAxis />
            {hasRune && <Rune rune={rune} />}
          </g>
        </svg>
      </div>
    );
  },
);

export default RuneSVG;
