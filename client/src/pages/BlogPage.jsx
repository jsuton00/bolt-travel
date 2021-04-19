import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as actions from '../store/storeConfig/actions';
import BlogCards from '../components/Blog/BlogCards';
import { useBlogs } from '../components/Blog/Blog';
import '../styles/pages/blogPage.css';

const BlogPage = () => {
  const [blogPosts] = useBlogs();
  const dispatch = useDispatch();
  let history = useHistory();

  const visitPost = (postId) => {
    if (postId) {
      return history.push({
        pathname: `/blog/:${postId}`,
        postId: postId,
      });
    }
  };

  return (
    <>
      <div id="blog-section" className="blog-section container-fluid">
        <div className="blog-display container">
          <h3 className="blog-title row">Blog</h3>
        </div>
        <div className="blog-posts container">
          {blogPosts.length > 0 &&
            blogPosts
              .sort((a, b) => {
                return (
                  new Date(a.postDate).getTime() -
                  new Date(b.postDate).getTime()
                );
              })
              .map((post, index) => {
                return (
                  <BlogCards
                    key={index}
                    id={post.id}
                    blogName={post.name}
                    postDate={post.postDate}
                    featureImage={post.featureImage}
                    summary={post.excerpt}
                    clickToPost={() => dispatch(actions.selectPost(post.id))}
                    visitPost={() => visitPost(post.id)}
                  />
                );
              })
              .reverse()}
        </div>
      </div>
    </>
  );
};

export default BlogPage;
