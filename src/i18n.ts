import { i18n } from "@lingui/core";

export const locales = {
    en: "English",
    pl: "polski",
};
export const defaultLocale = "pl";

/**
 * We do a dynamic import of just the catalog that we need
 * @param locale any locale string
 */
export async function dynamicActivate(locale: string) {
    const { messages } = await import(`./locales/${locale}/messages.ts`);
    i18n.load(locale, messages);
    i18n.activate(locale);
}
