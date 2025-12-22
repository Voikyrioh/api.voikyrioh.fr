import { fileService } from "../../data/translation-files/translations-files.client";

export async function retrieveTranslationFile(lang: string) {
    return (await fileService.translations).get(lang);
}
