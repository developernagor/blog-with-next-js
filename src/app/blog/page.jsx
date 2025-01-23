import Link from 'next/link';
import React from 'react'

const Blog = async() => {
    const result = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await result.json();

  return (
    <div>
      <h2>Blog Posts: {posts.length}</h2>

      {
        posts.map((post)=> 
        <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </li>
        )
      }
    </div>
  )
}

export default Blog
