import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'mock-api',
      configureServer(server) {
        server.middlewares.use('/api/pizzas', (req, res, next) => {
          const id = (req.url || '').split('?')[0].replace(/^\//, '')
          if (!id) return next()
          try {
            const jsonPath = path.join(process.cwd(), 'public', 'pizzas.json')
            const raw = fs.readFileSync(jsonPath, 'utf-8')
            const list = JSON.parse(raw)
            const pizza = list.find(p => p.id === id)
            res.setHeader('content-type', 'application/json')
            if (!pizza) {
              res.statusCode = 404
              res.end(JSON.stringify({ error: `Pizza ${id} not found` }))
              return
            }
            res.end(JSON.stringify(pizza))
          } catch (e) {
            res.statusCode = 500
            res.setHeader('content-type', 'application/json')
            res.end(JSON.stringify({ error: 'mock api failed', details: String(e) }))
          }
        })
      }
    }
  ],
})
