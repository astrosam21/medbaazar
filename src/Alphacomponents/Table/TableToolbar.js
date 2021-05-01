import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
import { lighten } from "@material-ui/core/styles/colorManipulator";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import classNames from "classnames";

const toolbarStyles = theme => ({
    root: {
        paddingRight: theme.spacing.unit
    },
    highlight:
        theme.palette.type === "light"
            ? {
                color: theme.palette.secondary.main,
                backgroundColor: lighten(theme.palette.secondary.light, 0.85)
            }
            : {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.secondary.dark
            },
    spacer: {
        flex: "1 1 100%"
    },
    actions: {
        color: theme.palette.text.secondary
    },
    title: {
        flex: "0 0 auto"
    }
});

class TableToolbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            simpleSelect: "",
            multipleSelect: [],
            deleteAlert: false,
            completeAlert: false
        };
        this._deleteButton = this._deleteButton.bind(this);
        this._editButton=this._editButton.bind(this); 
    }

    _deleteButton(){   
        this.props.deleteButtonAction();
    }
    _editButton(){
        this.props.editButtonAction();
    }
    
    render() {
        const { numSelected, classes} = this.props;
        return (
            <Toolbar
                className={classNames(classes.root, {
                    [classes.highlight]: numSelected > 0
                })}
             >
                <div className={classes.title}>
                    {numSelected > 0 ? (
                        <Typography color="inherit" variant="subtitle1">
                            {numSelected} selected
                         </Typography>
                     ) : null}
                </div>
                <div className={classes.spacer} />
                <div className={classes.actions}>
                    {numSelected > 0 ? (
                        <div style={{display:"flex", flexDirection:"row"}}>
                            {/* <Tooltip title="Edit">
                                <IconButton
                                    onClick={() =>
                                        this._editButton()
                                    }
                                    aria-label="edit"
                                >
                                    <Create />
                                </IconButton>
                            </Tooltip> */}
                            <Tooltip title="Delete">
                                <IconButton
                                    onClick={() => 
                                        this._deleteButton()
                                    }
                                    aria-label="Delete"
                                >
                                    <DeleteIcon />
                                </IconButton>
                            </Tooltip>
                      
                        </div>
                    ) : null}     
                </div>
            </Toolbar>
        );
    }
}

TableToolbar.propTypes = {
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired
};

export default withStyles(toolbarStyles)(TableToolbar);
