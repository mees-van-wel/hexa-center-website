import { Slot, component$ } from "@builder.io/qwik";
import styles from "./inputWrapper.module.scss";

export interface InputWrapperProps {
  label?: string;
  description?: string;
  required?: boolean;
  error?: string;
}

export const InputWrapper = component$<InputWrapperProps>(
  ({ label, description, required, error }) => (
    <div class={styles.root}>
      {label && (
        <label class={styles.label}>
          {required ? (
            <>
              {label} <span class={styles.asterisk}>*</span>
            </>
          ) : (
            label
          )}
        </label>
      )}
      {description && <p class={styles.description}>{description}</p>}
      <Slot />
      {error && (
        <p class={styles.error} role="alert">
          {error}
        </p>
      )}
    </div>
  )
);
