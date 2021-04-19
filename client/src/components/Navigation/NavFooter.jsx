import React from 'react';
import { Link } from 'react-router-dom';
import { useNavLinks } from '../../hooks/useNavigations';
import { navFooterLinks } from '../../constants/navLinks';
import { fetchCopyrighhtDate } from '../../utils/formatText';
import '../../styles/components/navigation/navFooter.css';

const NavFooter = () => {
  const [navLinks] = useNavLinks(navFooterLinks);

  return (
    <nav id="nav-footer" className="nav nav-footer row">
      <div className="nav-footer-item footer-copyright">
        <p className="copyright-text row">{`© ${fetchCopyrighhtDate} | Bolt Travel | All Rights Reserved`}</p>
      </div>
      <div className="nav-footer-item footer-sitelinks row">
        {navLinks.length > 0 &&
          navLinks.map((link, index) => {
            return (
              <Link
                key={index}
                to={`/${link}`}
                className="footer-sitelink-item"
              >
                <div className="footer-sitelink-text">{link}</div>
              </Link>
            );
          })}
      </div>
    </nav>
  );
};

export default NavFooter;
