import {
    GET_CONTACT,
    GET_CONTACT_FULFILLED,
    GET_CONTACT_REJECTED,
    GET_CONTACTSVIEW_FULFILLED
} from "./actionTypes";
import axios from "axios";
export const fetchData = bool => {
    return {
        type: GET_CONTACT,
        payload: bool
    };
};

export const fetchDataFulfilled = data => {
    return {
        type: GET_CONTACT_FULFILLED,
        payload: data,
        loading: false
    };
};

export const fetchDataRejected = error => {
    return {
        type: GET_CONTACT_REJECTED,
        payload: error,
        loading: false
    };
};

export const getContactInfo = () => {
    return dispatch => {
        dispatch(fetchData(true));
        axios
            .get("https://api.myjson.com/bins/1487t9")
            .then(res => {
                dispatch(fetchDataFulfilled(res.data));
            })
            .catch(err => dispatch(fetchDataRejected(err)));
    };
};
export const getContactView = () => {
    return dispatch => {
        dispatch(fetchData(true));
        axios
            .get("https://api.myjson.com/bins/bvhwh")
            .then(res => {
                dispatch({
                    type: GET_CONTACTSVIEW_FULFILLED,
                    payload: res.data,
                    loading: false
                });
            })
            .catch(err => dispatch(fetchDataRejected(err)));
    };
};
