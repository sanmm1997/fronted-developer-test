import { combineReducers } from "redux";
import projectReducer from './projectReducer';
import employeesReducer from "./employeesReducer";

export default combineReducers({
  projectReducer,
  employeesReducer
});
