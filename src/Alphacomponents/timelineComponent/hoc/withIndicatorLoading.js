import React,{Component} from 'react'

const withLoadingIndicator=(Component)=>({isLoadingData,...others})=> isLoadingData ?
        <div>
            <p>
                Loading Data....
            </p>
        </div> :  <Component {...others}/>
export default withLoadingIndicator