import { GET_PROJECT_INFO  } from "./../types/projectTypes";
import {fetchProjectInfo, fetchStaff} from "../../utils/api";

export const getProjectInfo = () => async(dispatch) => {
  try {
    const data = await fetchProjectInfo();
    dispatch({ type: GET_PROJECT_INFO, payload: data });
  } catch (e) {

  } finally {

  }
};

export const getStaffInfo = () => async (dispatch) => {
  try {
    const data = await fetchStaff();
    console.log(data);
  } catch (e) {

  } finally {

  }
};
