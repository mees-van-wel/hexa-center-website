import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { Button } from "~/components/generic/button/button";
import { Group } from "~/components/generic/group/group";
import { Stack } from "~/components/generic/stack/stack";
import { Section } from "~/components/section/section";
import styles from "./index.module.scss";

export default component$(() => {
  const hash = useSignal<string>();

  useVisibleTask$(() => {
    hash.value = window.location.hash.substring(1);
  });

  return (
    <>
      <Section pt={116} justify="space-between" gap={32}>
        <Stack>
          <h1>Customizability</h1>
          <h2>Make Hexa Center Truly Yours</h2>
          <p>
            At Hexa Center, we believe your Electronic Medical Record system
            should fit like a glove. That’s why we’ve designed our platform to
            be as adaptable as you are, enabling you to mold Hexa Center into
            the perfect tool for your team's unique needs.
          </p>
        </Stack>
        <Stack gap={32}>
          <Group align="stretch" gap={32}>
            <Stack classList={styles.feature}>
              <p class={styles.badge}>Roles</p>
              <h3>Create Your Team, Your Way</h3>
              <p>
                Start by setting up your own team roles, just like you have in
                your day-to-day work. Whether they're doctors, psychologists,
                clients, suppliers, or anything else, you can create a spot for
                them in Hexa Center that truly reflects their role.
              </p>
            </Stack>
            <Stack
              id="custom-fields"
              classList={[
                styles.feature,
                {
                  [styles.featureActive]: hash.value === "custom-fields",
                },
              ]}
            >
              <p class={styles.badge}>Custom Fields</p>
              <h3>Add a Personal Touch</h3>
              <p>
                For each role, you can easily add custom fields. Need to note
                allergies for each client? No problem, just drag and drop a new
                field into their role. Need to keep track of a supplier's VAT
                ID? Easy peasy, just add it in! With Hexa Center, you have the
                freedom to note down exactly what you need, when you need it.
              </p>
            </Stack>
          </Group>
          <Group align="stretch" gap={32}>
            <Stack
              id="programs"
              classList={[
                styles.feature,
                {
                  [styles.featureActive]: hash.value === "programs",
                },
              ]}
            >
              <p class={styles.badge}>Program Builder</p>
              <h3>Design Your Own Treatment Plans</h3>
              <p>
                We also offer a flexible program builder, allowing you to create
                your own treatment plans from scratch. This means you can
                transfer your real-world workflow straight into Hexa Center,
                without having to adjust to a new system.
              </p>
            </Stack>
            <Stack classList={styles.feature}>
              <p class={styles.badge}>Dossier Resumability</p>
              <h3>As Many Programs as You Need</h3>
              <p>
                Once you've made a program, you can add it to a patient's
                dossier as often as necessary. This lets you keep track of
                progress and ensure consistency in patient care, without any
                extra hassle.
              </p>
            </Stack>
          </Group>
        </Stack>
        <p class={styles.footnote}>
          We've built Hexa Center to work for you, not the other way around. We
          want to make your healthcare management as smooth and personal as
          possible, so you can focus on what you do best: providing top-notch
          care to your patients.
        </p>
      </Section>
      <Section justify="space-between" gap={32}>
        <Stack>
          <h1>Scheduling</h1>
          <h2>Streamline Your Appointments</h2>
          <p>
            Ditch the old-school planners and step into the future of scheduling
            with Hexa Center’s modern calendar. Choose from a variety of
            views—month, week, workweek, or day to see your appointments in a
            way that suits you best.
          </p>
        </Stack>
        <Stack gap={32}>
          <Group align="stretch" gap={32}>
            <Stack classList={styles.feature}>
              <p class={styles.badge}>Working Hours</p>
              <h3>Customizable Workweek Views</h3>
              <p>
                Take the guesswork out of your schedule. With Hexa Center, your
                workweek view is customized according to your set working hours.
                At a glance, you can see when you're free and when you're
                booked.
              </p>
            </Stack>
            <Stack
              id="multi-calendar-view"
              classList={[
                styles.feature,
                {
                  [styles.featureActive]: hash.value === "multi-calendar-view",
                },
              ]}
            >
              <p class={styles.badge}>Multi-Calendar View</p>
              <h3>Teamwork Made Easy</h3>
              <p>
                Say goodbye to double-bookings and missed appointments. With
                Hexa Center, you can view and make appointments in your team
                members' calendars. It’s all about making coordination within
                your healthcare organization seamless.
              </p>
            </Stack>
          </Group>
          <Group align="stretch" gap={32}>
            <Stack
              id="appointment-types"
              classList={[
                styles.feature,
                {
                  [styles.featureActive]: hash.value === "appointment-types",
                },
              ]}
            >
              <p class={styles.badge}>Appointment Types</p>
              <h3>Appointment Types, Tailored to You</h3>
              <p>
                Take control of your appointments with customizable types that
                act as templates. Define a standard duration, description, and
                even assign a color label for each type. With Hexa Center,
                managing your different appointments is a cinch.
              </p>
            </Stack>
            <Stack
              id="video-calls"
              classList={[
                styles.feature,
                {
                  [styles.featureActive]: hash.value === "video-calls",
                },
              ]}
            >
              <p class={styles.badge}>Video Calls</p>
              <h3>Embrace the Future with Video Calls</h3>
              <p>
                We're not just about making things easier—we're about making
                them better. That’s why Hexa Center supports video call
                appointments, enabling you to provide personalized care to your
                patients, no matter where they are.
              </p>
            </Stack>
          </Group>
        </Stack>
        <p class={styles.footnote}>
          Transforming your healthcare organization's scheduling process has
          never been this easy.
        </p>
      </Section>
      <Section justify="space-between" gap={32}>
        <Stack>
          <h1>Documentation</h1>
          <h2>
            Upgrade to Modern Patient Records with Our Innovative Dossier System
          </h2>
          <p>
            Experience the evolution of patient record-keeping with Hexa
            Center's advanced dossier system. Designed to simplify and
            streamline your documentation process, our dossiers offer
            flexibility and functionality in a user-friendly package.
          </p>
        </Stack>
        <Stack gap={32}>
          <Group align="stretch" gap={32}>
            <Stack classList={styles.feature}>
              <p class={styles.badge}>Clients</p>
              <h3>Multiple Clients, One Dossier</h3>
              <p>
                Say goodbye to separate files for partners, family members, or
                group patients. With our modern dossier concept, you can easily
                manage multiple clients in a single dossier. Program steps can
                be marked as individual or joint, providing clarity and accuracy
                in treatment plans.
              </p>
            </Stack>
            <Stack classList={styles.feature}>
              <p class={styles.badge}>External Steps</p>
              <h3>Customizable Questionnaires</h3>
              <p>
                Add another layer of personalization with custom-built
                questionnaires that seamlessly integrate into your dossiers.
                Send them directly to clients and watch as their responses
                populate in the right place, creating a comprehensive view of
                their healthcare journey.
              </p>
            </Stack>
          </Group>
          <Group align="stretch" gap={32}>
            <Stack classList={styles.feature}>
              <p class={styles.badge}>Timeline</p>
              <h3>Keep Track with Timeline</h3>
              <p>
                Stay on top of everything with our timeline feature, where every
                event gets logged. It’s like having a bird’s eye view of your
                client’s history, right at your fingertips.
              </p>
            </Stack>
            <Stack classList={styles.feature}>
              <p class={styles.badge}>Uploads</p>
              <h3>File Uploads</h3>
              <p>
                Need to attach additional documents to a dossier? No problem!
                Our system allows you to upload a wide variety of file types,
                including PDFs, photos, audio, and video. Keep all relevant
                information and materials in one place, easily accessible
                whenever you need it.
              </p>
            </Stack>
          </Group>
          <Group align="stretch" gap={32}>
            <Stack classList={styles.feature}>
              <p class={styles.badge}>Notes</p>
              <h3>Flexible Notes</h3>
              <p>
                Our dossier isn't just about structure, we're all about
                flexibility too! With Notes, you can create open-ended notes or
                reports, providing you with a space to jot down observations or
                insights outside of the predefined programs.
              </p>
            </Stack>
          </Group>
        </Stack>
        <p class={styles.footnote}>
          With Hexa Center's modern dossier system, managing patient records has
          never been this efficient
        </p>
      </Section>
      <Section classList={styles.ready} pb={150} gap={16}>
        <Stack classList={styles.card} align="center">
          <h1>Ready to give Hexa Center a spin?</h1>
          <p>Experience how our system can adapt to your needs</p>
          <Button href="/contact">Book a free demo</Button>
        </Stack>
      </Section>
    </>
  );
});
