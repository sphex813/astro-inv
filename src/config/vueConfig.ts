import { check, circle } from "@formkit/icons";
import { generateClasses } from "@formkit/themes";
import { defaultConfig, plugin } from "@formkit/vue";
import type { App } from "vue";
import { formKitTheme } from "./formKitTheme";
import { formKitTranslations } from "./formKitTranslations";

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
