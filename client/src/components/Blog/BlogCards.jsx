import React, { useRef } from 'react';
import { formatDate } from '../../utils/formatText';
import '../../styles/components/blogCards.css';

const BlogCards = (props) => {
  const {
    id,
    blogName,
    postDate,
    featureImage,
    summary,
    clickToPost,
    visitPost,
  } = props;

  const cardRef = useRef();
  const titleLinkRef = useRef();

  const handleClick = (e) => {
    e.preventDefault();
    if (
      e.target.value === cardRef.current.value ||
      e.target.value === titleLinkRef.current.value
    ) {
      clickToPost(e.target.value);
      visitPost(e.target.value);
    }
  };

  return (
    <div
      ref={cardRef}
      id={`blog-card-${id}`}
      className="blog-card card"
      value={id}
      onClick={handleClick}
    >
      {featureImage && (
        <img
          src={featureImage.srcUrl}
          alt={`${featureImage.altText} Blog`}
          className="blog-card-img card-img-top"
        />
      )}
      <div className="blog-card-body card-body">
        <h5
          ref={titleLinkRef}
          className="blog-card-title card-title"
          value={id}
          onClick={handleClick}
        >
          {blogName}
        </h5>
        <p className="blog-card-excerpt card-text">{summary}</p>
        <p className="blog-card-postDate card-text">{`${formatDate(
          postDate,
        )}`}</p>
      </div>
    </div>
  );
};

export default BlogCards;
