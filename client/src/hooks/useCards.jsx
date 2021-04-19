import { useEffect, useState } from 'react';

export const useCardContent = (content) => {
  const [cardContent, setCardContent] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      if (content) {
        return content.length > 0 && setCardContent(content);
      }
    });

    return () => {
      clearTimeout(timer);
    };
  }, [content]);

  return cardContent;
};
