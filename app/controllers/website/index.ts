import { Hono } from "hono";
import translations from "./translations.route"

const router = new Hono();

router.route('/translations', translations);

export default router;
