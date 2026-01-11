import { app } from '../app.js';
import {

    createPost,
    updatePost,
    deletePost,

    listAllPosts,
    listPostsByTag,
    listPostsByAuthor,
    getPostById,
    
} from '../services/posts.services.js'

export function postRoutes(){
    app.get('/api/v1/posts', async(req, res)=>{
        const {sortBy, sortOrder, author, tag} = req.query;
        const options = {sortBy, sortOrder}; // This line was inside the async function

        if (author && tag){
            return res
                .status(400)
                .json({error: 'query with either author or tag, not Both'})
        } else if(author){
            return res.json(await listPostsByAuthor(author));
        } else if(tag) {
            return res.json(await listPostsByTag(tag));
        } else {
            return res.json(await listAllPosts())
        }
    }); 

    app.get('api/v1/posts/:id', async(req, res)=>{
        const postId = req.params;
        try {
            const post = await getPostById(postId);
            if (post == null){
                return res
                    .status(404)
                    .json({error: `post with ${postId} not found` })
            } 
        } catch (err) {
            return res
                .status(400)
                .json({error: err})
        }
    })
}