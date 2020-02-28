import React, {useState} from "react";
import './../../assets/styles/components/EmployeesSearchBar.scss';

const EmployeesSearchBar = ({ handleSubmit, handleChange, handleClick }) => {
    return (
        <form className="Employee-search-bar mb-3" onSubmit={handleSubmit}>
            <div className="form-row">
                <div className="col-sm-12 col-md-4">
                    <select
                        id="searchBy"
                        name="searchBy"
                        className="form-control"
                        onChange={handleChange}
                    >
                        <option value="" defaultValue>Criterio</option>
                        <option value="id">Id</option>
                        <option value="employee_name">Nombre</option>
                        <option value="employee_age">Edad</option>
                        <option value="employee_salary">Salario</option>
                    </select>
                </div>
                <div className="col-sm-12 col-md-6">
                    <input
                        id="value"
                        name="value"
                        type="text"
                        className="form-control"
                        onChange={handleChange}
                        placeholder="Ingrese el valor a buscar"
                    />
                </div>
                <div className="col-sm-12 col-md-1">
                    <button className="btn btn-secondary w-100">Buscar</button>
                </div>
                <div className="col-sm-12 col-md-1">
                    <button
                        type="buttton"
                        onClick={handleClick}
                        className="btn btn-secondary w-100"
                    >Limpiar</button>
                </div>
            </div>
        </form>
    )
};

export default EmployeesSearchBar;
