import {FILTER_EMPLOYEES, GET_EMPLOYEE, GET_EMPLOYEES} from "../types/employeesTypes";

const initalState = {
  list: [],
  employee: {}
};

export default (state = initalState, action) => {
  switch (action.type) {
    case GET_EMPLOYEES:
      return {
        ...state,
        list: [...action.payload]
      };
    case FILTER_EMPLOYEES:
      const newList = [...state.list];
      let regex = new RegExp(action.payload.value, 'gi');
      return {
        ...state,
        list: [...newList.filter((item) => item[action.payload.searchBy] === action.payload.value || item[action.payload.searchBy].match(regex))]
      };
    case GET_EMPLOYEE:
      return {
        ...state,
        employee: action.payload
      };
    default:
      return state;
  }
}
