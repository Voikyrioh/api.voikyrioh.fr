import app from './app/controllers';
import { serve } from '@hono/node-server'

const server = serve({
    fetch: app.fetch,
    port: 8080
})

// graceful shutdown
process.on('SIGINT', () => {
    server.close()
    process.exit(0)
})
process.on('SIGTERM', () => {
    server.close((err) => {
        if (err) {
            console.error(err)
            process.exit(1)
        }
        process.exit(0)
    })
})
