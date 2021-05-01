import React,{Component} from 'react'

const withDataEmpty = (Component) => (props)=> !props.data.length ? 
<div>
    <p> You have no activity Data..</p>
</div> : <Component {...props}/>

export default withDataEmpty