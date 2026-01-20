export const getPosts = async (queryParams) => {
    // console.log('Query parameters being sent:', queryParams);
    try {
        const res = await fetch(
            `${import.meta.env.VITE_BACKEND_URL}/posts?` +
                new URLSearchParams(queryParams),
        )
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`)
        }
        return await res.json()
    } catch (error) {
        console.error('Error fetching posts:', error)
        throw error
    }
}

export const createPost = async (post) => {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/posts`, {
        method: 'POST',
        header: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post),
    })
    return await res.json()
}
