import React from 'react';
import { Link } from 'react-router-dom';

export const NavHeaderLinks = (props) => {
  const { navLinks, closeMenu, width } = props;

  const handleClick = () => {
    if (width < 1078) {
      return closeMenu();
    }
  };

  return (
    <>
      {navLinks.length > 0 &&
        navLinks.map((link, index) => {
          return (
            <Link
              key={index}
              to={link === 'homes' ? `/${link}` : `/${link}`}
              className="nav-header-navLinks-item"
              onClick={handleClick}
            >
              <div className="nav-header-navLinks-link">
                {link === 'products' ? 'homes' : link}
              </div>
            </Link>
          );
        })}
    </>
  );
};

export const NavFooterLinks = (props) => {
  const { navLinks } = props;

  return (
    <>
      {navLinks.length > 0 &&
        navLinks.map((link, index) => {
          return (
            <Link key={index} to={`/${link}`} className="footer-sitelink-item">
              <div className="footer-sitelink-text">{link}</div>
            </Link>
          );
        })}
    </>
  );
};
