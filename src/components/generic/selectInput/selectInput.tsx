import type { QwikIntrinsicElements } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";
import type { InputWrapperProps } from "../inputWrapper/inputWrapper";
import { InputWrapper } from "../inputWrapper/inputWrapper";
import inputStyles from "~/styles/input.module.scss";

interface SelectInputOption {
  label: string;
  value?: string;
}

type SelectInputProps = InputWrapperProps &
  QwikIntrinsicElements["select"] & {
    data: SelectInputOption[];
  };

export const SelectInput = component$<SelectInputProps>((props) => (
  <InputWrapper {...props}>
    <select class={inputStyles.input} {...props}>
      {props.data.map(({ value, label }, index) => (
        <option
          selected={index === 0}
          key={value || label}
          value={value || label}
        >
          {label}
        </option>
      ))}
    </select>
  </InputWrapper>
));
