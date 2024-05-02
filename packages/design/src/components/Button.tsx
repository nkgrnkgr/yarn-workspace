import { button, buttonLarge } from "./Button.css";

type Props = {
  children: React.ReactNode;
  size?: "sm" | "lg";
};

export function Button({ children, size = "sm" }: Props) {
  return (
    <button className={size === "sm" ? button : buttonLarge} type="button">
      {children}
    </button>
  );
}
