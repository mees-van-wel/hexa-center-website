import { component$, useStore } from "@builder.io/qwik";
import { Section } from "~/components/section/section";
import { Slider } from "~/components/generic/slider/slider";
import { Stack } from "~/components/generic/stack/stack";
import { Checkbox } from "~/components/generic/checkbox/checkbox";

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

  return (
    <Section pt={200} pb={150}>
      <Stack>
        <h1>Hexa Center Pricing Calculator</h1>
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
          label="Custom Fields"
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
          onChange$={() =>
            (pricingState.scheduling = pricingState.scheduling ? 0 : 12)
          }
        />
        <h3>Add-ons</h3>
        <Checkbox
          label="Appointment Types"
          description="€ 5.00 Per licence per month."
          checked={!!pricingState.appointmentTypes}
          onChange$={() =>
            (pricingState.appointmentTypes = pricingState.appointmentTypes
              ? 0
              : 5)
          }
        />
        <Checkbox
          label="Multi-Calendar View"
          description="€ 3.00 Per licence per month."
          checked={!!pricingState.multiCalendarView}
          onChange$={() =>
            (pricingState.multiCalendarView = pricingState.multiCalendarView
              ? 0
              : 3)
          }
        />
        <Checkbox
          label="Video calls"
          description="€ 7.00 Per licence per month."
          checked={!!pricingState.videoCalls}
          onChange$={() =>
            (pricingState.videoCalls = pricingState.videoCalls ? 0 : 7)
          }
        />
        <h2>Healthcare Module</h2>
        <Checkbox
          description="€ 15.00 Per licence per month."
          checked={!!pricingState.healthcare}
          onChange$={() =>
            (pricingState.healthcare = pricingState.healthcare ? 0 : 17)
          }
        />
        <h3>Add-ons</h3>
        <Checkbox
          label="Programs"
          description="€ 13.00 Per licence per month."
          checked={!!pricingState.programs}
          onChange$={() =>
            (pricingState.programs = pricingState.programs ? 0 : 13)
          }
        />
        <h1>
          {new Intl.NumberFormat("nl-NL", {
            style: "currency",
            currency: "EUR",
          }).format(
            (34.3 +
              pricingState.customFields +
              pricingState.scheduling +
              pricingState.appointmentTypes +
              pricingState.multiCalendarView +
              pricingState.videoCalls +
              pricingState.healthcare +
              pricingState.programs) *
              pricingState.licences
          )}
        </h1>
      </Stack>
    </Section>
  );
});
