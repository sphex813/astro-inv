export const formKitTranslations = {
  en: {
    ui: {
      submit: "Odoslať",
      incomplete: "Polia nie su vyplnené správne.",
    },
    validation: {
      required({ name }: { name: string }) {
        return `Pole ${name} je povinné!`;
      },
      between({ name, args }: { name: string; args: number[] }) {
        return `${name} musí byť medzi ${args[0]} and ${args[1]}.`;
      },
    },
  },
};
