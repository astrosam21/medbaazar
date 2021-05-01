import React, { Component } from 'react';
import Checkbox from "@material-ui/core/Checkbox";
import customCheckboxRadioSwitch from "assets/jss/material-dashboard-pro-react/customCheckboxRadioSwitch.jsx";
import withStyles from "@material-ui/core/styles/withStyles";

import Check from "@material-ui/icons/Check";

function checkBoxInput(props){
    const {classes,index,onClick}=props
    return(
        <Checkbox
            className={classes.positionAbsolute}
            tabIndex={-1}
            onClick={() => {
                console.log(index)
                props.handleToggle(index)
            }}
            checkedIcon={<Check className={classes.checkedIcon} />}
            icon={<Check className={classes.uncheckedIcon} />}
            classes={{
                checked: classes.checked
            }}
        />
    );
}



export default withStyles(customCheckboxRadioSwitch)(checkBoxInput)