import { GET_TIMELINE, GET_TIMELINE_FULFILLED, GET_TIMELINE_REJECTED } from "./actionTypes"
import axios from "axios"
export const fetchData = (bool) => {
    return {
        type: GET_TIMELINE,
        payload: bool,
    };
}

export const fetchDataFulfilled = data => {
    return {
        type: GET_TIMELINE_FULFILLED,
        payload: data,
        loading: false
    };
};

export const fetchDataRejected = error => {
    return {
        type: GET_TIMELINE_REJECTED,
        payload: error,
        loading: false
    };
};

export const getTimelineData = () => {
    return dispatch => {

        dispatch(fetchData(true));
        axios
          .get("https://api.myjson.com/bins/16ddl9")
          .then(res => {
            dispatch(fetchDataFulfilled(res.data));
          })
          .catch(err => dispatch(fetchDataRejected(err)));
    };
};