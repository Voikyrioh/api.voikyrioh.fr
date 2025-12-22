import { Hono } from 'hono';
import { cors } from 'hono/cors'
import websiteRouter from './website'

const app = new Hono().basePath('/api/v1');

app.use(cors({
    origin: '*',
}))
app.route('website', websiteRouter)

export default app;
