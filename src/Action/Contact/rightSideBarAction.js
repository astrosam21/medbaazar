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
} from "./actionTypes";
import axios from "axios";

export const fetchContactData = (bool) => {
	return {
		type: GET_CONTACTS,
		payload: bool
	};
};

export const fetchContactDataFulfilled = (data) => {
	return {
		type: GET_CONTACTS_FULFILLED,
		payload: data,
		loading: false
	};
};

export const fetchContactDataRejected = (error) => {
	return {
		type: GET_CONTACTS_REJECTED,
		payload: error,
		loading: false
	};
};

export const fetchLeadData = (bool) => {
	return {
		type: GET_LEADS,
		payload: bool
	};
};

export const fetchLeadDataFulfilled = (data) => {
	return {
		type: GET_LEADS_FULFILLED,
		payload: data,
		loading: false
	};
};

export const fetchLeadDataRejected = (error) => {
	return {
		type: GET_LEADS_REJECTED,
		payload: error,
		loading: false
	};
};
export const fetchCompanyData = (bool) => {
	return {
		type: GET_COMPANIES,
		payload: bool
	};
};

export const fetchCompanyDataFulfilled = (data) => {
	return {
		type: GET_COMPANIES_FULFILLED,
		payload: data,
		loading: false
	};
};

export const fetchCompanyDataRejected = (error) => {
	return {
		type: GET_COMPANIES_REJECTED,
		payload: error,
		loading: false
	};
};

export const fetchFileData = (bool) => {
	return {
		type: GET_FILES,
		payload: bool
	};
};

export const fetchFileDataFulfilled = (data) => {
	return {
		type: GET_FILES_FULFILLED,
		payload: data,
		loading: false
	};
};

export const fetchFileDataRejected = (error) => {
	return {
		type: GET_FILES_REJECTED,
		payload: error,
		loading: false
	};
};
export const getContactCardData = () => {
	return (dispatch) => {
		dispatch(fetchContactData(true));
		axios
			.get("https://api.myjson.com/bins/bqy39")
			.then((res) => {
				dispatch(fetchContactDataFulfilled(res.data));
			})
			.catch((err) => dispatch(fetchContactDataRejected(err)));
	};
};

export const getCompanyCardData = () => {
	return (dispatch) => {
		dispatch(fetchCompanyData(true));
		axios
			.get("https://api.myjson.com/bins/iwks5")
			.then((res) => {
				dispatch(fetchCompanyDataFulfilled(res.data));
			})
			.catch((err) => dispatch(fetchCompanyDataRejected(err)));
	};
};

export const getLeadCardData = () => {
	return (dispatch) => {
		dispatch(fetchLeadData(true));
		axios
			.get("https://api.myjson.com/bins/1218g5")
			.then((res) => {
				dispatch(fetchLeadDataFulfilled(res.data));
			})
			.catch((err) => dispatch(fetchLeadDataRejected(err)));
	};
};

export const getAttachCardData = () => {
	return (dispatch) => {
		dispatch(fetchFileData(true));
		axios
			.get("https://api.myjson.com/bins/1edqzt")
			.then((res) => {
				dispatch(fetchFileDataFulfilled(res.data));
			})
			.catch((err) => dispatch(fetchFileDataRejected(err)));
	};
};
