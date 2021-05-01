import {
    GET_CONTACT,
    GET_CONTACT_FULFILLED,
    GET_CONTACT_REJECTED,
    GET_CONTACTSVIEW_FULFILLED
} from "../../Action/Contact/actionTypes";

const initialState = {
    contactInfo: {},
    loading: true,
    errorMessage: "",
    contactview: {
        email: "",
        firstname: "",
        lastname: "",
        jobtitle: "",
        owner: "",
        phone: ""
    }
};

const leftContactBarReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CONTACT:
            return { ...state, loading: action.payload };
        case GET_CONTACT_FULFILLED:
            return { ...state, contactInfo: action.payload, loading: action.loading };
        case GET_CONTACT_REJECTED:
            return { ...state, errorMessage: action.payload, loading: action.loading };
        case GET_CONTACTSVIEW_FULFILLED:
            return { ...state, contactview: action.payload, loading: action.loading };

        default:
            return state;
    }
};

export default leftContactBarReducer;
