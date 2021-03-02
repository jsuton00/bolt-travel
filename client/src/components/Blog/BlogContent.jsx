import React from 'react';
import { BlogImages } from './BlogImages';
import { Button } from '@material-ui/core';
import BlogText from './BlogText';

const BlogContent = (props) => {
  const { post } = props;
  console.log(post);
  return (
    <>
      <div className="blog-section feature-image row">
        {post.featureImage ? (
          <BlogImages featureImage={post.featureImage} />
        ) : (
          ''
        )}
      </div>
      <div className="blog-section blog-title row">
        <h2 className="blog-headings row">{post.title}</h2>
      </div>
      {post.content && (
        <div className="blog-section blog-content row">
          {post.content.text && <BlogText blogText={post.content.text} />}
        </div>
      )}
      <div className="blog-section blog-tags row">
        <p className="blog-tags-title">Tags:</p>
        {post.postTags.length > 0 &&
          post.postTags.map((tag, i) => {
            return (
              <Button key={i} variant="text" className="blog-tag">
                {tag}
              </Button>
            );
          })}
      </div>
    </>
  );
};

export default BlogContent;
