import React from 'react'

const SinglePost = async({params}) => {
    const {id} = await params;
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post = await result.json();
  return (
    <div>
      <h2 className='text-3xl font-bold my-6 text-center border-b-2'>Post Details</h2>
      <div className='max-w-3xl mx-auto border rounded-2xl p-4'>
      <p className='text-2xl mb-2'><strong>Post id:</strong> {post.id}</p>
      <p className='text-2xl mb-2'><strong>Post title:</strong> {post.title}</p>
      <p className='text-2xl mb-2'><strong>Post description:</strong> {post.body}</p>
      </div>
    </div>
  )
}

export default SinglePost;
