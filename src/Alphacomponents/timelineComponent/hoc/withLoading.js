import React, {Component} from 'react'
import CircularProgress from "@material-ui/core/CircularProgress";
import { withStyles } from "@material-ui/core/styles";
const withLoading = (Component) => (props) =>
    <div>
        <Component {...props} />

        <div className="interactions">
            {props.isLoading && <div>
             
                <CircularProgress />

            </div>
            }
        </div>
    </div>

export default withLoading