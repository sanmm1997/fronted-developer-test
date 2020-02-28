import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ footerInfo }) => (
  <footer className="text-muted d-none">
    <div className="container text-center">
      <p className="copy">
        { footerInfo.copy }
      </p>
    </div>
  </footer>
);

Footer.propTypes = {
  footerInfo: PropTypes.object
};

export default Footer;
