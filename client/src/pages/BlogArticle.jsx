import React from 'react';
import { useSelector } from 'react-redux';
import BlogContent from '../components/Blog/BlogContent';
import '../styles/pages/blogArticlePage.css';

const BlogArticle = () => {
  const post = useSelector((state) => state.posts.selectedPost);
  return (
    <div className="blog-article-page container-fluid">
      <div className="blog-article-page-content container">
        {post && <BlogContent post={post} />}
      </div>
    </div>
  );
};

export default BlogArticle;
