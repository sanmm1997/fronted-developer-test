import {GET_EMPLOYEES} from "../types/employeesTypes";

const initalState = {
  list: []
};

export default (state = initalState, action) => {
  switch (action.type) {
    case GET_EMPLOYEES:
      return { ...state, list: [...action.payload] };
    default:
      return state;
  }
}
