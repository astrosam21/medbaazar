import { SHOW_ALERT, CLOSE_ALERT } from "./actionTypes";

export function handleHTTPError(dispatch, error) {
  if (error && error.message === "Network Error") {
    return dispatch(ShowAlert(true, "Check Your Internet Connection"));
  } else if (error && error.response.status === 404) {
    return dispatch(ShowAlert(true, error.message));
  } else if (error && error.response.status === 500) {
    return dispatch(ShowAlert(true, error.message));
  } else {
    return dispatch(ShowAlert(true, "Something Went Wrong"));
  }
}

// export function handleHTTPSuccess(dispatch, Message) {
//   if (Message !== "" || undefined) {
//     return dispatch(ShowSuccessAlert(true, Message));
//   }
// }
// export function ShowSuccessAlert(bool, text) {
//   return {
//     type: SHOW_SUCCESS_ALERT,
//     open: bool,
//     text: text
//   };
// }.

export function ShowAlert(bool, text) {
  return {
    type: SHOW_ALERT,
    open: true,
    text: text
  };
}

export function CloseAlert() {
  return {
    type: CLOSE_ALERT
  };
}
