import { component$, Slot } from "@builder.io/qwik";
import { Header } from "~/components/header/header";
import { Footer } from "~/components/footer/footer";
import styles from "./layout.module.scss";

export default component$(() => {
  return (
    <div class={styles.container}>
      <Header />
      <main class={styles.asd}>
        <Slot />
      </main>
      <Footer />
    </div>
  );
});
