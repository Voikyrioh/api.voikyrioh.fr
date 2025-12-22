import { Hono } from 'hono';
import websiteRouter from './website'

const app = new Hono().basePath('/api/v1');

app.route('website', websiteRouter)

export default app;
