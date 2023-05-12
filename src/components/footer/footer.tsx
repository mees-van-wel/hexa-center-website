import { component$ } from "@builder.io/qwik";
import styles from "./footer.module.scss";

export const Footer = component$(() => (
  <footer class={styles.container}>
    © {new Date().getFullYear()} Hexa Center - All rights reserved
  </footer>
));
