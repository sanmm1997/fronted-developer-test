import {FILTER_EMPLOYEES, GET_EMPLOYEES} from "../types/employeesTypes";

const initalState = {
  list: []
};

export default (state = initalState, action) => {
  switch (action.type) {
    case GET_EMPLOYEES:
      return { ...state, list: [...action.payload] };
    case FILTER_EMPLOYEES: {
      const newList = [...state.list];
      return { ...state, list: [ ...newList.filter((item) => item[action.payload.searchBy] === action.payload.value) ] };
    }
    default:
      return state;
  }
}
