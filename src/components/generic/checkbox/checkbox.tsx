import type { QwikIntrinsicElements } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";
import type { InputWrapperProps } from "../inputWrapper/inputWrapper";
import styles from "./checkbox.module.scss";

type CheckboxProps = InputWrapperProps & QwikIntrinsicElements["input"];

export const Checkbox = component$<CheckboxProps>((props) => (
  <div class={styles.root}>
    {/* @ts-ignore */}
    <input {...props} type="checkbox" class={styles.input} />
    <div>
      {props.label && (
        <label class={styles.label}>
          {props.required ? (
            <>
              {props.label} <span class={styles.asterisk}>*</span>
            </>
          ) : (
            props.label
          )}
        </label>
      )}
      {props.description && (
        <p class={styles.description}>{props.description}</p>
      )}
      {props.error && (
        <p class={styles.error} role="alert">
          {props.error}
        </p>
      )}
    </div>
  </div>
));
