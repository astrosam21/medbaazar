import React,{Component} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import "./timelineStyle/timelineNewElement.css"
import elementStyle from "./timelineStyle/timelineElementStyle"

class TimelineNewElement extends React.Component{
    constructor(props){
        super(props);
    }

    mergeNotificationStyle(iconColor, bubbleStyle){
        const iconColorStyle = iconColor ? { ...elementStyle.iconType, ...{ color: iconColor, borderColor: iconColor } } : elementStyle.iconType;
         return { ...iconColorStyle,...bubbleStyle }
    }
    containerStyle() {
         const { style } = this.props
         const containerStyle = { ...elementStyle.eventContainer, ...style }
         return this.showAsCard() ? { ...elementStyle.card, ...containerStyle } : containerStyle
      }
    showAsCard() {
        const { container } = this.props
        return container === 'card'
    }
    
    messageStyle() {
        const { container, cardHeaderStyle } = this.props
        const messageStyle = container === "card" ? { ...elementStyle.cardTitle, ...cardHeaderStyle } : {};
        return  messageStyle;
    }

    timeStyle() {
        return this.showAsCard() ? elementStyle.time : { ...elementStyle.time, color: "#303e49" };
    }
    render(){
            const {children, style, className, lineStyle, iconStyle, iconColor, 
            icon, buttons, date, title, subtitle, titleStyle, subTitleStyle,
            buttonOnClick, bubbleStyle,}=this.props;

        return (<div className={classNames(className, "timeline-element", "timeline-element-left")} style={style}>
            <div style={this.mergeNotificationStyle(iconColor, bubbleStyle)}>
              <span
                style={{ ...elementStyle.materialIcons, ...iconStyle }}
              >
                {icon}
              </span>
            </div>

            <div style={this.containerStyle()} {...{ className }}>
              <div style={elementStyle.eventContainerBefore} />
              <div style={this.messageStyle()} >
                {date && <div style={this.timeStyle()}>{date}</div>}
                <div style={{ ...elementStyle.actionButtons }} onClick={buttonOnClick}>
                       {buttons}
                </div>
                 <div style={titleStyle}>{title}</div>
                
                 {subtitle && <div
                    style={{
                      ...elementStyle.subtitle,
                      ...subTitleStyle
                     }}
                    >
                    {subtitle}
                  </div>}
               
              </div>
            </div>
            <div className={elementStyle.eventAfter} />
        </div>);
    }
}


TimelineNewElement.propTypes = {
    title: PropTypes.node.isRequired,
    subtitle: PropTypes.node,
    date: PropTypes.node,
    children: PropTypes.node,
    buttons: PropTypes.node,
    container: PropTypes.string,
    icon: PropTypes.node,
    iconColor: PropTypes.string,
    iconStyle: PropTypes.object,
    bubbleStyle: PropTypes.object,
    cardHeaderStyle: PropTypes.object,
    style: PropTypes.object,
    titleStyle: PropTypes.object,
    subtitleStyle: PropTypes.object,
   
    className: PropTypes.string,
    buttonOnClick: PropTypes.func
}

export default TimelineNewElement;