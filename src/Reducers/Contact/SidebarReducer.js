import {
    GET_FILTERS,
    GET_FILTERS_FULFILLED,
    GET_FILTERS_REJECTED
} from "../../Action/Contact/actionTypes";

const initialState = {
    filterList: {
        list: []
    },
    loading: true,
    errorMessage: ""
};

const ContactSidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FILTERS:
            return { ...state, loading: action.payload };
        case GET_FILTERS_FULFILLED:
            return { ...state, filterList: action.payload, loading: action.loading };
        case GET_FILTERS_REJECTED:
            return { ...state, errorMessage: action.payload, loading: action.loading };
        default:
            return state;
    }
};

export default ContactSidebarReducer;
