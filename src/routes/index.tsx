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
      <Section classList={styles.hero} pt={150}>
        <Group classList={styles.title} justify="space-between" gap={64}>
          <Stack classList={styles.homeText}>
            <IconEmpowerment />
            <h1 class={styles.title}>
              Revolutionize Your Healthcare Practice with Digital Innovation
            </h1>
            <p class={styles.subtext}>
              Modern healthcare calls for modern solutions. Welcome to the
              future of healthcare documentation – where efficiency, accuracy,
              and patient care reach new heights.
            </p>
            <div class={styles.buttonContainer}>
              <Button href="/features">Features</Button>
              <Button href="/contact">Book a free demo</Button>
            </div>
          </Stack>
          <picture class={[styles.imageContainer, styles.homeImage]}>
            <source
              srcSet="/images/calendar-dark-frame.avif"
              type="image/avif"
            />
            <source
              srcSet="/images/calendar-dark-frame.webp"
              type="image/webp"
            />
            <img
              class={styles.image}
              src="/images/calendar-dark-frame.jpg"
              width="100%"
              height={400}
              alt="Laptop"
              title="Laptop"
            />
          </picture>
        </Group>
      </Section>
      <Section id="offer" classList={styles.offer} pt={0} justify="flex-start">
        <div onClick$={scrollHandler} class={styles.scroller}>
          <IconChevronDown />
        </div>
        <h2 class={styles.subtitle}>Limited-Time Launch Offer 🎉</h2>
        <Group
          classList={styles.offerContainer}
          justify="space-between"
          gap={16}
        >
          <picture class={styles.imageContainer}>
            <source srcSet="/images/offer.avif" type="image/avif" />
            <source srcSet="/images/offer.webp" type="image/webp" />
            <img
              class={styles.image}
              src="/images/offer.jpg"
              alt="Launch Party"
              title="Launch Party"
              width="100%"
              height={300}
            />
          </picture>
          <div class={styles.offerText}>
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
                  Access to exclusive Hexa Center webinars and training events
                  for one year, keeping your staff informed and up-to-date
                </li>
              </ul>
              <p>
                Don't miss out on this incredible opportunity to upgrade your
                healthcare organization's EMR system at a fraction of the cost.
              </p>
              <Button href="/pricing">Check our pricing</Button>
            </Stack>
          </div>
        </Group>
      </Section>
      <Section pt={0} pb={66}>
        <Stack gap={32} align="center">
          <h1 class={styles.logoTitle}>
            Recognized Excellence, Seamless Integrations, and Proven
            Implementation Strategies
          </h1>
          <Group justify="center" gap={32}>
            <a
              href="https://digitrust.ez2xs.com/portal/certificate?key=dVkpVS7PJkmVUxminELYKAAAQFNIimJ7m2fCp8QgH5spW5cTvtm2PtG0iwcwnmdX"
              rel="noopener noreferrer"
              target="_blank"
            >
              <picture>
                <source srcSet="/images/iso-27001.avif" type="image/avif" />
                <source srcSet="/images/iso-27001.webp" type="image/webp" />
                <img
                  class={styles.logo}
                  src="/images/iso-27001.png"
                  alt="ISO 27001"
                  title="ISO 27001"
                  width="100%"
                  height={250}
                />
              </picture>
            </a>
            <a
              href="https://digitrust.ez2xs.com/portal/certificate?key=CTyS5EmTniaQqjfsJASyuponO0P3ClaScir09s8VtWk6mWu4iLaXigJ2rSrmk6oZ"
              rel="noopener noreferrer"
              target="_blank"
            >
              <picture>
                <source srcSet="/images/nen-7510.avif" type="image/avif" />
                <source srcSet="/images/nen-7510.webp" type="image/webp" />
                <img
                  class={styles.logo}
                  src="/images/nen-7510.png"
                  alt="NEN 7510"
                  title="NEN 7510"
                  width="100%"
                  height={250}
                />
              </picture>
            </a>
          </Group>
          <Group justify="center" gap={32}>
            <a
              href="https://eur-lex.europa.eu/eli/reg/2016/679/oj"
              rel="noopener noreferrer"
              target="_blank"
            >
              <picture>
                <source srcSet="/images/gpdr.avif" type="image/avif" />
                <source srcSet="/images/gpdr.webp" type="image/webp" />
                <img
                  class={styles.logo}
                  src="/images/gpdr.png"
                  alt="GPDR"
                  title="GPDR"
                  width="100%"
                  height={150}
                />
              </picture>
            </a>
            <a
              href="https://www.zorgprestatiemodel.nl/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <picture>
                <source srcSet="/images/zpm.avif" type="image/avif" />
                <source srcSet="/images/zpm.webp" type="image/webp" />
                <img
                  class={styles.logo}
                  src="/images/zpm.png"
                  alt="Zorgprestatiemodel"
                  title="Zorgprestatiemodel"
                  width="100%"
                  height={100}
                />
              </picture>
            </a>
          </Group>
          <a
            href="https://profiles.eco/hexa"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              class={styles.logo}
              src="/images/eco.svg"
              alt="ECO"
              title="ECO"
              width="100%"
              height={150}
            />
          </a>
        </Stack>
      </Section>
    </>
  );
});

export const head: DocumentHead = {
  title: "Hexa Center",
  meta: [
    {
      name: "description",
      content: "Revolutionize Your Healthcare Practice with Digital Innovation",
    },
  ],
};
