import React, { Component, Fragment } from "react";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
class ContactViewProperty extends React.Component {
    state = {
        firstname: "",
        lastname: "",
        owner: "",
        phone: "",
        email: "",
        leadstatus: ""
    };

    componentWillReceiveProps(newProps) {
        this.setState({
            firstname: newProps.contactview.firstname,
            lastname: newProps.contactview.lastname,
            owner: newProps.contactview.owner,
            phone: newProps.contactview.phone,
            email: newProps.contactview.email
        });
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                        <CustomInput
                            labelText="First Name"
                            id="float"
                            formControlProps={{
                                fullWidth: true
                            }}
                            inputProps={{
                                onChange: event => this.setState({ firstname: event.target.value }),
                                value: this.state.firstname
                            }}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={12}>
                        <CustomInput
                            labelText="Last Name"
                            id="float"
                            formControlProps={{
                                fullWidth: true
                            }}
                            inputProps={{
                                onChange: event => this.setState({ lastname: event.target.value }),
                                value: this.state.lastname
                            }}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={12}>
                        <CustomInput
                            labelText="Email"
                            id="float"
                            formControlProps={{
                                fullWidth: true
                            }}
                            inputProps={{
                                onChange: event => this.setState({ email: event.target.value }),
                                value: this.state.email
                            }}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={12}>
                        <CustomInput
                            labelText="Phone Number"
                            id="float"
                            formControlProps={{
                                fullWidth: true
                            }}
                            inputProps={{
                                onChange: event => this.setState({ phone: event.target.value }),
                                value: this.state.phone
                            }}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={12}>
                        <CustomInput
                            labelText="Owner Name"
                            id="float"
                            formControlProps={{
                                fullWidth: true
                            }}
                            inputProps={{
                                onChange: event => this.setState({ owner: event.target.value }),
                                value: this.state.owner
                            }}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={6} md={12}>
                        <FormControl fullWidth className={classes.selectFormControl}>
                            <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
                                Lead Status
                            </InputLabel>
                            <Select
                                MenuProps={{
                                    className: classes.selectMenu
                                }}
                                classes={{
                                    select: classes.select
                                }}
                                value={this.state.leadstatus}
                                onChange={event =>
                                    this.setState({ leadstatus: event.target.value })
                                }
                                inputProps={{
                                    name: "simpleSelect",
                                    id: "simple-select"
                                }}
                            >
                                <MenuItem
                                    classes={{
                                        root: classes.selectMenuItem
                                    }}
                                    value="In Progress"
                                >
                                    In Progress
                                </MenuItem>
                                <MenuItem
                                    classes={{
                                        root: classes.selectMenuItem,
                                        selected: classes.selectMenuItemSelected
                                    }}
                                    value="open deal"
                                >
                                    open deal
                                </MenuItem>
                                <MenuItem
                                    classes={{
                                        root: classes.selectMenuItem,
                                        selected: classes.selectMenuItemSelected
                                    }}
                                    value="unqualified"
                                >
                                    unqualified
                                </MenuItem>
                                <MenuItem
                                    classes={{
                                        root: classes.selectMenuItem,
                                        selected: classes.selectMenuItemSelected
                                    }}
                                    value="Connected"
                                >
                                    Connected
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </GridItem>
                </GridContainer>
            </div>
        );
    }
}

export default ContactViewProperty;
