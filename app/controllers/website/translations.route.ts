import { Hono } from 'hono';
import {
    retrieveAvailableTranslations
} from "../../domain/retrieve-available-translations/retrieve-available-translations.usecase";
import { retrieveTranslationFile } from "../../domain/retrieve-translation-file/retrieve-transalation-file.usecase";

const router = new Hono();

router.get('/available', async (c) => {
    return c.json(await retrieveAvailableTranslations());
})

router.get('/lang/:lang', async (c) => {
    return c.json(await retrieveTranslationFile(c.req.param('lang')));
})

export default router;
