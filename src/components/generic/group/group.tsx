import type { ClassList } from "@builder.io/qwik";
import { Slot, component$ } from "@builder.io/qwik";
import type * as CSS from "csstype";
import styles from "./group.module.scss";

interface GroupProps {
  classList?: ClassList;
  align?: CSS.Properties["alignItems"];
  justify?: CSS.Properties["justifyContent"];
  gap?: number;
  grow?: boolean;
  noWrap?: boolean;
}

export const Group = component$<GroupProps>(
  ({
    align = "center",
    justify = "flex-start",
    gap = 16,
    grow,
    classList,
    noWrap,
  }) => (
    <div
      style={{
        alignItems: align,
        justifyContent: justify,
        gap: `${gap}px`,
      }}
      class={[
        classList,
        styles.root,
        {
          [styles.grow]: grow,
          [styles.noWrap]: noWrap,
        },
      ]}
    >
      <Slot />
    </div>
  )
);
