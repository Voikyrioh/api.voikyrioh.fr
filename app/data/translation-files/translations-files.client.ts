import path from 'node:path';
import fs from 'node:fs/promises';
import { accessSync } from 'node:fs';
import assert from 'node:assert';
import { z } from 'zod/v4';
import { Observable } from "../../../libraries/my-custom-observables/Observable";

type TranslationFiles = Map<string, Record<string, string>>;

const fileNameValidator = z.string()
    .regex(/^[a-z]{2}-[A-Z]{2}\.json$/)
    .transform(name => name.split('.')[0]);

class FileService {
    #translations: TranslationFiles = new Map();
    #ready = new Observable<boolean>();

    constructor(dirPath: string) {
        accessSync(dirPath);
        this.#getTranslationFiles(dirPath).then(() => this.#ready.emit(true)).catch(console.error);
    }

    async #getTranslationFiles(dirPath: string): Promise<void> {
        const translationsDirectory = await fs.opendir(dirPath);

        for await (const dirent of translationsDirectory) {
            assert(dirent, new Error('no files found'));
            if ( dirent.isFile() && dirent.name.endsWith('.json') ) {
                const lang = fileNameValidator.parse(dirent.name);
                const fileData = await fs.readFile(path.join(dirPath, dirent.name), 'utf-8');
                const translations = JSON.parse(fileData);

                if ( translations && typeof translations === 'object') {
                    this.#translations.set(lang, translations)
                }
            }
        }
    }

    get translations() {
        return new Promise<TranslationFiles>(
            (res) => this.#ready.subscribe(() => res(this.#translations))
        );
    }
}

export const fileService = new FileService(path.join(__dirname, '../../../', '/public/', 'translations'));
