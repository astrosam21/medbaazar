import React from "react";
import ImageIcon from "@material-ui/icons/Image";
import FormatColorTextRoundedIcon from "@material-ui/icons/FormatColorTextRounded";

import TextsmsRoundedIcon from "@material-ui/icons/TextsmsRounded";
import RemoveIcon from "@material-ui/icons/Remove";
import BusinessIcon from "@material-ui/icons/Business";
import ViewDayIcon from "@material-ui/icons/ViewDay";
import SendIcon from "@material-ui/icons/Send";
const Email = {
  EmailGeneratedId: "",
  EmailType: "Regular",
  SenderId: "",
  design: {
    template: {
      background: "#000",
      pickColor: false,
      body: "#fff",
      pickBodyColor: false,
      enable_Border: false,
      BorderWidth: "1",
      BorderColor: "#fafafa",
      pickBorderColor: false,
      is_Full_Width: false,
      is_Pattern: false,
      pattern_Url: ""
    },
    divider: {
      height: "",
      color: "#000",
      style: "Solid"
    },
    buttons: {
      radius: "",
      buttonColor: "",
      buttonFont: "",
      buttonTextSize: "",
      buttonTextColor: "",
      isBold: false,
      isItalic: false,
      isUnderLined: false
    }
  },
  FieldNames: {}
};
export default Email;
