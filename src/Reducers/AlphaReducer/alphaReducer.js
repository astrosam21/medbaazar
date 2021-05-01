import {SHOW_ALERT,CLOSE_ALERT} from "../../Action/AlphaAction/actionTypes"
const initialState = {
  open: false,
  errorMessage: ""
};

export const alphaReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLOSE_ALERT:
      return { ...state, open: false };

    case SHOW_ALERT:
      return { ...state, open:true,errorMessage:action.text  };

    default:
      return state;
  }
};

