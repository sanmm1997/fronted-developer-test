import {ADD_EMPLOYEES, FILTER_EMPLOYEES, GET_EMPLOYEE, GET_EMPLOYEES} from "../types/employeesTypes";

const initalState = {
    list: [],
    employee: {}
};

const getEmployees = (state, action) => ({
    ...state,
    list: [...state.list, ...action.payload]
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

const getEmplyee = (state, action) => ( {
    ...state,
    employee: action.payload
});

const addEmployees = (state, action) => ({
    ...state,
    list: [...action.payload, ...state.list]
});

export default (state = initalState, action) => {
    switch (action.type) {
        case GET_EMPLOYEES:
            return getEmployees(state, action);
        case FILTER_EMPLOYEES:
            return filterEmployees(state, action);
        case GET_EMPLOYEE:
            return getEmplyee(state, action);
        case ADD_EMPLOYEES:
            return addEmployees(state, action);
        default:
            return state;
    }
}
