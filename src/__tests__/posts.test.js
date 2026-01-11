import Post from '../db/models/posts.model';
import mongoose from 'mongoose';
import { describe, expect, test, beforeEach} from '@jest/globals';
import {
    createPost,
    listAllPosts,
    listPostsByTag,
    listPostsByAuthor
} from '../services/posts.services'

describe('creating Posts',()=>{
    test('with all parameters should pass', async()=>{
        const post = {
            title: "Gigas",
            author: "Chad",
            contents: "Gigas first winter bath",
            tags: ["Gigas","bath"]
        }
        const createdPost = await createPost(post);
        expect(createdPost._id).toBeInstanceOf(mongoose.Types.ObjectId);
        const foundPost = await Post.findById(createdPost._id);

        expect(foundPost).toEqual(expect.objectContaining(post))
        expect(foundPost.createdAt).toBeInstanceOf(Date);
        expect(foundPost.updatedAt).toBeInstanceOf(Date)        
    }),
    test('with title missing is to be failed', async()=>{
        const post = {
            author:"yakamoto",
            contents:"Here is a cup of china soup",
            tags: ["Hero","Villain"]
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


const samplePosts = [
    { title: 'Learning Redux', author: 'Daniel Bull', tags:['redux'] },
    { title: 'Learn React Hooks', author: 'Daniel Bull', tags:['react'] },
    {
        title: 'Full-Stack React Projects',
        author: 'Valenti',
        tags: ['react', 'nodejs'],
    },
    { title: 'Guide to TypeScript' , author:'John Dole'},
]

// To ensure that our unit tests are modular and independent from each other, we insert posts into
// the database directly by using Mongoose functions (instead of the createPost function).
let createdSamplePosts = []
    beforeEach(async()=>{
    await Post.deleteMany({})
    createdSamplePosts = []
    for (const samplePost of samplePosts){
        const createdPost = new Post(samplePost);
        createdSamplePosts.push(await createdPost.save());
    }
})

describe('list Posts',()=>{

    test('should return all posts',async()=>{
        const posts = await listAllPosts();
        expect(posts.length).toEqual(createdSamplePosts.length);
    }),

    test('should return posts sorted by createdAt',async()=>{
        const posts = await listAllPosts();
        const sortedSamplePosts = createdSamplePosts.sort(
            (a,b) => b.createdAt - a.createdAt
        )
        expect(posts.map((post)=> post.createdAt)).toEqual(
            sortedSamplePosts.map((samplePost)=> samplePost.createdAt)
        )
    }),

    test('should return posts filtered by author',async()=>{
        const posts = await listPostsByAuthor('Daniel Bull')
        for (const post of posts){
            expect(post.author).toBe('Daniel Bull');
        }
        expect (posts.length).toBe(2)
    }),
    
    test('should return posts by tags', async()=>{
        const posts = await listPostsByTag('react')
        expect (posts.length).toBe(2)
    })

})