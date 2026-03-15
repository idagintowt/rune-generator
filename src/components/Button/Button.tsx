import "./button.scss";

type PropsType = {
  text: string;
  variant?: "primary" | "outline";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  text,
  variant = "primary",
  type = "button",
  className,
  ...props
}: PropsType) => (
  <button
    type={type}
    className={`btn ${variant}${className ? ` ${className}` : ""}`}
    {...props}
  >
    {text}
  </button>
);

export default Button;
