import "./button.scss";

/*
I know this component is a little overkill for the application.
I just really wanted to have my main component built from smaller components,
and I have two slightly diffrent buttons in the app so I can reuse this.
But I know that's not absolutely necessary in this case because it's basically almost just a thin wrapper around the button, 
and the app is very small :D
*/

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
