import type { QwikIntrinsicElements } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";
import type { InputWrapperProps } from "../inputWrapper/inputWrapper";
import { InputWrapper } from "../inputWrapper/inputWrapper";
import styles from "./textArea.module.scss";

type TextAreaProps = QwikIntrinsicElements["textarea"] & InputWrapperProps;

export const TextArea = component$<TextAreaProps>((props) => (
  <InputWrapper {...props}>
    <textarea class={styles.root} {...props} />
  </InputWrapper>
));
