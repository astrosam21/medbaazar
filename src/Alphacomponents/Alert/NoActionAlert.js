import React from 'react';
// react component used to create sweet alerts
import SweetAlert from "react-bootstrap-sweetalert";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Button from "components/CustomButtons/Button.jsx";
// styles for buttons on sweetalert
import sweetAlertStyle from "assets/jss/material-dashboard-pro-react/views/sweetAlertStyle.jsx";

class SweetAlertDemo extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      alert: null,
    };
    this.hideAlert = this.hideAlert.bind(this);
  }
  hideAlert() {
    this.setState({
      alert: null
    });
  }
  successAlert() {
    this.setState({
      alert: (
        <SweetAlert
          success
          style={{ display: "block", marginTop: "-100px" }}
          title="Good job!"
          onConfirm={() => this.hideAlert()}
          onCancel={() => this.hideAlert()}
          confirmBtnCssClass={
            this.props.classes.button + " " + this.props.classes.success
          }
        >
          You clicked the button!
        </SweetAlert>
      )
    });
  }
  render(){
    return (
      <div>
        {this.state.alert}
        <Button color="rose" onClick={this.successAlert.bind(this)}>
          Try me!
        </Button>
      </div>
    );
  }
}

export default withStyles(sweetAlertStyle)(SweetAlertDemo);