import { initDB } from './db/init.js'
import { Post } from './db/models/posts.model.js'

await initDB()

const post = new Post({
    title: 'Nigga',
    author: 'Daniel',
    contents: 'one nigga pollute whole nigga gang',
    tags: ['niggas', 'black'],
})

await post.save()

const posts = await Post.find()
console.log(posts)
