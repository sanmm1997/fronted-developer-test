import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {NavLink} from "react-router-dom";
import './../../assets/styles/components/Navigation.scss';

const Navigation = ({ links }) => {
    return (
        <div className="collapse navbar-collapse" id="nav-project">
            <ul className="navbar-nav mr-auto">
                { links.map((link) => {
                    return (
                        <li className="nav-item" key={link.text}>
                            <NavLink
                                exact
                                to={link.route}
                                activeClassName="active"
                                className="nav-link"
                            >
                                { link.text }
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

Navigation.propTypes = {
    links: PropTypes.array
};

export default Navigation;
