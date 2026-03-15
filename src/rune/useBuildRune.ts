import { buildRune, splitToDigits } from "./rune.functions";
import type { RuneModelType } from "./rune.types";
import { useMemo } from "react";
import { isValueValid } from "../utils/utils";

const useBuildRune = (inputValue: string): RuneModelType => {
  //TODO: add explanation for unnecessary c hook and memo
  return useMemo(() => {
    return !inputValue || !isValueValid(inputValue)
      ? []
      : buildRune(splitToDigits(inputValue));
  }, [inputValue]);
};

export default useBuildRune;
