import React, { Component, Fragment } from "react";
import CompanyCard from "./company/companyCard";
import AttachmentCard from "./attachment/attachmentCard";
import LeadCard from "./lead/leadCard";

class ActivityRightSidebarSample extends Component {
    render() {
        return (
            <Fragment>
                <CompanyCard />
                <LeadCard />
                <AttachmentCard />
            </Fragment>
        );
    }
}

export default ActivityRightSidebarSample;
