import Axios from "axios";
import { LOG_OUT } from "./UserActionTypes";
export const logOut = (dispatch) => {
  // var headers = {
  //   Authorization: `${localStorage.getItem("token")}`,
  // };
  // Axios.defaults.headers = headers;
  //   Axios.get(`${endPoint}/searchProducts`).then((res) =>
  dispatch({
    type: LOG_OUT,
    payload: false,
  });
  //   );
};
