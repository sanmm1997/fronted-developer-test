export const saveEmployeeLocalStorage = (newEmployee) => {
    try {
        let oldEmployees = JSON.parse(localStorage.getItem('employees'));
        oldEmployees = (oldEmployees) ? oldEmployees : [];
        localStorage.setItem('employees', JSON.stringify([newEmployee, ...oldEmployees]));
    }catch (e) {
        console.error(e)
    }
};

export const getEmployeesLocalStorage = () => {
    let oldEmployees = JSON.parse(localStorage.getItem('employees'));
    oldEmployees = (oldEmployees) ? oldEmployees : [];
    return oldEmployees;
};
