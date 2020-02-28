import {fetchEmployee, fetchEmployees, removeEmployee, storeEmployee} from "../../utils/api";
import {ADD_EMPLOYEES, FILTER_EMPLOYEES, GET_EMPLOYEE, GET_EMPLOYEES} from "../types/employeesTypes";
import {toggleLoader} from "./loaderActions";
import {showResult} from "../../utils/alerts";
import {saveEmployeeLocalStorage} from "../../utils/localStorage";

export const getEmployees = () => async (dispatch) => {
    try {
        dispatch(toggleLoader(true));
        const data = await fetchEmployees();
        dispatch({type: GET_EMPLOYEES, payload: data.data});
    } catch (e) {

    } finally {
        dispatch(toggleLoader(false));
    }
};

export const getEmployee = (id) => async (dispatch, getState) => {
    let employee = {};
    try {
        dispatch(toggleLoader(true));
        const data = await fetchEmployee(id);
        employee = data.data;
    } catch (e) {
        const state = getState().employeesReducer;
        employee = state.list.length ? state.list.find(employee => employee.id === id) : {};
    } finally {
        dispatch({type: GET_EMPLOYEE, payload: employee});
        dispatch(toggleLoader(false));
    }
};

export const filterEmployees = (filterParams) => async (dispatch) => {
    dispatch({type: FILTER_EMPLOYEES, payload: filterParams})
};

export const deleteEmployee = (id) => async (dispatch) => {
    try {
        dispatch(toggleLoader(true));
        const data = await removeEmployee(id);
        showResult(data);
    } catch (e) {
        console.error('deleteEmployee()', e)
    } finally {
        dispatch(toggleLoader(false));
    }
};

export const createEmployee = (employee) => async (dispatch) => {
    try {
        dispatch(toggleLoader(true));
        const data = await storeEmployee(employee);
        showResult(data);
        saveEmployeeLocalStorage({...employee, id: data.data.id});
    } catch (e) {
        console.error('createEmployee()', e)
    } finally {
        dispatch(toggleLoader(false));
    }
};

export const addEmployees = (employees) => {
    return ({
        type: ADD_EMPLOYEES,
        payload: employees
    })
};

export const editEmployee = (e) => async (dispatch) => {
    try {
        dispatch(toggleLoader(true));
        const data = await storeEmployee(employee);
        showResult(data);
        saveEmployeeLocalStorage({...employee, id: data.data.id});
    } catch (e) {
        console.error('createEmployee()', e)
    } finally {
        dispatch(toggleLoader(false));
    }
};
