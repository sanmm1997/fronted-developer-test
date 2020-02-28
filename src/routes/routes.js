import Home from "../components/containers/Home";
import Employees from "../components/containers/Employees";
import EmployeesEdit from "../components/containers/EmployeesEdit";

export default [{
    id: '1',
    path: '/',
    component: Home
}, {
    id: '2',
    path: '/employees',
    component: Employees
}, {
    id: '3',
    path: '/employees/:id/edit',
    component: EmployeesEdit
}];
