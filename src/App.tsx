import { useState } from "react";
import RuneSVG from "./rune/components/RuneSVG";
import NumberInput from "./components/NumberInput/NumberInput";
import useRune from "./rune/useRune";
import "./App.scss";

function App() {
  const [value, setValue] = useState<string>("");
  const rune = useRune(value);

  return (
    <main className="app">
      <h1>Rune Generator</h1>
      <div className="main-container">
        <NumberInput value={value} setValue={setValue} />
        <RuneSVG rune={rune} />
        <button type="button" disabled={!rune?.length}>
          Download rune
        </button>
      </div>
    </main>
  );
}

export default App;
