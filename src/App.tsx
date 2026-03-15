import { useState, useRef } from "react";
import RuneSVG from "./rune/components/RuneSVG";
import NumberInput from "./components/NumberInput/NumberInput";
import Button from "./components/Button/Button";
import useRune from "./rune/useRune";
import { downloadSVG } from "./utils/utils";
import "./App.scss";

function App() {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [value, setValue] = useState<string>("");
  const rune = useRune(value);

  const handleDownloadRune = () => {
    if (!rune.length || !svgRef.current) return;

    downloadSVG({
      svg: svgRef.current,
      filename: `rune-${value}`,
    });
  };

  return (
    <main className="app">
      <h1>Rune Generator</h1>
      <div className="main-container">
        <NumberInput value={value} setValue={setValue} />
        <RuneSVG ref={svgRef} rune={rune} />
        <Button
          onClick={handleDownloadRune}
          disabled={!rune.length}
          text="Download rune"
        />
      </div>
    </main>
  );
}

export default App;
