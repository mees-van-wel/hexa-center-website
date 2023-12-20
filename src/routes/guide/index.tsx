import { component$ } from "@builder.io/qwik";
import { Section } from "~/components/section/section";
import styles from "./index.module.scss";
import { Group } from "~/components/generic/group/group";
import { Stack } from "~/components/generic/stack/stack";
import { IconSettings } from "~/components/icons/settings";
import { IconBuilding } from "~/components/icons/building";
import { IconLock } from "~/components/icons/lock";
import { IconUsers } from "~/components/icons/users";
import { IconClipboardList } from "~/components/icons/clipboardList";
import { IconCalendar } from "~/components/icons/calendar";
import { IconCalendarStats } from "~/components/icons/calendarStats";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import { IconClipboardHeart } from "~/components/icons/clipboardHeart";

export default component$(() => (
  <Section classList={styles.root} pt={0} pb={0}>
    <Stack align="center">
      <Stack align="center" gap={0}>
        <h1 class={styles.title}>Welcome to the guide</h1>
        <p class={styles.text}>
          You can pick a category that's related to your question
        </p>
      </Stack>
      <Group justify="center">
        <Link href="/guide/system" class={styles.link}>
          <IconSettings />
          System
        </Link>
        <Link href="/guide/essentials/properties" class={styles.link}>
          <IconBuilding />
          Properties
        </Link>
        <Link href="/guide/essentials/roles" class={styles.link}>
          <IconLock />
          Roles
        </Link>
        <Link href="/guide/essentials/users" class={styles.link}>
          <IconUsers />
          Users
        </Link>
        <Link href="/guide/scheduling/appointment-types" class={styles.link}>
          <IconCalendarStats />
          Appointment Types
        </Link>
        <Link href="/guide/scheduling/calendar" class={styles.link}>
          <IconCalendar />
          Calendar
        </Link>
        <Link href="/guide/healthcare/programs" class={styles.link}>
          <IconClipboardList />
          Programs
        </Link>
        <Link href="/guide/healthcare/dossiers" class={styles.link}>
          <IconClipboardHeart />
          Dossiers 🚧
        </Link>
      </Group>
    </Stack>
  </Section>
));

export const head: DocumentHead = {
  title: "Guide | Hexa Center",
  meta: [
    {
      name: "description",
      content: "Welcome to the guide",
    },
  ],
};
