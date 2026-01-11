import Post from '../db/models/posts.model.js'

async function createPost({ title, author, contents, tags }) {
    const post = new Post({
        title,
        author,
        contents,
        tags,
    })
    return await post.save()
}

async function listPosts({
    query = {},
    sortBy = 'createdAt',
    sortOrder = 'descending'
} = {}) {
    return await Post.find(query).sort({ [sortBy]: sortOrder })
}


async function listAllPosts(){
    return await listPosts({})
}

async function listPostsByAuthor(author, options){
    return await listPosts({ query: { author } }, options);
}

async function listPostsByTag(tags, options) {
return await listPosts({ query: { tags } }, options)
}


export {
    createPost,
    listAllPosts,
    listPostsByTag,
    listPostsByAuthor
}