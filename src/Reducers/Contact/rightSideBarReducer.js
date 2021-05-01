import {
    GET_CONTACTS,
    GET_CONTACTS_FULFILLED,
    GET_CONTACTS_REJECTED,
    GET_COMPANIES,
    GET_COMPANIES_FULFILLED,
    GET_COMPANIES_REJECTED,
    GET_LEADS,
    GET_LEADS_FULFILLED,
    GET_LEADS_REJECTED,
    GET_FILES,
    GET_FILES_FULFILLED,
    GET_FILES_REJECTED
} from "../../Action/Contact/actionTypes";

const initialState = {
    contactData: [],
    contactLoading: true,
    companyData: [],
    companyLoading: true,
    leadData: [],
    leadLoading: true,
    errorMessage: "",
    fileData: [],
    fileLoading: true
};

export const rightSideBarLeadReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LEADS:
            return { ...state, leadLoading: action.payload };
        case GET_LEADS_FULFILLED:
            return { ...state, leadData: action.payload, leadLoading: action.loading };
        case GET_LEADS_REJECTED:
            return { ...state, errorMessage: action.payload, leadLoading: action.loading };
        default:
            return state;
    }
};

export const rightSideBarContactReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CONTACTS:
            return { ...state, contactLoading: action.payload };
        case GET_CONTACTS_FULFILLED:
            return { ...state, contactData: action.payload, contactLoading: action.loading };
        case GET_CONTACTS_REJECTED:
            return { ...state, errorMessage: action.payload, contactLoading: action.loading };
        default:
            return state;
    }
};

export const rightSideBarCompanyReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COMPANIES:
            return { ...state, companyLoading: action.payload };
        case GET_COMPANIES_FULFILLED:
            return { ...state, companyData: action.payload, companyLoading: action.loading };
        case GET_COMPANIES_REJECTED:
            return { ...state, errorMessage: action.payload, companyLoading: action.loading };
        default:
            return state;
    }
};

export const rightSideBarAttachmentReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FILES:
            return { ...state, fileLoading: action.payload };
        case GET_FILES_FULFILLED:
            return { ...state, fileData: action.payload, fileLoading: action.loading };
        case GET_FILES_REJECTED:
            return { ...state, errorMessage: action.payload, fileLoading: action.loading };
        default:
            return state;
    }
};
