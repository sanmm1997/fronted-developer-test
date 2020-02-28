import React, {useState} from 'react';
import {connect} from 'react-redux';

import Container from "../layout/Container";
import {getEmployees, createEmployee} from "../../store/actions/employeesActions";
import EmployeesForm from "../employees/EmployeesForm";
import Gravatar from "../Gravatar";
import {Link} from "react-router-dom";
import {invalidCreate} from "../../utils/alerts";

const initialEmployee = {
    employee_age: '',
    employee_name: '',
    employee_salary: '',
};

const EmployeesCreate = (props) => {
    const [employee, setEmployee] = useState(initialEmployee);

    const handleChange = (e) => {
        setEmployee({...employee, [e.target.name]: e.target.value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(isValidCreate()) {
            props.createEmployee(employee);
            setEmployee(initialEmployee);
        } else {
            invalidCreate();
        }
    };

    const isValidCreate = () => {
        return !(
            employee.employee_age.trim() === "" ||
            employee.employee_name.trim() === "" ||
            employee.employee_salary.trim() === ""
        )
    };

    return (
        <Container title={`Crear Empleado`}>
            <div className="row pt-3">
                <div className="col-12 text-center">
                    <Gravatar name={employee.employee_name}/>
                </div>
            </div>
            <div className="row">
                <div className="col-12 text-center">
                    <EmployeesForm employee={employee} handleSubmit={handleSubmit} handleChange={handleChange}>
                        <div className="form-row pt-2 text-center">
                            <div className="col">
                                <button className="btn btn-success mr-3">Crear</button>
                                <Link to="/employees" className="btn btn-primary">Volver al listado</Link>
                            </div>
                        </div>
                    </EmployeesForm>
                </div>
            </div>
        </Container>
    )
};

const mapStateToProps = ({employeesReducer}) => ({
    employee: employeesReducer
});

const mapDispatchToAction = {
    getEmployees,
    createEmployee
};

export default connect(mapStateToProps, mapDispatchToAction)(EmployeesCreate);
