import { combineReducers } from "redux";
import TableReducer from "../Reducers/Contact/TableReducer";
import SidebarReducer from "../Reducers/Contact/SidebarReducer";
import timelineReducer from "../Reducers/Contact/timelineReducer";
import fileuploadreducer from "../Reducers/Tools/FileUpload/Reducer";
import {
  rightSideBarCompanyReducer,
  rightSideBarLeadReducer,
  rightSideBarContactReducer,
  rightSideBarAttachmentReducer,
} from "../Reducers/Contact/rightSideBarReducer";
import leftContactBarReducer from "../Reducers/Contact/leftContactBarReducer";

import authReducer from "../Reducers/AuthReducer/authReducer";

import { alphaReducer } from "../Reducers/AlphaReducer/alphaReducer";
import { productsReducer } from "../Reducers/Application/Products/ProductsReducer";
import { mainReducer } from "../Reducers/Application/MainReducer";
const rootReducer = combineReducers({
  Table: TableReducer,
  //board:boardReducer
  Sidebar: SidebarReducer,
  contactCard: rightSideBarContactReducer,
  companyCard: rightSideBarCompanyReducer,
  leadCard: rightSideBarLeadReducer,
  timeline: timelineReducer,
  Info: leftContactBarReducer,
  attachCard: rightSideBarAttachmentReducer,
  fileuploadreducer: fileuploadreducer,

  authReducer: authReducer,
  alphaReducer: alphaReducer,
  //////////////////////
  productsReducer: productsReducer,
  mainReducer: mainReducer,
});

export default rootReducer;
