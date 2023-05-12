import { Slot, component$ } from "@builder.io/qwik";
import styles from "./button.module.scss";

interface ButtonProps {
  type?: "submit" | "reset" | "button" | undefined;
}

export const Button = component$<ButtonProps>(({ type = "button" }) => (
  <button class={styles.root} type={type} role="button">
    <Slot />
  </button>
));
