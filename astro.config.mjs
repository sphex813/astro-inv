// https://astro.build/config
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import vue from "@astrojs/vue";

export default defineConfig({
  integrations: [tailwind(), vue({ appEntrypoint: "/src/_app.ts" }), image()],
});
