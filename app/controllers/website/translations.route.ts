import { Hono } from 'hono';
import {
    retrieveAvailableTranslations
} from "../../domain/retrieve-available-translations/retrieve-available-translations.usecase";

const router = new Hono();

router.get('/available', async (c) => {
    return c.json(await retrieveAvailableTranslations());
})

export default router;
