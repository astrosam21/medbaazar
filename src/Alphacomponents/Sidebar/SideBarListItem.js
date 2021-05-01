import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";

const SideBarListItem = ({ label, isSelected, path, number, mode }) => {
    
    const classname = isSelected
        ? {
            color: "#f99",
            backgroundColor: "#00ACC1",
            zIndex: 10,
            borderRadius: 5,
            marginTop: 5,
            marginBottom: 5
        }
        : {
            borderRadius: 5
        };

    return (
        <Link to={path} className="Links">
            <ListItem style={classname} button key={label}>
                <ListItemText primary={number ? `${label} (${number})` : label} />
            </ListItem>
        </Link>
    );
};

export default SideBarListItem;
