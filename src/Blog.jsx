import { PostList } from './components/PostList.jsx'
import { CreatePost } from './components/CreatePost.jsx'
import { PostFilter } from './components/PostFilter.jsx'
import { PostSorting } from './components/PostSorting.jsx'
import { useQuery } from '@tanstack/react-query'
import { getPosts } from './api/posts.js'
import { useState } from 'react'
export function Blog() {
    const [author, setAuthor] = useState('')
    const [sortBy, setSortBy] = useState('createdAt')
    const [sortOrder, setSortOrder] = useState('descending')

    const postsQuery = useQuery({
        queryKey: ['posts', { author, sortBy, sortOrder }],
        queryFn: () => getPosts({ author, sortBy, sortOrder }),
    })
    const posts = postsQuery.data ?? []

    return (
        <div style={{ padding: 8 }}>
            <CreatePost />
            <br />
            <hr />
            Filter by:
            <PostFilter
                field='author'
                value={author}
                onAuthorChange={(author) => setAuthor(author)}
            />
            <br />
            <PostSorting
                fields={['createdAt', 'updatedAt']}
                field={sortBy}
                onFieldChange={(field) => setSortBy(field)}
                order={sortOrder}
                onOrderChange={(order) => setSortOrder(order)}
            />
            <hr />
            <PostList posts={posts} />
        </div>
    )
}
