import { fileService } from "../../data/translation-files/translations-files.client";

export async function retrieveAvailableTranslations() {
    const translations = await fileService.translations;

    return [...translations.keys()];
}
