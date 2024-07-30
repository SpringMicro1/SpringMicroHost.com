import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  site: "https://www.springmicrohost.com/",
  integrations: [tailwind(), mdx(), sitemap(), react()],
  vite: {
    ssr: {
      noExternal: ["react-icons"],
    },
  },
  adapter: import.meta.env.DEV
    ? node({
        mode: "standalone",
      })
    : vercel(),
});
