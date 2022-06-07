import { useRouter } from "next/router";
import React from "react";

const BlogPostPage = () => {
  const router = useRouter();
  console.log(router.query);
  return <h2>The Blog Posts {JSON.stringify(router.query)}</h2>;
};

export default BlogPostPage;
