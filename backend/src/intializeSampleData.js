import dotenv from 'dotenv'
dotenv.config()
import { initDB } from './db/init.js'
import Post  from './db/models/posts.model.js'

await initDB()

const posts = [
    new Post({
        title: 'Nigga',
        author: 'Daniel',
        contents: 'one nigga pollute whole nigga gang',
        tags: ['niggas', 'black'],
    }),
    new Post({
        title: 'Second Post',
        author: 'Jane Doe',
        contents: 'This is the content of the second post.',
        tags: ['example', 'second'],
    }),
    new Post({
        title: 'Third Post',
        author: 'John Smith',
        contents: 'This is the content of the third post.',
        tags: ['example', 'third'],
    }),
];

for (const post of posts) {
    await post.save();
}

const fetchedPosts = await Post.find()
console.log(fetchedPosts)
