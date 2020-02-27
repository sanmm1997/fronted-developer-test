import { combineReducers } from "redux";
import projectReducer from './projectReducer';
import employeesReducer from "./employeesReducer";
import loaderReducer from "./loaderReducer";

export default combineReducers({
  projectReducer,
  employeesReducer,
  loaderReducer,
});
