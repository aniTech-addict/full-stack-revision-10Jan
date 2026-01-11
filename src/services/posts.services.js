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

async function getPostById(postId){
    return await Post.findById(postId)
}

async function updatePost(postId, { title, author, contents, tags }){
    return await Post.findOneAndUpdate(
{ _id: postId },
{ $set: { title, author, contents, tags } },
{ new: true },
    )
}

async function deletePost(postId) {
    return await Post.deleteOne({ _id: postId })
}


export {
    
    createPost,
    updatePost,
    deletePost,
    
    listAllPosts,
    listPostsByTag,
    listPostsByAuthor,
    getPostById,
    
}