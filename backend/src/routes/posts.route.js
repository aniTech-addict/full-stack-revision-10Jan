import { app } from '../app.js'
import {
    createPost,
    updatePost,
    deletePost,
    listAllPosts,
    listPostsByTag,
    listPostsByAuthor,
    getPostById,
} from '../services/posts.services.js'

export function postRoutes() {
    app.get('/api/v1/posts', async (req, res) => {
        const { sortBy, sortOrder, author, tag } = req.query
        const options = { sortBy, sortOrder } // This line was inside the async function

        if (author && tag) {
            return res
                .status(400)
                .json({ error: 'query with either author or tag, not Both' })
        } else if (author) {
            return res.json(await listPostsByAuthor(author))
        } else if (tag) {
            return res.json(await listPostsByTag(tag))
        } else {
            return res.json(await listAllPosts())
        }
    })

    app.get('/api/v1/posts/:id', async (req, res) => {
        const postId = req.params.id
        try {
            const post = await getPostById(postId)
            if (post == null) {
                return res
                    .status(404)
                    .json({ error: `post with ${postId} not found` })
            }
            return res.json(post)
        } catch (err) {
            return res.status(400).json({ error: err })
        }
    })

    app.post('/api/v1/posts', async (req, res) => {
        try {
            const post = await createPost(req.body)
            return res.json(post)
        } catch (err) {
            return res.status(500).json({ error: `error creating post` }).end()
        }
    })

    app.patch('/api/v1/posts/:id', async (req, res) => {
        try {
            const post = await updatePost(req.params.id, req.body)
            return res.json(post)
        } catch (err) {
            return res.status(500).json({ error: 'Error updating post' }).end()
        }
    })

    app.delete('/api/v1/posts/:id', async (req, res) => {
        try {
            const { deletedCount } = await deletePost(req.params.id)
            if (deletedCount === 0) {
                return res.status(204).json({ error: 'Post not found' })
            }
        } catch (err) {
            return res
                .status(500)
                .json({
                    error: `error Error : ${err} occurred during post delete`,
                })
        }
    })
}
