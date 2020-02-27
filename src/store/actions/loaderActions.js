import {SET_IS_VISIBLE} from "../types/loaderTypes";

export const toggleLoader = (isVisible) => (dispatch) => (dispatch({
    type: SET_IS_VISIBLE,
    payload: isVisible
}));