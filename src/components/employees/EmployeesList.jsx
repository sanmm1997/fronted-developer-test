import React from 'react';
import './../../assets/styles/components/EmployeesList.scss';

const EmployeesList = (props) => {
    return (
        <table className="table table-striped Employee-list">
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
                {props.children}
            </tbody>
        </table>
    )
};

export default EmployeesList;
