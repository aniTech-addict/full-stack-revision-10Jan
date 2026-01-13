import {app} from './app.js';
import dotenv from 'dotenv'
dotenv.config()
import {initDB} from './db/init.js'
import { postRoutes } from './routes/posts.route.js';

try {
    await initDB()
    const PORT = process.env.PORT
    app.listen(PORT)
    postRoutes(app)

    console.info(`express server running on http://localhost:${PORT}`)
    } catch (err) {
    console.error('error connecting to database:', err)
}