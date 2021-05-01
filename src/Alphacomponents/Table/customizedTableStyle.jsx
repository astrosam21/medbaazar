const customizedTableStyle = theme => ({
  customTableCell: {
    lineHeight: "1.42857143",
    padding: "12px 8px!important",
    verticalAlign: "middle",
    fontSize: "1em",
    borderBottom: "none",
    border: "1px solid #ddd !important",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      minHeight: "24px",
      minWidth: "32px"
    }
  }
});
export default customizedTableStyle;