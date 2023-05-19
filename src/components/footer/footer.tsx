import { component$ } from "@builder.io/qwik";
import styles from "./footer.module.scss";
import { useLocation } from "@builder.io/qwik-city";

export const Footer = component$(() => {
  const isGuide = !!useLocation().url.pathname.includes("guide");

  return (
    <footer
      class={[
        styles.container,
        {
          [styles.containerGuide]: isGuide,
        },
      ]}
    >
      © {new Date().getFullYear()} Hexa Center - All rights reserved
    </footer>
  );
});
