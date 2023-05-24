import {
  component$,
  useOnWindow,
  $,
  useVisibleTaskQrl,
} from "@builder.io/qwik";
import { Group } from "~/components/generic/group/group";
import { Section } from "~/components/section/section";
import styles from "./index.module.scss";
import { Link } from "@builder.io/qwik-city";
import { Calling } from "~/components/illustrations/calling";
import { Choose } from "~/components/illustrations/choose";

export default component$(() => {
  const imageChecker = $(() => {
    const images = document.querySelectorAll(`.${styles.image}`);

    images.forEach((image) => {
      const { top } = image.getBoundingClientRect();
      if (top > -200 && top < 500) image.classList.add(styles.imageShow);
      else image.classList.remove(styles.imageShow);
    });
  });

  useVisibleTaskQrl(imageChecker);
  useOnWindow("scroll", imageChecker);

  return (
    <>
      <Section pt={132} pr={0} pb={0}>
        <Group justify="space-between" align="flex-start">
          <div class={styles.textContainer}>
            <h1>Why Choose Hexa Center?</h1>
            <p>
              Tired of struggling with outdated, clunky Electronic Medical
              Records systems? Hexa Center is here to change the game. Our
              innovative solution is designed to address the pain points of
              traditional EMR systems while offering a wealth of features and
              benefits that enable healthcare professionals to focus on what
              truly matters - providing exceptional care to their patients.
            </p>
            <Choose />
          </div>
          <div class={styles.image}>
            <img
              src="/images/calendar-dark-frame.jpg"
              width={960}
              height={540}
              alt="Laptop"
              title="Laptop"
            />
          </div>
        </Group>
      </Section>
      <Section pr={0} pb={0}>
        <Group justify="space-between" align="flex-start">
          <div class={styles.textContainer}>
            <h1>Benefits</h1>
            <p>
              <b>1. Streamlined Workflows and Enhanced Efficiency.</b>
              <br />
              Say goodbye to time-consuming processes and redundant tasks. Hexa
              Center's intuitive interface and smart features help you save
              time, minimize manual input, and optimize daily operations.
            </p>
            <p>
              <b>2. Unparalleled Accuracy and Reduced Errors.</b>
              <br />
              Hexa Center minimizes the risk of errors and inaccuracies through
              its advanced data validation and automation capabilities. Focus on
              providing the best care for your patients with confidence.
            </p>
            <p>
              <b>3. Improved Patient Outcomes and Personalized Care</b>
              <br />
              With Hexa Center, you can quickly access comprehensive patient
              information and make data-driven decisions to ensure optimal care.
              Our advanced analytics help you identify trends and tailor
              treatments to individual needs.
            </p>
            <p>
              <b>4. Cost Savings and Increased Revenue</b>
              <br />
              Our innovative EMR system is designed to boost your organization's
              financial performance. Experience significant cost savings through
              increased efficiency and productivity, and unlock new revenue
              streams with advanced data insights.
            </p>
          </div>
          <div class={styles.image}>
            <img
              src="/images/role-dark.jpg"
              width={960}
              height={540}
              alt="Laptop"
              title="Laptop"
            />
          </div>
        </Group>
      </Section>
      <Section pr={0} pb={0}>
        <Group justify="space-between" align="flex-start">
          <div class={styles.textContainer}>
            <h1>Seamless Transition and Ongoing Support</h1>
            <p>
              We understand that implementing a new EMR system can be
              challenging. That's why we offer comprehensive training and
              technical support to ensure a smooth transition. Our dedicated
              team will be with you every step of the way, providing expert
              guidance and assistance whenever you need it.
            </p>
            <Calling />
          </div>
          <div class={styles.image}>
            <img
              src="/images/calendar-dark-frame.jpg"
              width={960}
              height={540}
              alt="Laptop"
              title="Laptop"
            />
          </div>
        </Group>
      </Section>
      <Section pr={0} pb={150}>
        <Group justify="space-between" align="flex-start">
          <div class={styles.textContainer}>
            <h1>
              Ready to experience the future of Electronic Medical Records?
            </h1>
            <p>
              <Link href="/contact" class={styles.link}>
                Schedule a free demo
              </Link>{" "}
              with our team today and discover how Hexa Center can empower your
              healthcare organization through digital innovation.
            </p>
          </div>
          <div class={styles.image}>
            <img
              src="/images/unite-frame.jpg"
              width={960}
              height={540}
              alt="Laptop"
              title="Laptop"
            />
          </div>
        </Group>
      </Section>
    </>
  );
});
