import { useEffect, useState } from 'react';

export const useNavLinks = (navItems) => {
  const [navLinks, setNavLinks] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      if (navItems) {
        setNavLinks(navItems);
      }
    });
    return () => {
      clearTimeout(timer);
    };
  }, [navItems]);

  return [navLinks];
};
