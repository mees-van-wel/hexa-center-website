import { component$, useStore, useVisibleTask$ } from "@builder.io/qwik";
import { Section } from "~/components/section/section";
import { Slider } from "~/components/generic/slider/slider";
import { Stack } from "~/components/generic/stack/stack";
import { Checkbox } from "~/components/generic/checkbox/checkbox";
import { Group } from "~/components/generic/group/group";
import styles from "./index.module.scss";
import { Link } from "@builder.io/qwik-city";
import { IconHelpCircleFilled } from "~/components/icons/helpCircleFilled";

const basePrice = 34.3;

const format = (total: number) =>
  new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
  }).format(total);

export default component$(() => {
  const pricingState = useStore({
    licences: 1,
    customFields: 0,
    scheduling: 0,
    appointmentTypes: 0,
    multiCalendarView: 0,
    videoCalls: 0,
    healthcare: 0,
    programs: 0,
  });

  const total =
    (basePrice +
      pricingState.customFields +
      pricingState.scheduling +
      pricingState.appointmentTypes +
      pricingState.multiCalendarView +
      pricingState.videoCalls +
      pricingState.healthcare +
      pricingState.programs) *
    pricingState.licences;

  useVisibleTask$(() => {
    const value = window.localStorage.getItem("pricing");
    if (!value) return;
    const localPricing: typeof pricingState = JSON.parse(value);

    pricingState.licences = localPricing.licences;
    pricingState.customFields = localPricing.customFields;
    pricingState.scheduling = localPricing.scheduling;
    pricingState.appointmentTypes = localPricing.appointmentTypes;
    pricingState.multiCalendarView = localPricing.multiCalendarView;
    pricingState.videoCalls = localPricing.videoCalls;
    pricingState.healthcare = localPricing.healthcare;
    pricingState.programs = localPricing.programs;
  });

  useVisibleTask$(({ track }) => {
    const value = track(() => JSON.stringify(pricingState));
    window.localStorage.setItem("pricing", value);
  });

  return (
    <Section classList={styles.root} pt={116} pb={66}>
      <Group justify="space-evenly" gap={32} align="center">
        <Stack classList={styles.card}>
          <h1>Pricing Calculator</h1>
          <p>All prices are without VAT.</p>
          <Slider
            label="Number of employees"
            description="This will be the number of licences"
            min={1}
            max={100}
            step={1}
            value={pricingState.licences.toString()}
            onInput$={function (e) {
              if (!e.target || !("value" in e.target)) return;
              pricingState.licences = parseInt(e.target.value as string);
            }}
          />
          <h2>System</h2>
          <h3>Add-ons</h3>
          <Checkbox
            label={
              <Group gap={8}>
                <p>Custom Fields</p>
                <Link class={styles.info} href="/features/#custom-fields">
                  <IconHelpCircleFilled />
                </Link>
              </Group>
            }
            description="€ 6.00 Per licence per month."
            checked={!!pricingState.customFields}
            onChange$={() =>
              (pricingState.customFields = pricingState.customFields ? 0 : 6)
            }
          />
          <h2>Scheduling Module</h2>
          <Checkbox
            description="€ 12.00 Per licence per month."
            checked={!!pricingState.scheduling}
            onChange$={() => {
              pricingState.scheduling = pricingState.scheduling ? 0 : 12;
              if (!pricingState.scheduling) {
                pricingState.appointmentTypes = 0;
                pricingState.multiCalendarView = 0;
                pricingState.videoCalls = 0;
              }
            }}
          />
          {!!pricingState.scheduling && (
            <>
              <h3>Add-ons</h3>
              <Checkbox
                label={
                  <Group gap={8}>
                    <p>Appointment Types</p>
                    <Link
                      class={styles.info}
                      href="/features/#appointment-types"
                    >
                      <IconHelpCircleFilled />
                    </Link>
                  </Group>
                }
                description="€ 5.00 Per licence per month."
                checked={!!pricingState.appointmentTypes}
                onChange$={() =>
                  (pricingState.appointmentTypes = pricingState.appointmentTypes
                    ? 0
                    : 5)
                }
              />
              <Checkbox
                label={
                  <Group gap={8}>
                    <p>Multi-Calendar View</p>
                    <Link
                      class={styles.info}
                      href="/features/#multi-calendar-view"
                    >
                      <IconHelpCircleFilled />
                    </Link>
                  </Group>
                }
                description="€ 3.00 Per licence per month."
                checked={!!pricingState.multiCalendarView}
                onChange$={() =>
                  (pricingState.multiCalendarView =
                    pricingState.multiCalendarView ? 0 : 3)
                }
              />
              <Checkbox
                label={
                  <Group gap={8}>
                    <p>Video calls</p>
                    <Link class={styles.info} href="/features/#video-calls">
                      <IconHelpCircleFilled />
                    </Link>
                  </Group>
                }
                description="€ 7.00 Per licence per month."
                checked={!!pricingState.videoCalls}
                onChange$={() =>
                  (pricingState.videoCalls = pricingState.videoCalls ? 0 : 7)
                }
              />
            </>
          )}
          <h2>Healthcare Module</h2>
          <Checkbox
            description="€ 15.00 Per licence per month."
            checked={!!pricingState.healthcare}
            onChange$={() => {
              pricingState.healthcare = pricingState.healthcare ? 0 : 17;
              if (!pricingState.healthcare) {
                pricingState.programs = 0;
              }
            }}
          />
          {!!pricingState.healthcare && (
            <>
              <h3>Add-ons</h3>
              <Checkbox
                label={
                  <Group gap={8}>
                    <p>Programs</p>
                    <Link class={styles.info} href="/features/#programs">
                      <IconHelpCircleFilled />
                    </Link>
                  </Group>
                }
                description="€ 13.00 Per licence per month."
                checked={!!pricingState.programs}
                onChange$={() =>
                  (pricingState.programs = pricingState.programs ? 0 : 13)
                }
              />
            </>
          )}
        </Stack>
        <Stack gap={32} classList={styles.cardContainer} align="center">
          <Stack classList={styles.card}>
            <h3>Total per month with 20% off for the first year</h3>
            <h2>{format(total * 0.8)}</h2>
            <h4>Discount per month 🎉</h4>
            <h3>{format(total * 0.2)}</h3>
          </Stack>
          <Stack classList={styles.card}>
            <h4>Total per month after the first year</h4>
            <h3>{format(total)}</h3>
          </Stack>
        </Stack>
      </Group>
    </Section>
  );
});
