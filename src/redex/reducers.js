// counterReducer.js

import { DECREMENT, INCREMENT, SET_TOKEN } from "./actions";


const initialState = {
  data:'',
  token: localStorage.getItem('token')
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      console.log('action?.payload: ', action);
      return { ...state, count: state.count + 1 , data : action.data };
      case SET_TOKEN:
      console.log('action?.payload: ', action);
      return { ...state, data : action.token };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export default counterReducer;
