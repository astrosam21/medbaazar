import React,{Component} from "react"
import PropTypes from "prop-types";
import classNames from "classnames";
import "./timelineStyle/timelineNew.css"

const TimelineNew = ({children, className, ...others})=>{
    return <div className={classNames(className, 'vertical-timeline','vertical-timeline-after', 'vertical-timeline-before')}>
        {children}
    </div>
}

TimelineNew.propTypes={
    children:PropTypes.node.isRequired,
    className:PropTypes.string
}

export default TimelineNew