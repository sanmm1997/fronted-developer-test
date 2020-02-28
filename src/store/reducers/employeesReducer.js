import {
    ADD_EMPLOYEES,
    EDIT_EMPLOYEE,
    FILTER_EMPLOYEES,
    GET_EMPLOYEE,
    GET_EMPLOYEES,
    SET_EMPLOYEE
} from "../types/employeesTypes";

const initalState = {
    list: [],
    employee: {}
};

const getEmployees = (state, action) => ({
    ...state,
    list: [...action.payload]
});

const filterEmployees = (state, action) => {
    const newList = [...state.list];
    const regex = new RegExp(action.payload.value, 'gi');
    return {
        ...state,
        list: [...newList.filter((item) =>
            item[action.payload.searchBy] === action.payload.value || item[action.payload.searchBy].match(regex)
        )]
    }
};

const getEmployee = (state, action) => ( {
    ...state,
    employee: action.payload
});

const addEmployees = (state, action) => ({
    ...state,
    list: [...action.payload, ...state.list]
});

const setEmployee = (state, action) => ({
    ...state,
    employee: action.payload
});

const editEmployee = (state, action) => {
    const event = action.payload;
    return {
        ...state,
        employee: {
            ...state.employee,
            [event.target.name]: event.target.value
        }
    }
};


export default (state = initalState, action) => {
    switch (action.type) {
        case GET_EMPLOYEES:
            return getEmployees(state, action);
        case FILTER_EMPLOYEES:
            return filterEmployees(state, action);
        case GET_EMPLOYEE:
            return getEmployee(state, action);
        case ADD_EMPLOYEES:
            return addEmployees(state, action);
        case SET_EMPLOYEE:
            return setEmployee(state, action);
        case EDIT_EMPLOYEE:
            return editEmployee(state, action);
        default:
            return state;
    }
}
