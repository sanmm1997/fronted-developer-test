import React from 'react';
import {Link} from "react-router-dom";

const EmployeesForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="form-row mb-3">
                <input
                    type="hidden"
                    name="id"
                    value={props.employee.id || ''}
                    className="form-control"
                />
                <div className="col">
                    <label htmlFor="employee_name">Nombre</label>
                    <input
                        type="text"
                        name="employee_name"
                        onChange={props.handleChange}
                        value={props.employee.employee_name}
                        className="form-control"
                    />
                </div>
                <div className="col">
                    <label htmlFor="employee_salary">Salario</label>
                    <input
                        type="text"
                        name="employee_salary"
                        onChange={props.handleChange}
                        value={props.employee.employee_salary}
                        className="form-control"
                    />
                </div>
                <div className="col">
                    <label htmlFor="employee_age">Edad</label>
                    <input
                        type="text"
                        name="employee_age"
                        onChange={props.handleChange}
                        value={props.employee.employee_age}
                        className="form-control"
                    />
                </div>
            </div>
            {props.children}
        </form>
    )
};

export default EmployeesForm;
