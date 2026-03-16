import { buildRune, normalizeToPositionalDigits } from "./rune.functions";
import type { RuneModelType } from "./rune.types";
import { isValueValid } from "../utils/utils";

/*
I'm using a custom hook here mainly to keep the component readable and make this step stand out,
because building the rune from the input is the core part of the logic.
The actual rune-building logic is still inside in small pure utility functions.

Normally a plain function in App component would be enough because in my custom hook there are no React lifecycle hooks, 
and the extracted logic is very small but exposing it as a hook makes this important step easier to notice
and keeps it at the top of the component (rules of hooks).

At one point I even tried to force useMemo here just to better justify the custom hook,
but I knew it didn’t make literally any sense in this case, so I removed it eventually;)
*/

const useBuildRune = (inputValue: string): RuneModelType => {
  return !inputValue || !isValueValid(inputValue)
    ? []
    : buildRune(normalizeToPositionalDigits(inputValue));
};

export default useBuildRune;
