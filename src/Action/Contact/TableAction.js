import {
    FETCH_TABLE_DATA,
    FETCH_TABLE_DATA_REJECTED,
    FETCH_TABLE_DATA_SUCCEED
} from "./actionTypes";

import axios from "axios";
export const getTableData = bool => {
    return {
        type: FETCH_TABLE_DATA,
        payload: bool
    };
};

export const getTableDataFulfilled = data => {
    return {
        type: FETCH_TABLE_DATA_SUCCEED,
        payload: data,
        loading: false
    };
};

export const getTableDataRejected = error => {
    return {
        type: FETCH_TABLE_DATA_REJECTED,
        payload: error,
        loading: false
    };
};

export const getTableDataArray = pathname => {
    return dispatch => {
        dispatch(getTableData(true));
        switch (pathname) {
            case "/all":
                axios
                    .get("https://api.myjson.com/bins/1giae9")
                    .then(res => {
                        dispatch(getTableDataFulfilled(res.data));
                    })
                    .catch(err => dispatch(getTableDataRejected(err)));
                break;
            case "/important":
                axios
                    .get("https://api.myjson.com/bins/1giae9")
                    .then(res => {
                        dispatch(getTableDataFulfilled(res.data));
                    })
                    .catch(err => dispatch(getTableDataRejected(err)));
                break;
            default:
                break;
        }
    };
};
