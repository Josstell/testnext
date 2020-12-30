import React, { useEffect, useState } from "react";

import Layout from "../../components/layout";
import Title from '../../components/title'
import Link from 'next/link'



export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const newpost = await res.json();
      setPosts(newpost);
    };
    fetchPosts();
  }, []);

  return (
    <Layout>
      <Title>Posts Page</Title>
      <div>
        {
          posts.map(post => {
            return (
              <Link href={`/posts/${post.id}`} key={post.id}>
                <a>
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
                </a>
              </Link>
            )
          })
        }
      </div>
    </Layout>
  );
}
