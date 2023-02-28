import { formKitTheme } from "./formKitTheme";
import { generateClasses } from "@formkit/themes";
import type { App } from "vue";
import { plugin, defaultConfig } from "@formkit/vue";
import { formKitTranslations } from "./formKitTranslations";
import { check, circle } from "@formkit/icons";

export default (app: App) => {
  app.use(
    plugin,
    defaultConfig({
      config: {
        classes: generateClasses(formKitTheme),
      },
      messages: formKitTranslations,
      icons: { checkboxDecorator: check, radioDecorator: circle },
    })
  );
};
