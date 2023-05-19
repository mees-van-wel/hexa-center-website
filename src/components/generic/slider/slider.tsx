import type { QwikIntrinsicElements } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";
import styles from "./slider.module.scss";
import type { InputWrapperProps } from "../inputWrapper/inputWrapper";
import { InputWrapper } from "../inputWrapper/inputWrapper";

type SliderProps = InputWrapperProps & QwikIntrinsicElements["input"];

export const Slider = component$<SliderProps>((props) => {
  return (
    <InputWrapper {...props}>
      <div
        class={styles.root}
        style={`--min:${props.min}; --max:${props.max}; --step:${props.step};`}
      >
        <div class={styles.container}>
          <input
            class={styles.input}
            style={{
              background: `linear-gradient(90deg, rgb(var(--primary-color)) ${props.value}%, rgb(var(--background-accent-color)) ${props.value}%)`,
            }}
            {...props}
            type="range"
          />
          <div class={styles.values}>
            <p>{props.min}</p>
            <p>{props.max}</p>
          </div>
        </div>
        <output class={styles.output}>{props.value as string}</output>
      </div>
    </InputWrapper>
  );
});
