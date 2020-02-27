import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getEmployees } from "../../store/actions/employeesActions";
import EmployeesList from "../employees/EmployeesList";

const Employees = (props) => {
    useEffect(() => {
        props.getEmployees();
    }, []);

    return (
        <div className="row">
            <div className="col-12 text-center">
                <EmployeesList employees={props.employees.list}/>
            </div>
        </div>
    )
};

const mapStateToProps = ({ employeesReducer }) => ({
    employees: employeesReducer
});

const mapDispatchToAction = {
    getEmployees
};

export default connect(mapStateToProps, mapDispatchToAction)(Employees);
