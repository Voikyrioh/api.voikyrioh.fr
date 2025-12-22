import { Hono } from 'hono';

const app = new Hono();
app.get('hello', (c, next) => {
    return c.text('Hello World!');
})

export default app;
