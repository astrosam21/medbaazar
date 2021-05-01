import React,{Component} from 'react'

const withDataNull = (Component)=>(props)=> !props.data ? null : <Component {...props}/>
    
export default withDataNull