import mongoose from 'mongoose'
import { describe, test, expect } from '@jest/globals'
import { createPost } from '../services/postMessage.service.js'
import { Post } from '../db/models/posts.model.js'

describe('creating posts', () => {
    test('with all parameters should succeed', async () => {
        const post = {
            title: 'Hello Mongoose!',
            author: 'Daniel Bugl',
            contents: 'This post is stored in a MongoDB database using Mongoose.',
            tags: ['mongoose', 'mongodb'],
        }
        const createdPost = await createPost(post)
        expect(createdPost._id).toBeInstanceOf(mongoose.Types.ObjectId)
        const foundPost = await Post.findById(createdPost._id)
        expect(foundPost).toEqual(expect.objectContaining(post))
        expect(foundPost.createdAt).toBeInstanceOf(Date)
        expect(foundPost.updatedAt).toBeInstanceOf(Date)
    
    })

    test('creating posts without title should fail',()=>{
        
    })
})
