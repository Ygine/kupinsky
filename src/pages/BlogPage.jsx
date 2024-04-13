import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const location = useLocation();

  console.log(location);

  useEffect(() => {
    const api = () => {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setBlogs(data))
    }
    api();
  }, [])

  return (
    <div>
        <Link className={''} to="/posts/create"> Create new post</Link>

      {blogs.map( post => (
        <Link key={post.id} className='' to={`/posts/${post.id}`}>
          { post.body }
        </Link>
      ))
      }
    </div>
  )
}
