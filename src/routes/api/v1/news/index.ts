import type { RequestHandler } from "@builder.io/qwik-city";
import fs from "fs";
import matter from "gray-matter";
import { marked } from "marked";

const NEWS_DIR = "./src/assets/news";

export interface NewsItem {
  slug: string;
  html: string;
  data: {
    title: string;
    date: string;
    image?: string;
  };
}

export const onGet: RequestHandler = async (requestEvent) => {
  const names = fs.readdirSync(NEWS_DIR);

  requestEvent.json(
    200,
    names
      .map((name) => {
        const raw = fs.readFileSync(`${NEWS_DIR}/${name}`, "utf8");
        const { content, data } = matter(raw);
        const html = marked(content, { mangle: false, headerIds: false });
        const newsItem: NewsItem = {
          slug: name.split(".")[0],
          html,
          // @ts-ignore
          data,
        };

        return newsItem;
      })
      .sort(
        (a, b) =>
          new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
      )
  );
};
