import { component$, $, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";
import { z } from "@builder.io/qwik-city";
import { type InitialValues, formAction$ } from "@modular-forms/qwik";
import { Client } from "postmark";
import { zodForm$ } from "@modular-forms/qwik";
import { useForm } from "@modular-forms/qwik";
import { Stack } from "~/components/generic/stack/stack";
import { TextArea } from "~/components/generic/textArea/textArea";
import { TextInput } from "~/components/generic/textInput/textInput";
import { Section } from "~/components/section/section";
import styles from "./index.module.scss";
import { Button } from "~/components/generic/button/button";
import { SelectInput } from "~/components/generic/selectInput/selectInput";

const contactSchema = z.object({
  name: z.string().min(1, "Please enter your name."),
  email: z
    .string()
    .min(1, "Please enter your email.")
    .email("The email address is badly formatted."),
  phoneNumber: z.string(),
  reason: z.string().min(1, "Please select your reason for contacting us."),
  message: z.string(),
});

type ContactForm = z.infer<typeof contactSchema>;

export const useFormLoader = routeLoader$<InitialValues<ContactForm>>(() => ({
  name: "",
  email: "",
  phoneNumber: "",
  reason: "Schedule a demo",
  message: "",
}));

export const useFormAction = formAction$<ContactForm>(
  (values, requestEvent) => {
    const mailClient = new Client(
      requestEvent.env.get("POSTMARK_SERVER_TOKEN") as string
    );

    mailClient.sendEmail({
      From: "Hexa Center <noreply@hexa.center>",
      To: "Hexa Center <info@hexa-it.nl>",
      Subject: `Request: ${values.reason}`,
      HtmlBody: `New website request: <b>${values.reason}</b>.<br /><br />Name: ${values.name}<br />Email: ${values.email}<br />Phone: ${values.phoneNumber}<br />Message: ${values.message}`,
    });
  },
  zodForm$(contactSchema)
);

export default component$(() => {
  const hasSubmitted = useSignal(false);
  const [, { Form, Field }] = useForm<ContactForm>({
    loader: useFormLoader(),
    action: useFormAction(),
    validate: zodForm$(contactSchema),
  });

  const handleSubmit = $(() => {
    hasSubmitted.value = true;
  });

  return (
    <Section classList={styles.root} pt={116} pb={66}>
      <div class={styles.card}>
        <h3
          style={{
            marginBottom: "16px",
          }}
        >
          Get in Touch with us
        </h3>
        {hasSubmitted.value ? (
          <p>Thank you for submitting!</p>
        ) : (
          <Form onSubmit$={handleSubmit}>
            <Stack>
              <Field name="name">
                {(field, props) => (
                  <TextInput
                    {...props}
                    label="Name"
                    error={field.error}
                    required
                  />
                )}
              </Field>
              <Field name="email">
                {(field, props) => (
                  <TextInput
                    {...props}
                    label="Email"
                    type="email"
                    error={field.error}
                    required
                  />
                )}
              </Field>
              <Field name="phoneNumber">
                {(field, props) => (
                  <TextInput
                    {...props}
                    label="Phone number"
                    type="tel"
                    error={field.error}
                  />
                )}
              </Field>
              <Field name="reason">
                {(field, props) => (
                  <SelectInput
                    {...props}
                    label="Reason"
                    error={field.error}
                    data={[
                      {
                        label: "Schedule a demo",
                      },
                      {
                        label: "More information",
                      },
                      {
                        label: "Support",
                      },
                      {
                        label: "Other",
                      },
                    ]}
                    required
                  />
                )}
              </Field>
              <Field name="message">
                {(field, props) => (
                  <TextArea {...props} label="Message" error={field.error} />
                )}
              </Field>
              <Button type="submit">Send</Button>
            </Stack>
          </Form>
        )}
      </div>
    </Section>
  );
});

export const head: DocumentHead = {
  title: "Contact | Hexa Center",
  meta: [
    {
      name: "description",
      content: "Get in Touch with us",
    },
  ],
};
