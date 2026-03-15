import { isValueValid } from "../../utils/utils";
import Button from "../Button/Button";
import "./numberInput.scss";

type NumberInputProps = {
  value: string;
  setValue: (value: string) => void;
};

const NumberInput = ({ value, setValue }: NumberInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!value || isValueValid(value)) {
      setValue(value);
    }
  };

  const handleClear = () => setValue("");

  return (
    <div className="input-container">
      <label htmlFor="number-input">Enter integer (1–9999)</label>
      <div className="input-wrapper">
        <input
          id="number-input"
          type="text"
          inputMode="numeric"
          placeholder="1-9999"
          value={value}
          onChange={handleChange}
        />
        <Button
          disabled={!value}
          onClick={handleClear}
          text="x"
          variant="outline"
          title="Clear input"
        />
      </div>
    </div>
  );
};

export default NumberInput;
