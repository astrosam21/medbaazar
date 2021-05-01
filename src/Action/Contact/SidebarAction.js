import { GET_FILTERS, GET_FILTERS_FULFILLED, GET_FILTERS_REJECTED } from "./actionTypes";
import axios from "axios";

export const fetchData = bool => {
    return {
        type: GET_FILTERS,
        payload: bool
    };
};

export const fetchDataFulfilled = data => {
    return {
        type: GET_FILTERS_FULFILLED,
        payload: data,
        loading: false
    };
};

export const fetchDataRejected = error => {
    return {
        type: GET_FILTERS_REJECTED,
        payload: error,
        loading: false
    };
};

export const getFilters = () => {
    return dispatch => {
        dispatch(fetchData(true));
        axios
            .get("https://api.myjson.com/bins/o6ysb")
            .then(res => {
                dispatch(fetchDataFulfilled(res.data));
            })
            .catch(err => dispatch(fetchDataRejected(err)));
    };
};
