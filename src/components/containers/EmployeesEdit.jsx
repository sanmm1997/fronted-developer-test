import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getEmployee, getEmployees} from "../../store/actions/employeesActions";
import Container from "../layout/Container";
import EmployeesForm from "../employees/EmployeesForm";
import Gravatar from "../Gravatar";
import {Link} from "react-router-dom";
import notFound from './../../assets/images/404.png';

const EmployeesEdit = (props) => {

    useEffect(() => {
        const {id} = props.match.params;
        props.getEmployee(id);
    }, [props.employee.list]);

    const employee = props.employee.employee;
    const hasEmployee = Object.keys(employee).length > 0;

    return (
        <Container title={`Empleado`}>
            {hasEmployee ?
                <>
                    <div className="row pt-3">
                        <div className="col-12 text-center">
                            <Gravatar name={employee.employee_name}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center">
                            <EmployeesForm {...props.employee.employee}/>
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
    getEmployees
};

export default connect(mapStateToProps, mapDispatchToAction)(EmployeesEdit);
