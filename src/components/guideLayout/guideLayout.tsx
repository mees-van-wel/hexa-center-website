import { Slot, component$, $, useSignal } from "@builder.io/qwik";
import styles from "./guideLayout.module.scss";
import { Link, useContent, useLocation } from "@builder.io/qwik-city";
import { IconX } from "../icons/x";
import { Group } from "../generic/group/group";
import { IconMenu2 } from "../icons/menu2";

export const GuideLayout = component$(() => {
  const content = useContent();
  const isMenuOpened = useSignal(false);
  const pathname = useLocation().url.pathname;

  const closeHandler = $(() => {
    isMenuOpened.value = false;
  });

  return (
    <main class={styles.main}>
      {content.menu && (
        <aside
          class={[
            styles.aside,
            styles.asideLeft,
            {
              [styles.asideLeftOpened]: isMenuOpened.value,
            },
          ]}
        >
          <div>
            <Group justify="space-between">
              <Link href="/guide">
                <h3 onClick$={closeHandler}>{content.menu.text}</h3>
              </Link>
              <div onClick$={closeHandler} class={styles.closeButton}>
                <IconX />
              </div>
            </Group>
            <ul>
              {content.menu.items?.map((item) => (
                <li key={item.text}>
                  <h4 onClick$={closeHandler} class={styles.menuItemTitle}>
                    {item.text}
                  </h4>
                  <ul>
                    {item.items?.map((item) => (
                      <li key={item.text} class={styles.menuItemLink}>
                        <Link href={item.href}>
                          <p
                            onClick$={closeHandler}
                            class={{ [styles.active]: pathname === item.href }}
                          >
                            {item.text}
                          </p>
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
        <div
          onClick$={() => {
            isMenuOpened.value = true;
          }}
          class={styles.openButton}
        >
          <IconMenu2 />
        </div>
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
