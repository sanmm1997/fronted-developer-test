import {SET_IS_VISIBLE} from "../types/loaderTypes";

const initialState = {
    isVisible: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_VISIBLE:
            return { ...state, isVisible: action.payload };
        default:
            return state;
    }
}