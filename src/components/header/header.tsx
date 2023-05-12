import { component$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import styles from "./header.module.scss";
import { IconLogo } from "../icons/logo";

export const Header = component$(() => {
  const pathname = useLocation().url.pathname;

  return (
    <header class={styles.container}>
      <div class={styles.left}>
        <Link href="/" class={styles.logo}>
          <IconLogo />
          <h1>Hexa Center</h1>
        </Link>
        <h2>-</h2>
        <nav class={styles.nav}>
          <Link
            class={[styles.item, { [styles.itemActive]: pathname === "/" }]}
            href="/"
          >
            Home
          </Link>
          <Link
            class={[
              styles.item,
              { [styles.itemActive]: pathname.startsWith("/features") },
            ]}
            href="/info"
          >
            Info
          </Link>
          <Link
            class={[
              styles.item,
              { [styles.itemActive]: pathname.startsWith("/pricing") },
            ]}
            href="/pricing"
          >
            Pricing
          </Link>
          <Link
            class={[
              styles.item,
              { [styles.itemActive]: pathname.startsWith("/support") },
            ]}
            href="/support"
          >
            Support
          </Link>
          <Link
            class={[
              styles.item,
              { [styles.itemActive]: pathname.startsWith("/contact") },
            ]}
            href="/contact"
          >
            Contact
          </Link>
          {/* <Link
            class={[
              styles.item,
              { [styles.itemActive]: pathname.startsWith("/login") },
            ]}
            href="/login"
          >
            Login
          </Link> */}
        </nav>
      </div>
    </header>
  );
});
