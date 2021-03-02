import React from 'react';
import Interweave from 'interweave';

const BlogText = (props) => {
  const { blogText } = props;

  return (
    <div className="blog-content blog-text container-fluid">
      {blogText.length > 0 ? <Interweave content={blogText} /> : ''}
    </div>
  );
};

export default BlogText;
