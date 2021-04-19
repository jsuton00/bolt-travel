import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../../../styles/components/buttons/socialLinks.css';

const SocialLinkButton = (props) => {
  const { linkUrl, linkName, linkIcon } = props;
  return (
    <a
      href={linkUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit Bolt Travel on ${linkName}`}
      className="social-media-button"
    >
      <div className="social-media-button-icon">
        <span>
          <FontAwesomeIcon icon={linkIcon} size="2x" />
        </span>
      </div>
    </a>
  );
};

export default SocialLinkButton;
