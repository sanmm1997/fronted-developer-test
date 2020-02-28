import React from 'react';
import { createPortal } from 'react-dom';
import { Link } from "react-router-dom";

import './../../assets/styles/components/EmployeesCreateRedirect.scss';

const EmployeesCreateRedirect = () => {
    return (
        createPortal(
            <Link to="/employees/create" className="EmployeesCreateRedirect">
                <i className="fas fa-plus"/>
            </Link>,
            document.getElementById('root')
        )
    );
};

export default EmployeesCreateRedirect;
