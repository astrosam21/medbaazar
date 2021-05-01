import {
    FETCH_TABLE_DATA,
    FETCH_TABLE_DATA_SUCCEED,
    FETCH_TABLE_DATA_REJECTED
} from "../../Action/Contact/actionTypes";

const INITIAL_STATE = {
    tableBodyData: [],
    tableHeadData: [],
    loading: true
};
function leadTableReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_TABLE_DATA: {
            return { ...state, loading: action.payload };
        }
        case FETCH_TABLE_DATA_SUCCEED: {
            return {
                ...state,
                tableBodyData: action.payload,
                loading: action.loading
            };
        }
        case FETCH_TABLE_DATA_REJECTED: {
            return {
                ...state,
                tableBodyData: action.payload,
                loading: action.loading
            };
        }
        default:
            return state;
    }
}

export default leadTableReducer;
