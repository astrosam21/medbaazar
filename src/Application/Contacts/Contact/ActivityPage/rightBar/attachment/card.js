import React, { Component, Fragment } from "react";
import ActivityAttachmentCards from "../../../../../../Alphacomponents/ActivityPageComponents/ActivityRightBar/ActivityAttachmentCards";

class AttachCard extends Component {
    state = {};
    componentDidMount() {}
    _handleClickOpen = () => {
        this.props.handleClickOpen();
    };
    _handleRemoveAttachment = () => {
        this.props.removeFile();
    };
    render() {
        const { fileData, fileLoading } = this.props;

        return (
            <Fragment>
                <ActivityAttachmentCards
                    handleClickOpen={this._handleClickOpen}
                    removeFile={this._handleRemoveAttachment}
                    data={fileData}
                    loading={fileLoading}
                />
            </Fragment>
        );
    }
}

export default AttachCard;
