import { useState, useEffect } from 'react';

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

export const useToggleDropdown = (toggleValue) => {
  const [isOpen, setIsOpen] = useState(toggleValue || false);

  const toggleDropdown = (isOpen) => {
    if (isOpen === false) {
      return setIsOpen(true);
    } else if (isOpen === true) {
      return setIsOpen(false);
    } else {
      return isOpen;
    }
  };

  return [isOpen, toggleDropdown];
};

export const useToggleNavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    return setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    if (isOpen === true) {
      return setIsOpen(false);
    }
  };

  return [isOpen, openMenu, closeMenu];
};
