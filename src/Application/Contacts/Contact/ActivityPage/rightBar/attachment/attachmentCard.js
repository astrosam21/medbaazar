import React, { Component } from "react";
import AttachCard from "./card";
import { connect } from "react-redux";
import { getAttachCardData } from "../../../../../../Action/Contact/rightSideBarAction";
import FileUpload from "../../../../../Tools/FileUpload/FileUpload";

class AttachCardSample extends Component {
    constructor() {
        super();
        this.state = {
            modalOpen: false
        };
    }

    componentDidMount() {
        this.props.getAttachCardData();
    }

    handleModalOpen = () => {
        this.setState({ modalOpen: true });
    };

    handleModalClose = () => {
        this.setState({ modalOpen: false });
        this.props.getAttachCardData();
    };

    _handleRemoveFile = () => {
        console.log("removed");
    };

    render() {
        const { fileData, fileLoading } = this.props;
        return (
            <div>
                <AttachCard
                    removeFile={this._handleRemoveFile}
                    handleClickOpen={this.handleModalOpen}
                    // fileData={fileData.data}
                    fileData={fileData.data}
                    fileLoading={fileLoading}
                />
                <FileUpload
                    modalOpen={this.state.modalOpen}
                    handleCloseModal={this.handleModalClose}
                />
            </div>
        );
    }
}
const mapStateToProps = state => ({
    fileData: state.attachCard.fileData,
    fileLoading: state.attachCard.fileLoading
});
const mapDispatchToProps = {
    getAttachCardData
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AttachCardSample);
