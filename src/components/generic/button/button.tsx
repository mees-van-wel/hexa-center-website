import { Slot, component$ } from "@builder.io/qwik";
import styles from "./button.module.scss";
import { Link } from "@builder.io/qwik-city";

interface ButtonProps {
  href?: string;
  type?: "submit" | "reset" | "button" | undefined;
}

export const Button = component$<ButtonProps>(({ href, type = "button" }) => {
  const Component = href ? Link : "button";

  return (
    <Component
      class={styles.root}
      type={href ? undefined : type}
      role={href ? "link" : "button"}
      href={href}
    >
      <Slot />
    </Component>
  );
});
