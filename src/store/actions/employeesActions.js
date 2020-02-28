import {fetchEmployee, fetchEmployees, removeEmployee} from "../../utils/api";
import {FILTER_EMPLOYEES, GET_EMPLOYEE, GET_EMPLOYEES} from "../types/employeesTypes";
import {toggleLoader} from "./loaderActions";

export const getEmployees = () => async(dispatch) => {
  dispatch(toggleLoader(true));
  try {
    const data = await fetchEmployees();
    dispatch({ type: GET_EMPLOYEES, payload: data.data });
  } catch (e) {

  } finally {
    dispatch(toggleLoader(false));
  }
};

export const getEmployee = (id) => async(dispatch, getState) => {
  dispatch(toggleLoader(true));
  let employee = {};
  try {
    const data = await fetchEmployee(id);
    employee = data.data;
  } catch (e) {
    const state = getState().employeesReducer;
    employee = state.list.length ? state.list.find(employee => employee.id === id) : {};
  } finally {
    dispatch(toggleLoader(false));
  }
  dispatch({ type: GET_EMPLOYEE, payload: employee });
};

export const filterEmployees = (filterParams) => async(dispatch) => {
  dispatch({ type: FILTER_EMPLOYEES, payload: filterParams})
};

export const deleteEmployee = (id) => async (dispatch) => {
  try {
      const data = await removeEmployee(id);

  } catch (e) {

  } finally {
      setTimeout(() => dispatch(toggleLoader(false)), 1000);
  }
};