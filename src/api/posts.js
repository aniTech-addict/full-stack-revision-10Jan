export const getPosts = async (queryParams) => {
    console.log('Query parameters being sent:', queryParams);
    try {
        const url = `${import.meta.env.VITE_BACKEND_URL}/posts?` + new URLSearchParams(queryParams);
        console.log('Fetching from URL:', url);
        const res = await fetch(url);
        console.log('Response status:', res.status);
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`)
        }
        const data = await res.json();
        console.log('Fetched posts:', data);
        return data;
    } catch (error) {
        console.error('Error fetching posts:', error)
        throw error
    }
}

export const createPost = async (post) => {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/posts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post),
    })
    return await res.json()
}
