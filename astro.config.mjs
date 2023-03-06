// https://astro.build/config
import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    vue({
      appEntrypoint: "/src/config/vueConfig.ts",
    }),
    image(),
  ],
});
