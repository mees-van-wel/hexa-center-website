import { component$, Slot } from "@builder.io/qwik";
import { Header } from "~/components/header/header";
import { Footer } from "~/components/footer/footer";
import styles from "./layout.module.scss";
import { useLocation } from "@builder.io/qwik-city";
import { GuideLayout } from "~/components/guideLayout/guideLayout";

export default component$(() => {
  const pathname = useLocation().url.pathname;
  const isGuide = pathname.includes("guide");

  return (
    <div class={styles.container}>
      <Header />
      {isGuide ? (
        <GuideLayout>
          <Slot />
        </GuideLayout>
      ) : (
        <main class={styles.main}>
          <Slot />
        </main>
      )}

      <Footer />
    </div>
  );
});
