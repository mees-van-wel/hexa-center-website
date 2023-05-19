import type { QwikIntrinsicElements } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";
import type { InputWrapperProps } from "../inputWrapper/inputWrapper";
import { InputWrapper } from "../inputWrapper/inputWrapper";
import inputStyles from "~/styles/input.module.scss";

type TextInputProps = QwikIntrinsicElements["input"] & InputWrapperProps;

export const TextInput = component$<TextInputProps>((props) => (
  <InputWrapper {...props}>
    <input class={inputStyles.input} {...props} />
  </InputWrapper>
));
