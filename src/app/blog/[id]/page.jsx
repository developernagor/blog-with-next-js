import React from 'react'

const SinglePost = async({params}) => {
    const {id} = await params;
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post = await result.json();
  return (
    <div>
      <h2>Post id: {post.id}</h2>
      <h2>Post title: {post.title}</h2>
      <h2>Post description: {post.description}</h2>
    </div>
  )
}

export default SinglePost;
