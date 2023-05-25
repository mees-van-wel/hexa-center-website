import {
  component$,
  useStore,
  $,
  useSignal,
  useVisibleTask$,
} from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import styles from "./header.module.scss";
import { IconLogo } from "../icons/logo";
import { IconX } from "../icons/x";
import { IconMenu2 } from "../icons/menu2";

export const useMedia = () => {
  const screen = useStore({
    sm: true,
    md: false,
    lg: false,
    xl: false,
  });

  useVisibleTask$(() => {
    const checks = {
      md: window.matchMedia("(min-width: 48em)"),
      lg: window.matchMedia("(min-width: 62em)"),
      xl: window.matchMedia("(min-width: 76em)"),
    };

    const runChecks = () => {
      screen.md = checks.md.matches;
      screen.lg = checks.lg.matches;
      screen.xl = checks.xl.matches;
    };

    runChecks();

    for (const check of Object.values(checks)) {
      check.addEventListener("change", runChecks);
    }

    return () => {
      for (const check of Object.values(checks)) {
        check.removeEventListener("change", runChecks);
      }
    };
  });

  return screen;
};

export const Header = component$(() => {
  const isMenuOpened = useSignal(false);
  const pathname = useLocation().url.pathname;
  const isGuide = pathname.includes("guide");

  const closeHandler = $(() => {
    isMenuOpened.value = false;
  });

  return (
    <header
      class={[
        styles.root,
        {
          [styles.rootGuide]: isGuide,
        },
      ]}
    >
      <Link href="/" class={styles.logo}>
        <IconLogo />
        <h2 class={styles.title}>Hexa Center</h2>
      </Link>
      <h3 class={styles.dash}>-</h3>
      <div
        onClick$={() => {
          isMenuOpened.value = true;
        }}
        class={styles.openButton}
      >
        <IconMenu2 />
      </div>
      <nav class={[styles.nav, { [styles.navOpened]: isMenuOpened.value }]}>
        <div onClick$={closeHandler} class={styles.closeButton}>
          <IconX />
        </div>
        <Link
          onClick$={closeHandler}
          class={[styles.item, { [styles.itemActive]: pathname === "/" }]}
          href="/"
        >
          Home
        </Link>
        <Link
          onClick$={closeHandler}
          class={[
            styles.item,
            { [styles.itemActive]: pathname.startsWith("/features") },
          ]}
          href="/features"
        >
          Features
        </Link>
        {/* <Link
          onClick$={closeHandler}
          class={[
            styles.item,
            { [styles.itemActive]: pathname.startsWith("/info") },
          ]}
          href="/info"
        >
          Info
        </Link> */}
        <Link
          onClick$={closeHandler}
          class={[
            styles.item,
            { [styles.itemActive]: pathname.startsWith("/pricing") },
          ]}
          href="/pricing"
        >
          Pricing
        </Link>
        <Link
          onClick$={closeHandler}
          class={[styles.item, { [styles.itemActive]: isGuide }]}
          href="/guide"
        >
          Guide
        </Link>
        <Link
          onClick$={closeHandler}
          class={[
            styles.item,
            { [styles.itemActive]: pathname.startsWith("/contact") },
          ]}
          href="/contact"
        >
          Contact
        </Link>
        <Link
          onClick$={closeHandler}
          class={[
            styles.item,
            { [styles.itemActive]: pathname.includes("news") },
          ]}
          href="/news"
        >
          News
        </Link>
      </nav>
    </header>
  );
});
