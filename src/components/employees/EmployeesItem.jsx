import React from 'react';
import { connect } from 'react-redux';
import { deleteEmployee } from "../../store/actions/employeesActions";
import Gravatar from "../Gravatar";
import {Link} from "react-router-dom";
import './../../assets/styles/components/EmployeesItem.scss';
import {deleteConfirmation} from "../../utils/alerts";

const EmployeesItem = (props) => {

    const handleClick = () => {
        deleteConfirmation(props.employee_name)
            .then(res => {
                if (res.value)
                    return props.deleteEmployee(props.id);
            });
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
                <Link to={`/employees/${props.id}`} className="btn btn-sm btn-outline-primary" >Editar</Link>
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