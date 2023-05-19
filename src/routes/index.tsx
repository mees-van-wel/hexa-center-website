import { component$, $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import styles from "./index.module.scss";
import { IconChevronDown } from "~/components/icons/chevronDown";
import { Group } from "~/components/generic/group/group";
import { IconEmpowerment } from "~/components/icons/empowerment";
import { Stack } from "~/components/generic/stack/stack";
import { Section } from "~/components/section/section";
import { Button } from "~/components/generic/button/button";

export default component$(() => {
  const scrollHandler = $(() => {
    const element = document.getElementById("offer");
    element?.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <>
      <Section classList={styles.hero} pt={200}>
        <Group justify="space-between" noWrap>
          <div>
            <h1 class={styles.title}>
              Empower <IconEmpowerment />
              <br />
              your healthcare organization
              <br />
              through digital innovation
            </h1>
            <div class={styles.textContainer}>
              <p>
                The future of healthcare documentation, experience a new level
                of efficiency, accuracy, and patient care.
              </p>
            </div>
            <Button href="/contact">Book a free demo</Button>
          </div>
          <img
            class={styles.image}
            src="/images/calendar-dark-frame.jpg"
            width={854}
            height={480}
            alt="Laptop"
            title="Laptop"
          />
        </Group>
      </Section>
      <Section id="offer" classList={styles.offer} pt={0} justify="flex-start">
        <div onClick$={scrollHandler} class={styles.scroller}>
          <IconChevronDown />
        </div>
        <h2 class={styles.subtitle}>Limited-Time Launch Offer 🎉</h2>
        <Group classList={styles.card} gap={32} grow>
          <img
            class={styles.offerImage}
            src="/images/offer.jpg"
            width="100%"
            height={400}
          />
          <Stack>
            <p>
              We're thrilled to announce the launch of Hexa Center, our
              game-changing Electronic Medical Record system. To celebrate,
              we're offering an exclusive discount to help your healthcare
              organization embrace digital innovation and experience the many
              benefits of our state-of-the-art solution.
            </p>
            <p>
              <b>
                For a limited time only, take advantage of our Launch
                Celebration Offer:
              </b>
            </p>
            <ul>
              <li>
                Receive a 20% discount on the first year of your Hexa Center
                subscription
              </li>
              <li>
                Enjoy a complimentary onboarding and training package for your
                staff, valued at €1.600,00-
              </li>
              <li>
                Get 2 months of free priority technical support to ensure a
                smooth transition and ongoing success
              </li>
              <li>
                Free data migration from your existing EMR system, ensuring a
                smooth and hassle-free transition
              </li>
              <li>
                Access to exclusive Hexa Center webinars and training events for
                one year, keeping your staff informed and up-to-date
              </li>
            </ul>
            <p>
              Don't miss out on this incredible opportunity to upgrade your
              healthcare organization's EMR system at a fraction of the cost.
            </p>
            <Button href="/contact">Book a free demo</Button>
          </Stack>
        </Group>
      </Section>
    </>
  );
});

export const head: DocumentHead = {
  title: "Hexa Center",
};
