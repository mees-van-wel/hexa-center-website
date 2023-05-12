import type { ClassList } from "@builder.io/qwik";
import { Slot, component$ } from "@builder.io/qwik";
import type * as CSS from "csstype";
import styles from "./section.module.scss";

interface GroupProps {
  id?: string;
  classList?: ClassList;
  align?: CSS.Properties["alignItems"];
  justify?: CSS.Properties["justifyContent"];
  direction?: CSS.Properties["direction"];
  gap?: number;
  pt?: number;
  pr?: number;
  pb?: number;
  pl?: number;
  noHeight?: boolean;
}

export const Section = component$<GroupProps>(
  ({
    id,
    classList,
    align = "center",
    justify = "center",
    direction = "column",
    gap,
    pt = 100,
    pr = 164,
    pb = 100,
    pl = 164,
    noHeight,
  }) => (
    <section
      id={id}
      style={{
        alignItems: align,
        justifyContent: justify,
        flexDirection: direction,
        gap: `${gap}px`,
        padding: `${pt}px ${pr}px ${pb}px ${pl}px`,
      }}
      class={[
        classList,
        styles.root,
        {
          [styles.noHeight]: noHeight,
        },
      ]}
    >
      <Slot />
    </section>
  )
);
