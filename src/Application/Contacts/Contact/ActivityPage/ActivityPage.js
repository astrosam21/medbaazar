import React, { Fragment } from "react";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import ActivityLeftSidebar from "./leftBar/ActivityLeftSidebar";
import ActivityRightSideBar from "./rightBar/ActivityRightSidebar";
import TimelineTab from "./timelineTab/TimelineTab";

class SampleActivityPage extends React.Component {
    render() {
        return (
            <Fragment>
                <GridContainer>
                    <GridItem md={3}>
                        <ActivityLeftSidebar />
                    </GridItem>
                    <GridItem md={6}>
                        <TimelineTab />
                    </GridItem>
                    <GridItem md={3}>
                        <ActivityRightSideBar />
                    </GridItem>
                </GridContainer>
            </Fragment>
        );
    }
}

export default SampleActivityPage;
