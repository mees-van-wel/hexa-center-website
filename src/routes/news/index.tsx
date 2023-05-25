import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { Group } from "~/components/generic/group/group";
import { Stack } from "~/components/generic/stack/stack";
import styles from "./index.module.scss";
import type { NewsItem } from "../api/v1/news";
import { Button } from "~/components/generic/button/button";
import { Section } from "~/components/section/section";

export const useNewsItems = routeLoader$(async ({ url }) => {
  const res = await fetch(`${url.origin}/api/v1/news`);
  const newsItems = await res.json();
  return newsItems as NewsItem[];
});

export default component$(() => {
  const newsItems = useNewsItems();

  return (
    <Section pt={116} pb={66}>
      <Stack align="center" gap={32}>
        <h1>News</h1>
        <Group justify="center" gap={32}>
          {newsItems.value.map(({ slug, data, html }) => (
            <div key={slug} class={styles.newsItem}>
              <p class={styles.date}>
                {new Intl.DateTimeFormat().format(new Date(data.date))}
              </p>
              <div class={styles.content}>
                <h3 class={styles.title}>{data.title}</h3>
                <div dangerouslySetInnerHTML={html} />
              </div>
              <Button href={`/news/${slug}`} classList={styles.button}>
                Read the full article
              </Button>
            </div>
          ))}
        </Group>
      </Stack>
    </Section>
  );
});
