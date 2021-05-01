import {
    GET_TIMELINE,
    GET_TIMELINE_FULFILLED,
    GET_TIMELINE_REJECTED
} from "../../Action/Contact/actionTypes";

const initialState = {
    timelineData: [],
    loading: true,
    errorMessage: ""
};

const timelineReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TIMELINE:
            return { ...state, loading: action.payload };
        case GET_TIMELINE_FULFILLED:
            return {
                ...state,
                timelineData: action.payload,
                loading: action.loading
            };
        case GET_TIMELINE_REJECTED:
            return { ...state, errorMessage: action.payload, loading: action.loading };
        default:
            return state;
    }
};

export default timelineReducer;
