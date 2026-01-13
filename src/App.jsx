import CreatePost from './components/CreatePost.jsx'
import PostList  from './components/PostList.jsx'

export function App() {
  const posts = [
    {                                                                                                 
      title: 'Full-Stack React Projects',
      contents: "Let's become full-stack developers!",
      author: 'Daniel Bugl',
    },
    { title: 'Hello React!' }
  ]
return (
  <div style={{ padding: 8 }}>
    <CreatePost />
    <br />
    <hr />
    <PostList posts= { posts } />
  </div>
  )
}