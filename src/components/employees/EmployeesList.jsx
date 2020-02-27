import React from 'react';
import Gravatar from "../Gravatar";

class EmployeesList extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Picture</td>
                        <td>Name</td>
                        <td>Age</td>
                        <td>Salary</td>
                        <td>Options</td>
                    </tr>
                </thead>
                <tbody>
                    {this.props.employees.map((employee) => (
                        <tr key={employee.id}>
                            <td>{ employee.id }</td>
                            <td>
                                <Gravatar name={employee.employee_name} />
                            </td>
                            <td>{ employee.employee_name }</td>
                            <td>{ employee.employee_age }</td>
                            <td>{ employee.employee_salary }</td>
                            <td></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}

export default EmployeesList;
