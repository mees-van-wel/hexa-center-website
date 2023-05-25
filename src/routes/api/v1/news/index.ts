import type { RequestHandler } from "@builder.io/qwik-city";
import { promises as fs } from "fs";
import matter from "gray-matter";
import { marked } from "marked";
import path from "path";

const NEWS_DIR = path.join(process.cwd(), "src", "assets", "news");

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
  const names = await fs.readdir(NEWS_DIR);
  const newsItems = await Promise.all(
    names.map(async (name) => {
      const raw = await fs.readFile(path.join(NEWS_DIR, name), "utf8");
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
  );

  requestEvent.json(
    200,
    newsItems.sort(
      (a, b) =>
        new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
    )
  );
};
