import { useMutation } from "@tanstack/react-query"
import { useState } from 'react'
import { createPost } from '../api/posts.js'

export function CreatePost(){

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [contents, setContents] = useState('')

    const createPostMutation = useMutation({
        mutationFn: () => createPost({ title, author, contents })
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        createPostMutation.mutate()
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="create-title">Title: </label>
                <input type='text' name="create-title" id="create-title" />
            
            </div>
            <br />
            <div>
                <label htmlFor="create-author">Author: </label>
                <input type='text' name="create-author" id="create-author" />
            
            </div>
            <br />
            <textarea />
            <br />
            <br />
            <input type="submit" value='Create' />

        </form>
    )
}