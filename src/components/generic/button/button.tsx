import type { ClassList } from "@builder.io/qwik";
import { Slot, component$, createElement } from "@builder.io/qwik";
import styles from "./button.module.scss";
import { Link } from "@builder.io/qwik-city";

interface ButtonProps {
  classList?: ClassList;
  href?: string;
  type?: "submit" | "reset" | "button" | undefined;
}

export const Button = component$<ButtonProps>(
  ({ classList, href, type = "button" }) =>
    createElement(
      href ? Link : "button",
      {
        class: [classList, styles.root],
        type: href ? undefined : type,
        role: href ? "link" : "button",
        href: href,
      },
      <Slot />
    )
);
