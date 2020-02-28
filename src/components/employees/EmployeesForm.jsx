import React from 'react';
import {Link} from "react-router-dom";

const EmployeesForm = (props) => {
    return (
        <form>
            <div className="form-row mb-3">
                <input
                    type="hidden"
                    name="id"
                    value={props.id}
                    className="form-control"
                />
                <div className="col">
                    <label htmlFor="employee_name">Nombre</label>
                    <input
                        type="text"
                        name="employee_name"
                        value={props.employee_name}
                        className="form-control"
                    />
                </div>
                <div className="col">
                    <label htmlFor="employee_salary">Salario</label>
                    <input
                        type="text"
                        name="employee_salary"
                        value={props.employee_salary}
                        className="form-control"
                    />
                </div>
                <div className="col">
                    <label htmlFor="employee_age">Edad</label>
                    <input
                        type="text"
                        name="employee_age"
                        value={props.employee_age}
                        className="form-control"
                    />
                </div>
            </div>
            <div className="form-row pt-2 text-center">
                <div className="col">
                    <button className="btn btn-success mr-3">Actualizar</button>
                    <Link to="/employees" className="btn btn-primary">Volver al listado</Link>

                </div>
            </div>
        </form>
    )
};

export default EmployeesForm;