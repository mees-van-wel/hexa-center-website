import { component$, $, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";
import { z } from "@builder.io/qwik-city";
import {
  type InitialValues,
  type SubmitHandler,
  formAction$,
} from "@modular-forms/qwik";
import { zodForm$ } from "@modular-forms/qwik";
import { useForm } from "@modular-forms/qwik";
import { Stack } from "~/components/generic/stack/stack";
import { TextArea } from "~/components/generic/textArea/textArea";
import { TextInput } from "~/components/generic/textInput/textInput";
import { Section } from "~/components/section/section";
import styles from "./index.module.scss";
import { Button } from "~/components/generic/button/button";

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
  reason: "",
  message: "",
}));

export const useFormAction = formAction$<ContactForm>((values) => {
  // TODO Send mail
}, zodForm$(contactSchema));

export default component$(() => {
  const hasSubmitted = useSignal(false);
  const [, { Form, Field }] = useForm<ContactForm>({
    loader: useFormLoader(),
    action: useFormAction(),
    validate: zodForm$(contactSchema),
  });

  const handleSubmit: SubmitHandler<ContactForm> = $(() => {
    hasSubmitted.value = true;
  });

  return (
    <Section classList={styles.root} pt={200}>
      <div class={styles.card}>
        <h1
          style={{
            marginBottom: "16px",
          }}
        >
          Get in Touch with us
        </h1>
        {hasSubmitted.value && <p>Thank you for submitting</p>}
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
                <TextInput
                  {...props}
                  label="Reason"
                  error={field.error}
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
      </div>
    </Section>
  );
});

export const head: DocumentHead = {
  title: "Hexa Center > Contact",
};
