import {fetchEmployees, removeEmployee} from "../../utils/api";
import {FILTER_EMPLOYEES, GET_EMPLOYEES} from "../types/employeesTypes";
import {toggleLoader} from "./loaderActions";

export const getEmployees = () => async(dispatch) => {
  // dispatch(toggleLoader(true));
  try {
    const data = await fetchEmployees();
    dispatch({ type: GET_EMPLOYEES, payload: data.data });
  } catch (e) {

  } finally {
    setTimeout(() => dispatch(toggleLoader(false)), 1000);
  }
};

export const filterEmployees = (filterParams) => async(dispatch) => {
  dispatch({ type: FILTER_EMPLOYEES, payload: filterParams})
};

export const deleteEmployee = (id) => async (dispatch) => {
  try {
      const data = await removeEmployee(id);
      console.log(data)
      // dispatch({ type: GET_EMPLOYEES, payload: data.data });
  } catch (e) {

  } finally {
      setTimeout(() => dispatch(toggleLoader(false)), 1000);
  }
};