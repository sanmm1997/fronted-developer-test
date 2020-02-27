import { GET_PROJECT_INFO } from "./../types/projectTypes";

const initalState = {
  headerInfo: {
    brand: {

    },
    menu: {
      links: []
    }
  },
  footerInfo: {
    copy: ''
  }
};

export default (state = initalState, action) => {
  switch (action.type) {
    case GET_PROJECT_INFO:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
