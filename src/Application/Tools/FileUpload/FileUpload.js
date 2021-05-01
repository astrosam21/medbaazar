import React, { Component, Fragment } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import validationFormsStyle from "assets/jss/material-dashboard-pro-react/views/validationFormsStyle.jsx";
import Close from "@material-ui/icons/Close";
import Search from "@material-ui/icons/Search";
import Settings from "@material-ui/icons/Settings";
import Slide from "@material-ui/core/Slide";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import modalStyle from "assets/jss/material-dashboard-pro-react/modalStyle.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import SweetAlert from "react-bootstrap-sweetalert";
import sweetAlertStyle from "assets/jss/material-dashboard-pro-react/views/sweetAlertStyle.jsx";
import Card from "components/Card/Card";
import CustomDropDown from "../../../CTcomponents/v1Components/CustomDropdown";
import new_logo from "../../../CTcomponents/assets/img/new_logo.png";
import RenameModal from "./RenameModal";
import ArchiveModal from "./ArchiveModal";
import CustomUrlModal from "./CustomUrlModal";
import ReplaceModal from "./ReplaceModal";
import { connect } from "react-redux";
import Check from "@material-ui/icons/Check";
import Warning from "@material-ui/icons/Warning";
// core components
import SnackbarContent from "../../../CTcomponents/components/Snackbar/SnackbarContent";
import Clearfix from "../../../CTcomponents/components/Clearfix/Clearfix";
import { debounce } from "throttle-debounce";
import Axios from "axios";
// import FormData from "form-data";
import {
  FetchFiles,
  UploadFile,
  RenameFile,
  ArchiveFile,
  DeleteFile,
  UnArchiveFile,
} from "../../../Action/Tools/FileUpload/action";

function Transition(props) {
  return <Slide direction="down" {...props} />;
}

