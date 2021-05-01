import {
  FETCHFILES,
  UPLOADFILE,
  DELETEFILE,
  ALERT,
  ARCHIVEFILE,
  UNARCHIVEFILE
} from "../../../Action/Tools/FileUpload/actiontypes";
import produce from "immer";

const initialstate = {
  files: {
    active: [],
    archive: []
  },
  alert: ""
};

export default function reducer(state = initialstate, action) {
  switch (action.type) {
    case FETCHFILES:
      return (state = {
        ...state,
        files: action.payload
      });

    case UPLOADFILE:
      return (state = {
        ...state,
        files: {
          ...state.files,
          active: [...state.files.active].concat(action.payload)
        }
      });
    case DELETEFILE:
      console.log(action.payload);

      var newArr = { ...state.files };
      newArr.active.splice(action.payload, 1);
      return (state = {
        ...state,
        files: newArr,
        alert: "ok"
      });
    case ARCHIVEFILE:
      console.log(action.payload);

      var newAr = { ...state.files };
      newAr.active.splice(action.removeIndex, 1);
      var Urstate = { ...newAr };
      Urstate.archive.push(action.payload);
      console.log(Urstate);
      // console.log(newAr);
      return (state = {
        ...state,
        files: Urstate
      });
    case UNARCHIVEFILE:
      console.log(action.payload);

      var newArrr = { ...state.files };
      newArrr.archive.splice(action.removeIndex, 1);
      var mahstate = { ...newArrr };
      mahstate.active.push(action.payload);
      console.log(mahstate);
      return (state = {
        ...state,
        files: mahstate
      });
    case ALERT:
      return (state = {
        ...state,
        alert: "problem"
      });
    default:
      return state;
  }
}

// return produce(state, draft => {
//   draft.files.active.push(action.payload);
// });
