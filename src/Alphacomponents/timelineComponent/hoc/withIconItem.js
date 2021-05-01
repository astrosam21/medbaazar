import React,{Component} from "react"
import { compose } from "recompose";
import branch from "./branch"

const withIconItem =(Component)=>(EnhancedComponent)=>{
    const HasAction = props => branch(conditionalRenderFunc(props), Component,EnhancedComponent)(props)
    
    return HasAction
}
export default withIconItem

function conditionalRenderFunc(props){
    return props.data.activityType==="note"? true : false
}