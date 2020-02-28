import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {getEmployee, getEmployees, editEmployee, updateEmployee} from "../../store/actions/employeesActions";
import Container from "../layout/Container";
import EmployeesForm from "../employees/EmployeesForm";
import Gravatar from "../Gravatar";
import {Link} from "react-router-dom";
import notFound from './../../assets/images/404.png';


const EmployeesEdit = (props) => {

    const employee = props.employee;
    const hasEmployee = (employee.hasOwnProperty('employee')) ? Object.keys(props.employee.employee).length : false;

    useEffect(() => {
        console.log(props)
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        props.updateEmployee(employee);
    };

    const handleChange = (e) => {
        e.persist();
        props.editEmployee(e);
    };

    return (
        <Container title={`Empleado`}>
            {hasEmployee ?
                <>
                    <div className="row pt-3">
                        <div className="col-12 text-center">
                            <Gravatar name={employee.employee.employee_name}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center">
                            <EmployeesForm
                                employee={employee.employee}
                                handleSubmit={handleSubmit}
                                handleChange={handleChange}
                            >
                                <div className="form-row pt-2 text-center">
                                    <div className="col">
                                        <button className="btn btn-success mr-3">Actualizar</button>
                                        <Link to="/employees" className="btn btn-primary">Volver al listado</Link>
                                    </div>
                                </div>
                            </EmployeesForm>
                        </div>
                    </div>
                </>
            :
                <div className="row">
                    <div className="col-12 text-center">
                        <img src={notFound} alt="Employee not found" width="35%"/>
                        <p>No se encontró el empleado ...</p>
                        <Link to="/employees" className="btn btn-primary">Volver al listado</Link>
                    </div>
                </div>
            }
        </Container>
    )
};

const mapStateToProps = ({employeesReducer}) => ({
    employee: employeesReducer
});

const mapDispatchToAction = {
    getEmployee,
    getEmployees,
    editEmployee,
    updateEmployee
};

export default connect(mapStateToProps, mapDispatchToAction)(EmployeesEdit);
