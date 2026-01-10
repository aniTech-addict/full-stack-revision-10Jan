import Post from '../db/models/posts.model';
import mongoose from 'mongoose';
import { describe, expect, test } from '@jest/globals';
import {createPost} from '../services/posts.services'

describe('creating Posts',()=>{
    test('with all parameters should pass', async()=>{
        const post = {
            title: "Niigas",
            author: "nigeshwar",
            contents: "niggas first winter bath",
            tags: ["Niggas","bath"]
        }
        const createdPost = await createPost(post);
        expect(createdPost._id).toBeInstanceOf(mongoose.Types.ObjectId);
        const foundPost = await Post.findById(createdPost._id);

        expect(foundPost).toEqual(expect.objectContaining(post))
        expect(foundPost.createdAt).toBeInstanceOf(Date);
        expect(foundPost.updatedAt).toBeInstanceOf(Date)        
    }),
    test('with title missing is to be falied', async()=>{
        const post = {
            author:"Niggeshwar",
            contents:"Here is a cup of niggas shoup",
            tags: ["Hero","Swar"]
        }
        try {
            await createPost(post)
            } catch (err) {
            expect(err).toBeInstanceOf(mongoose.Error.ValidationError)
            expect(err.message).toContain('`title` is required')
        }

    }),
    test('with minimal parameters should succeed', async () => {
        const post = {
            title: 'Only a title',
        }
        const createdPost = await createPost(post)
        expect(createdPost._id).toBeInstanceOf(mongoose.Types.ObjectId)
    })
})