class FileUpload extends Component {
  state = {
    attachedFile: null,
    search: "",
    activeSelectUrl: "",
    activeselect: "",
    archiveselect: "",
    rename: false,
    archive: false,
    urlmodal: false,
    replace: false,
    alert: null,
    FileToArchive: "",
    prevProps: {},
    sweetAlert: "",
    key: "",
    data: {
      name: "",
      id: "",
      typo: "",
      extension: "",
      url: "",
      updated: "",
      size: "",
    },
    currentType: "",
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps !== prevState.prevProps) {
      return { sweetAlert: nextProps.alert, prevProps: nextProps };
    } else return null;
  }
  componentDidMount() {
    this.props.FetchFiles();
  }

  // failedDelete(name) {
  //   this.setState({
  //     alert: (
  //       <SweetAlert
  //         danger
  //         style={{ display: "block", marginTop: "-100px" }}
  //         title="Unable To Delete!"
  //         onConfirm={() => this.hideAlert()}
  //         onCancel={() => this.hideAlert()}
  //         confirmBtnCssClass={
  //           this.props.classes.button + " " + this.props.classes.danger
  //         }
  //       >
  //         {"problem here"}
  //       </SweetAlert>
  //     )
  //   });
  // }

  // successDelete(name) {
  //   return (
  //     <div>
  //       <SnackbarContent
  //         message={
  //           <span>
  //             <b>SUCCESS ALERT:</b> You've Deleted {name}
  //           </span>
  //         }
  //         close
  //         color="success"
  //         icon={Check}
  //       />
  //       <Clearfix />
  //     </div>
  //   );
  // }

  // successDelete(name, alert) {
  //   switch (alert) {
  //     case "ok":
  //       this.setState({
  //         alert: (
  //           <SweetAlert
  //             success
  //             style={{ display: "block", marginTop: "-100px" }}
  //             title="Deleted!"
  //             onConfirm={() => this.hideAlert()}
  //             onCancel={() => this.hideAlert()}
  //             confirmBtnCssClass={
  //               this.props.classes.button + " " + this.props.classes.success
  //             }
  //           >
  //             {name} has been deleted.
  //           </SweetAlert>
  //         )
  //       });
  //       break;
  //     case "problem":
  //       this.setState({
  //         alert: (
  //           <SweetAlert
  //             danger
  //             style={{ display: "block", marginTop: "-100px" }}
  //             title="Deleted!"
  //             onConfirm={() => this.hideAlert()}
  //             onCancel={() => this.hideAlert()}
  //             confirmBtnCssClass={
  //               this.props.classes.button + " " + this.props.classes.danger
  //             }
  //           >
  //             {name} has been deleted.
  //           </SweetAlert>
  //         )
  //       });
  //       break;

  //     default:
  //       break;
  //   }
  // }
  hideAlert() {
    this.setState({
      alert: null,
    });
  }
  // openAlert = data => {
  //   if (this.props.alert !== "") {
  //     this.successDelete(data, this.state.sweetAlert);
  //   }
  // };
  warningWithConfirmAndCancelMessage(data, key) {
    this.setState({
      alert: (
        <SweetAlert
          warning
          style={{ display: "block", marginTop: "-100px" }}
          title="Are you sure?"
          onConfirm={() => {
            // this.successDelete(data.name);
            this.props.DeleteFile(data, key);
            this.hideAlert();

            console.log(data);
          }}
          onCancel={() => this.hideAlert()}
          confirmBtnCssClass={
            this.props.classes.button + " " + this.props.classes.success
          }
          cancelBtnCssClass={
            this.props.classes.button + " " + this.props.classes.danger
          }
          confirmBtnText="Yes, delete it!"
          cancelBtnText="Cancel"
          showCancel
        >
          You will not be able to recover {data.name}, {key}!
        </SweetAlert>
      ),
    });
  }

  handleselect(value, data, key, typo) {
    switch (value) {
      // case "Rename":
      //   {
      //     this.setState({
      //       data: { ...data },
      //       rename: true
      //     });
      //     console.log(data, typo, value);
      //     this.props.RenameFile();
      //   }
      //   break;
      case "Archive":
        {
          this.setState({
            data: { ...data },
            key: key,
            archive: true,
            currentType: typo,
          });
          console.log(data, key, typo);
        }
        break;
      case "Delete":
        this.warningWithConfirmAndCancelMessage(data, key);
        console.log(data);
        break;
      case "Unarchive":
        {
          this.setState({
            data: { ...data },
            key: key,
            archive: true,
            currentType: typo,
          });
        }
        break;

      default:
        break;
    }
  }

  manageArchive = (val, currentType, key) => {
    switch (currentType) {
      case "active":
        console.log(val, key);
        this.props.ArchiveFile(val, key);
        break;
      case "archived":
        this.props.UnArchiveFile(val, key);
        break;

      default:
        break;
    }
  };

  fileSelectHandler = (event) => {
    this.setState({
      attachedFile: event.target.files[0],
    });
  };
  fileUploadHandler = () => {
    var fd = new FormData();
    console.log(this.state.attachedFile, this.state.attachedFile.name);
    fd.append("picture", this.state.attachedFile, this.state.attachedFile.name);
    this.props.UploadFiles(fd);
    console.log(fd.get("picture"));
  };

  uploadFile(classes) {
    return (
      <GridContainer>
        <GridItem md={2}></GridItem>
        <GridItem md={6}>
          <input
            style={{ position: "relative", top: "2px" }}
            type="file"
            onChange={this.fileSelectHandler}
          />
        </GridItem>
        <GridItem md={4}>
          <label htmlFor="contained-button-file">
            <Button
              disabled={!this.state.attachedFile}
              color={"rose"}
              size={"sm"}
              variant="contained"
              component="span"
              style={{ marginLeft: -30 }}
              onClick={this.fileUploadHandler}
            >
              Upload a File
            </Button>
          </label>
        </GridItem>
      </GridContainer>
    );
  }

  getPills(data, typo) {
    // var kiki = this.state.key;
    // var kiki1 = kiki.toString();
    // console.log(kiki1);
    return (
      <div style={{ overflowX: "hidden" }}>
        <RenameModal
          visible={this.state.rename}
          onClose={() => this.setState({ rename: false })}
          data={this.state.data}
          onSave={(Data) => {
            this.props.RenameFile(Data, "rename");
            console.log(data);
          }}
        />
        {console.log(this.state.key)}
        <ArchiveModal
          visible={this.state.archive}
          onClose={() => this.setState({ archive: false })}
          data={this.state.data}
          kiki={this.state.key}
          typo={this.state.currentType}
          onSave={(val, currentType, key) => {
            this.manageArchive(val, currentType, key);
            // console.log(val, currentType);
          }}
          whatToArchive={this.state.FileToArchive}
        />
        {console.log(this.state.data)}

        <GridContainer>
          <GridItem md={12}>
            <Card
              style={{
                marginBottom: 0,
                borderRadius: 0,
                backgroundColor: "#eee",
                padding: 5,
              }}
            >
              <div style={{ marginLeft: 20 }}>
                <GridContainer>
                  <GridItem md={1}>
                    <h3> </h3>
                  </GridItem>
                  <GridItem md={5}>
                    <h3>Name</h3>
                  </GridItem>
                  <GridItem md={2}>
                    <h3>Kind</h3>
                  </GridItem>
                  <GridItem md={2}>
                    <h3>Updated </h3>
                  </GridItem>
                  <GridItem md={2}>
                    <h3> </h3>
                  </GridItem>
                </GridContainer>
              </div>
            </Card>

            {data.map((item, index) => {
              console.log(data);
              return (
                <Card
                  onClick={() =>
                    typo === "archived"
                      ? this.setState({
                          activeSelectUrl: item.url,
                          archiveselect: index,
                          activeselect: "",
                        })
                      : this.setState({
                          activeSelectUrl: item.url,
                          activeselect: index,
                          archiveselect: "",
                        })
                  }
                  key={index.toString()}
                  id={item.id.toString()}
                  className={"onhover"}
                  style={{
                    backgroundColor:
                      typo === "archived"
                        ? index === this.state.archiveselect
                          ? "#00acc1"
                          : ""
                        : index === this.state.activeselect
                        ? "#00acc1"
                        : "",
                    marginBottom: 0.5,
                    marginTop: 0.5,
                    borderRadius: 0,
                    padding: 5,
                  }}
                >
                  <div
                    style={{
                      marginLeft: 20,
                    }}
                  >
                    <GridContainer>
                      <GridItem md={1}>
                        <Fragment>
                          <img
                            alt={""}
                            onerror={(this.src = new_logo)}
                            style={{
                              height: 50,
                              width: 50,
                              marginTop: 11,
                              borderRadius: 2,
                            }}
                            src={item.url}
                          />
                        </Fragment>
                      </GridItem>
                      <GridItem md={5}>
                        <p>{item.name}</p>
                        <p
                          style={{
                            fontWeight: "lighter",
                            fontSize: 13,
                          }}
                        >
                          {item.extension.toUpperCase()} file, Size{" "}
                          {(item.size / 1024).toFixed(2)} KB
                        </p>
                      </GridItem>
                      <GridItem md={2}>
                        <p>{item.typo}</p>
                        <p
                          style={{
                            fontWeight: "lighter",
                            fontSize: 13,
                          }}
                        >
                          {item.extension.toUpperCase()}
                        </p>
                      </GridItem>
                      <GridItem md={2}>
                        <p>{item.updated}</p>
                      </GridItem>
                      <GridItem
                        md={2}
                        style={{
                          marginTop: 1,
                        }}
                      >
                        <CustomDropDown
                          buttonProps={{
                            color: "rose",
                            size: "sm",
                          }}
                          buttonIcon={Settings}
                          dropdownList={
                            typo === "active"
                              ? ["Rename", "Archive", "Delete"]
                              : ["Unarchive"]
                          }
                          onSelect={(value) => {
                            this.handleselect(
                              value,
                              {
                                name: item.name,
                                id: item.id,
                                url: item.url,
                                size: item.size,
                                typo: item.typo,
                                extension: item.extension,
                                updated: item.updated,
                              },
                              index.toString(),
                              typo
                            );
                            // console.log(value);
                          }}
                        />
                      </GridItem>
                    </GridContainer>
                  </div>
                </Card>
              );
            })}
          </GridItem>
        </GridContainer>
      </div>
    );
  }

  render() {
    const { classes, modalOpen } = this.props;
    // const { sweetAlert } = this.state;
    console.log(this.props.files);
    // console.log(this.state.data);
    // console.log(this.state.key);
    // console.log(this.state.currentType);

    return (
      <Fragment>
        {this.state.alert}
        <Dialog
          maxWidth={"md"}
          fullWidth={true}
          open={modalOpen}
          transition={Transition}
          keepMounted
          onClose={() => this.props.handleCloseModal()}
        >
          <DialogTitle
            id="classic-modal-slide-title"
            disableTypography
            className={classes.modalHeader}
          >
            <Button
              justIcon
              className={classes.modalCloseButton}
              key="close"
              aria-label="Close"
              color="transparent"
              onClick={() => this.props.handleCloseModal()}
            >
              <Close className={classes.modalClose} />
            </Button>
            <h4 className={classes.modalTitle}>Select a File</h4>
          </DialogTitle>
          <CustomUrlModal
            visible={this.state.urlmodal}
            onClose={() => this.setState({ urlmodal: false })}
            onSave={() => {}}
          />
          <DialogContent
            id="modal-slide-description"
            className={classes.modalBody}
          >
            <GridContainer justify={"center"}>
              <GridItem md={12}>
                <div className={classes.mlAuto} style={{ float: "right" }}>
                  <CustomInput
                    labelText="Search"
                    inputRootCustomClasses={classes.inputRootCustomClasses}
                    formControlProps={{
                      className: classes.formControl,
                    }}
                    inputProps={{
                      value: this.state.search,
                      onChange: (event) =>
                        this.setState({ search: event.target.value }),
                      inputProps: {
                        "aria-label": "Search",
                        className: classes.searchInput,
                      },
                    }}
                  />
                  <Button
                    color="white"
                    justIcon
                    round
                    style={{ marginTop: 20 }}
                  >
                    <Search className={classes.searchIcon} />
                  </Button>
                </div>
                <NavPills
                  color="info"
                  tabs={[
                    {
                      tabButton: "Active Files",
                      tabContent: this.getPills(
                        this.props.files.active,
                        "active"
                      ),
                    },
                    {
                      tabButton: "Archived Files",
                      tabContent: this.getPills(
                        this.props.files.archive,
                        "archived"
                      ),
                    },
                  ]}
                />
              </GridItem>
            </GridContainer>
          </DialogContent>
          <DialogActions
            className={classes.modalFooter}
            style={{ float: "left" }}
          >
            <Button
              disabled={
                this.state.activeselect === "" &&
                this.state.archiveselect === ""
                  ? true
                  : false
              }
              onClick={() => {
                console.log(this.state.activeSelectUrl);
                this.props.setImageUrl(this.state.activeSelectUrl);
              }}
              color="rose"
            >
              Use File
            </Button>
            <Button
              size={"sm"}
              onClick={() => {
                this.setState({ urlmodal: true });
              }}
              color="rose"
            >
              Use custom Url
            </Button>
            {this.uploadFile(classes)}
            <Button
              size={"sm"}
              onClick={() => this.props.handleCloseModal()}
              color="rose"
            >
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    files: state.fileuploadreducer.files,
    alert: state.fileuploadreducer.alert,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    FetchFiles: () => FetchFiles(dispatch),
    UploadFiles: (data) => UploadFile(data, dispatch),
    ArchiveFile: (data, key) => ArchiveFile(data, key, dispatch),
    UnArchiveFile: (data, key) => UnArchiveFile(data, key, dispatch),
    RenameFile: (data) => RenameFile(data),
    DeleteFile: (data, key) => DeleteFile(data, key, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  withStyles(sweetAlertStyle)(
    withStyles(modalStyle)(withStyles(validationFormsStyle)(FileUpload))
  )
);

// <ReplaceModal
//   visible={this.state.replace}
//   onClose={() => this.setState({ replace: false })}
//   data={this.state.data}
//   onSave={val => {
//     // this.fileUploadHandler(val);
//     console.log(val);
//   }}
// />;
