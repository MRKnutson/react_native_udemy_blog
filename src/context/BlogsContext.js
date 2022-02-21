import React, { useState } from "react";

const BlogsContext = React.createContext();

export const BlogsProvider = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState([]);

  const addBlogPost = (post) => {
    setBlogPosts([
      ...blogPosts,
      { title: `Blog Post #${blogPosts.length + 1}` },
    ]);
  };

  return (
    <BlogsContext.Provider value={{ data: blogPosts, addBlogPost }}>
      {children}
    </BlogsContext.Provider>
  );
};

export default BlogsContext;
