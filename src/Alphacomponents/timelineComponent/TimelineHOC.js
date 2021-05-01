import React,{Component} from "react"
import PropTypes from "prop-types";
import {compose} from 'recompose'
import withDataNull from "./hoc/withDataNull"
import withDataEmpty from "./hoc/withDataEmpty"
import withIndicatorLoading from "./hoc/withIndicatorLoading"

const withTimelineHOC = compose (
    withDataNull,
    withDataEmpty,
    withIndicatorLoading
)

export default withTimelineHOC


// function timelineHOC(conditionalRenderFunc, props, WrappedComponent){
//     return function buildNewTimelineComponent(Component){
//         return function finalComponent(props){
//             return conditionalRenderFunc(props)?
//                 <WrappedComponent {...props}/> :
//                     <Component {...props} />
//         }
//     }
// }

// function conditionalRenderFunc(props){

// }