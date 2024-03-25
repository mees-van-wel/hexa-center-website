import { component$ } from "@builder.io/qwik";
import { routeLoader$, useNavigate } from "@builder.io/qwik-city";
import { Group } from "~/components/generic/group/group";
import { Stack } from "~/components/generic/stack/stack";
import styles from "./index.module.scss";
import type { NewsItem } from "../api/v1/news";
import { Section } from "~/components/section/section";
import truncate from "truncate-html";

// export const useNewsItems = routeLoader$(async ({ url }) => {
//   const res = await fetch(`${url.origin}/api/v1/news`);
//   const newsItems = await res.json();
//   return newsItems as NewsItem[];
// });

export default component$(() => {
  // const newsItems = useNewsItems();
  const navigate = useNavigate();

  return (
    <Section pt={116} pb={66}>
      <Stack gap={32}>
        <h1>News</h1>
        {/* <Group align="center" gap={32}>
          {newsItems.value.map(({ slug, data, html }) => (
            <Stack
              key={slug}
              classList={styles.newsItem}
              onClick$={() => {
                navigate(`/news/${slug}`);
              }}
            >
              <h2 class={styles.title}>{data.title}</h2>
              <div
                dangerouslySetInnerHTML={truncate(html, 6, {
                  byWords: true,
                })}
              />
              <p class={styles.date}>
                {new Intl.DateTimeFormat().format(new Date(data.date))}
              </p>
            </Stack>
          ))}
        </Group> */}
      </Stack>
    </Section>
  );
});
