import Axios from "axios";
import {
  FETCHFILES,
  UPLOADFILE,
  DELETEFILE,
  UNARCHIVEFILE,
  ARCHIVEFILE
} from "./actiontypes";
import { handleHTTPError } from "../../AlphaAction/alertAction";
// http://cc287d78.ngrok.io/uploadimage
// http://localhost:3006/Files
// http://44608311.ngrok.io/getimagesdetail
export function FetchFiles(dispatch) {
  Axios.get("http://44608311.ngrok.io/getimagesdetail").then(Response => {
    dispatch({
      type: FETCHFILES,
      payload: Response.data.Files
    });
    // console.log(Response);
  });
}

export function UploadFile(data, dispatch) {
  var headers = {
    "Content-Type": "multipart/form-data"
  };

  Axios.defaults.headers = headers;
  Axios.post(
    "http://44608311.ngrok.io/uploadimage ",

    data,
    {
      onUploadProgress: ProgressEvent => {
        console.log(
          "Upload Progress :- " +
          Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100) +
          "%"
        );
      }
    }
  )
    .then(res => {
      console.log(res);

      dispatch({
        type: UPLOADFILE,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
      handleHTTPError(dispatch, err);
    });
}

export function ArchiveFile(data, key, dispatch) {
  console.log(data.id);
  Axios.post("http://44608311.ngrok.io/archiveimage ", { image_id: data.id })
    .then(res => {
      console.log(res);
      dispatch({
        type: ARCHIVEFILE,
        payload: data,
        removeIndex: key
      });
    })
    .catch(err => {
      console.log(err);
      handleHTTPError(dispatch, err);
    });
}

export function UnArchiveFile(data, key, dispatch) {
  console.log(data);
  console.log(key);
  Axios.post("http://44608311.ngrok.io/unarchiveimage ", { image_id: data.id })
    .then(res => {
      console.log(res);
      dispatch({
        type: UNARCHIVEFILE,
        payload: data,
        removeIndex: key
      });
    })
    .catch(err => {
      console.log(err);
      handleHTTPError(dispatch, err);
    });
}

export function RenameFile(data, type) {
  Axios.post("", {
    type: type,
    data: data
  });
}
export function DeleteFile(data, key, dispatch) {
  Axios.post("http://44608311.ngrok.io/deleteimage", { image_id: data.id })
    .then(res => {
      console.log(res);
      console.log(key);
      dispatch({
        type: DELETEFILE,
        payload: key
      });
    })
    .catch(err => {
      console.log(err);
      handleHTTPError(dispatch, err);
    });

  Axios.delete("http://localhost:3006/Files/" + data);
}
