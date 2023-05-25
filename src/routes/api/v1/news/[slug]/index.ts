import type { RequestHandler } from "@builder.io/qwik-city";
import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const NEWS_DIR = path.join(process.cwd(), "src", "assets", "news");

export const onGet: RequestHandler = async (requestEvent) => {
  const slug = requestEvent.params.slug;

  const raw = await fs.readFile(path.join(NEWS_DIR, slug + ".md"), "utf8");
  const { content, data } = matter(raw);
  const html = marked(content, { mangle: false, headerIds: false });

  requestEvent.json(200, {
    slug,
    html,
    data,
  });
};
