import React, { Component } from "react";
import Timeline from "../../../../../Alphacomponents/timelineComponent/Timeline";
import { connect } from "react-redux";
import { getTimelineData } from "../../../../../Action/Contact/timelineAction";

class TimelineSample extends Component {
    componentDidMount() {
        this.props.getTimelineData();
    }

    render() {
        const { timelineData, loading } = this.props;
        return (
            <div>
                <Timeline
                    data={timelineData.activityInfo}
                    loading={loading}
                    handleEditButton={(id, type) => this.props.handleEditButton(id, type)}
                    handleDeleteButton={id => this.props.handleTimelineDeleteButton(id)}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    timelineData: state.timeline.timelineData,
    loading: state.timeline.loading
});

const mapDispatchToProps = {
    getTimelineData
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TimelineSample);
