import React from 'react';
import PropTypes from 'prop-types';

import Navigation from './Navigation';
import {Link } from "react-router-dom";

const Header = ({ headerInfo }) => {

    const { links } = headerInfo.menu;
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/">
                    {(headerInfo.brand.logo) && <img src={headerInfo.brand.logo} alt="Js Love" width="50px"/>}
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#nav-project"
                    aria-controls="nav-project"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"/>
                </button>
                <Navigation links={links}/>
            </nav>
        </header>
    )
};

Header.propTypes = {
    headerInfo: PropTypes.object
};

export default Header;
