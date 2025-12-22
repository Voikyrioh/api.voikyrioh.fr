import { Hono } from 'hono';

const router = new Hono();

router.get('/available', (c) => {
    return c.text('fr');
})

export default router;
