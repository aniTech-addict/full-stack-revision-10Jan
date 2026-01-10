import mongoose from 'mongoose'

const postsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: String,
    contents: String,
    tags: [String],
},{timestamps:true})

export const Post = mongoose.model('post', postsSchema)