import type { ClassList } from "@builder.io/qwik";
import { Slot, component$ } from "@builder.io/qwik";
import type * as CSS from "csstype";
import styles from "./stack.module.scss";

interface StackProps {
  id?: string;
  classList?: ClassList;
  align?: CSS.Properties["alignItems"];
  justify?: CSS.Properties["justifyContent"];
  gap?: number;
}

export const Stack = component$<StackProps>(
  ({ id, align = "flex-start", justify, gap = 16, classList }) => (
    <div
      id={id}
      style={{
        alignItems: align,
        justifyContent: justify,
        gap: `${gap}px`,
      }}
      class={[classList, styles.root]}
    >
      <Slot />
    </div>
  )
);
