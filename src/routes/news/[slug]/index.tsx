import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { Button } from "~/components/generic/button/button";
import { Group } from "~/components/generic/group/group";
import { Stack } from "~/components/generic/stack/stack";
import { Section } from "~/components/section/section";
import type { NewsItem } from "~/routes/api/v1/news";
import styles from "./index.module.scss";

export const useNewsItem = routeLoader$(async ({ url, params }) => {
  const res = await fetch(`${url.origin}/api/v1/news/${params.slug}`);
  const newsItem = await res.json();
  return newsItem as NewsItem;
});

export default component$(() => {
  const newsItem = useNewsItem();

  return (
    <Section pt={116} pb={66}>
      <Stack>
        <h1>{newsItem.value.data.title}</h1>
        <h3>
          {new Intl.DateTimeFormat().format(new Date(newsItem.value.data.date))}
        </h3>
        <Group align="flex-start">
          {newsItem.value.data.image && (
            <img
              class={styles.image}
              width="100%"
              height={400}
              src={newsItem.value.data.image}
            />
          )}
          <Stack classList={styles.content}>
            <div dangerouslySetInnerHTML={newsItem.value.html} />
            <Button href="/news/">Back</Button>
          </Stack>
        </Group>
      </Stack>
    </Section>
  );
});
