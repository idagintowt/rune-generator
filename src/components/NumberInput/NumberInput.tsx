import { isValueValid } from "../../utils/utils";
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
    <div className="input-section">
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
        <button
          type="button"
          disabled={!value}
          onClick={handleClear}
          title="Clear input"
        >
          x
        </button>
      </div>
    </div>
  );
};

export default NumberInput;
