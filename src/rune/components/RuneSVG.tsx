import { GEOMETRY } from "../rune.constants";
import type { RunePartType } from "../rune.types";
import "./runeSVG.scss";

const { strokeWidth, viewHalf, axisTop, axisBottom } = GEOMETRY;

type RunePropsType = {
  rune: RunePartType[];
};

const MainAxis = () => <line x1="0" y1={axisTop} x2="0" y2={axisBottom} />;

const Rune = ({ rune }: RunePropsType) => {
  return rune.map(({ lines, transform }, i) => (
    <g key={i} transform={transform}>
      {lines.map(([x1, y1, x2, y2], j) => (
        <line key={j} x1={x1} y1={y1} x2={x2} y2={y2} />
      ))}
    </g>
  ));
};

const RuneSVG = ({ rune }: RunePropsType) => {
  const hasRune = rune.length > 0;

  return (
    <div className="rune-section">
      <svg
        width="80%"
        height="100%"
        viewBox={`${-viewHalf} ${-viewHalf} ${viewHalf * 2} ${viewHalf * 2}`}
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
};

export default RuneSVG;
