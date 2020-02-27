import {fetchEmployees} from "../../utils/api";
import {GET_EMPLOYEES} from "../types/employeesTypes";

export const getEmployees = () => async(dispatch) => {
  try {
    const data = await fetchEmployees();
    dispatch({ type: GET_EMPLOYEES, payload: data.data });
  } catch (e) {

  } finally {

  }
};


