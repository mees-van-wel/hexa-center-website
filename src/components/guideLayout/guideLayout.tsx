"use client";

import { Slot, component$ } from "@builder.io/qwik";
import styles from "./guideLayout.module.scss";
import { Link, useContent, useLocation } from "@builder.io/qwik-city";

export const GuideLayout = component$(() => {
  const content = useContent();
  const pathname = useLocation().url.pathname;

  return (
    <main class={styles.main}>
      {content.menu && (
        <aside class={[styles.aside, styles.asideLeft]}>
          <div>
            <Link href="/guide">
              <h2>{content.menu.text}</h2>
            </Link>
            <ul>
              {content.menu.items?.map((item) => (
                <li key={item.text}>
                  <h3 class={styles.menuItemTitle}>{item.text}</h3>
                  <ul>
                    {item.items?.map((item) => (
                      <li key={item.text} class={styles.menuItemLink}>
                        <Link href={item.href}>
                          <h4
                            class={{ [styles.active]: pathname === item.href }}
                          >
                            {item.text}
                          </h4>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      )}
      <div
        class={[
          styles.container,
          {
            [styles.containerFullWidth]: !content.headings?.length,
          },
        ]}
      >
        <Slot />
      </div>
      {!!content.headings?.length && (
        <aside class={[styles.aside, styles.asideRight]}>
          <div>
            {content.headings?.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                class={[styles.heading, styles[`headingLevel${item.level}`]]}
              >
                {item.text}
              </a>
            ))}
          </div>
        </aside>
      )}
    </main>
  );
});
