import type { QwikIntrinsicElements } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";
import type { InputWrapperProps } from "../inputWrapper/inputWrapper";
import { InputWrapper } from "../inputWrapper/inputWrapper";
import inputStyles from "~/styles/input.module.scss";

type TextAreaProps = QwikIntrinsicElements["textarea"] & InputWrapperProps;

export const TextArea = component$<TextAreaProps>((props) => (
  <InputWrapper {...props}>
    <textarea class={inputStyles.input} {...props} />
  </InputWrapper>
));
