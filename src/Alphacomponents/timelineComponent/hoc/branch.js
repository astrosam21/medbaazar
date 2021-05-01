import React,{Component} from 'react'

const branch=(test,Component,EnhancedComponent)=> props => !test ? <Component {...props}/> : <EnhancedComponent {...props}/>

export default branch