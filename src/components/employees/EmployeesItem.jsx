import React from 'react';
import {Link} from "react-router-dom";
import { connect } from 'react-redux';
import { deleteEmployee } from "../../store/actions/employeesActions";
import {deleteConfirmation, showResult} from "../../utils/alerts";

import Gravatar from "../Gravatar";
import './../../assets/styles/components/EmployeesItem.scss';

const EmployeesItem = (props) => {
    const handleClick = () => {
        deleteConfirmation(props.employee_name)
            .then(response => (response.value) && props.deleteEmployee(props.id))
    };

    return (
        <tr className="Employee-item">
            <td>{ props.id }</td>
            <td>
                <Gravatar name={props.employee_name} />
            </td>
            <td>{ props.employee_name }</td>
            <td>{ props.employee_age }</td>
            <td>{ props.employee_salary }</td>
            <td>
                <a onClick={() => props.handleEdit(props.id)} className="btn btn-sm btn-outline-primary" >Editar</a>
                <a onClick={handleClick} className="btn btn-sm btn-outline-danger" >Borrar</a>
            </td>
        </tr>
    );
};

const mapStateToProps = ({ loaderReducer }) => ({
   loader: loaderReducer
});

const mapDispatchToProps = {
    deleteEmployee
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesItem);