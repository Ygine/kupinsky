import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function SinglePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState('');

  const goBack = () => navigate('/posts', {state: 213});
  const goHome = () => navigate('/', { replace: true });

  useEffect(() => {
    const api = () => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => setBlog(data))
    }

    if(id){
      api();
    }
  }, [id])

  return (
    <div>
      { blog && (
        <>
          <button onClick={goBack}> Go back</button>
          {/* Bad approach */}
          <button onClick={goHome}> Go Home</button>

          <h1 className='font-bold mb-4'>{blog.title}</h1>
          <div>{blog.body}</div>
        </>
      )}
    </div>
  )
}
