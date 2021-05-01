import React from 'react';
import Button from "components/CustomButtons/Button.jsx";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import './forms.css';
import TextField from "@material-ui/core/TextField";
import DateInput from '../../MicroComponents/dateInput';
import SelectInput from "../../MicroComponents/selectInput";
import TitleInput from "../../MicroComponents/titleInput";
import DraftInput from "../../MicroComponents/draftInput";
import GridItem from "components/Grid/GridItem";
import GridContainer from "components/Grid/GridContainer";
const btnSize = {
    width: 100
};
var tempDate = new Date();
const dateCurrent = tempDate.getFullYear() + "-" + (tempDate.getMonth() + 1) + "-" + tempDate.getDate();

class ScheduleForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Save: true,
            cancel: true,
            options: ["Deepak", "Rahul", "Anish"],
            durations: [
                "5 minutes",
                "10 minutes",
                "15 minutes",
                "20 minutes",
                "30 minutes",
                "45 minutes",
                "1 Hour",
                "2 Hour",
                "4 Hour",
                "6 Hour",
                "8 Hour"
            ],
            types: ["Call", "Mail", "ToDo"],
            simpleSelect: "",
            selectCompany: "",
            selectType: "",
            date: "",
            editorState: EditorState.createEmpty()
        };
        this.save = this.save.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    save(event) {
        this.setState({ save: this.state.save });
        this.props.close();
    }
    cancel(event) {
        this.setState({ cancel: this.state.cancel });
        this.props.close();
    }
    verifyLength(value, length) {
        if (value.length >= length) {
            return true;
        }
        return false;
    }
    change(event, stateName, type, stateNameEqualTo, maxValue) {
        switch (type) {
            case "length":
                if (this.verifyLength(event.target.value, stateNameEqualTo)) {
                    this.setState({ [stateName + "State"]: "success" });
                } else {
                    this.setState({ [stateName + "State"]: "error" });
                }
                break;
            default:
                break;
        }
    }
    onEditorStateChange = (editorState) => {
        this.setState({
            editorState: editorState
        });
        console.log(this.state.editorState);
    };

    handleSimpleSelect = (event) => {
        this.setState({ [event.target.name]: event.target.value });
        console.log(event.target.name);
    };

    _handleDate = (date) => {
        console.log(date);
        this.setState({ date: date });
        console.log(this.state.date);
    };

    render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <TitleInput
                  controlFunc={this.change}
                  inputType={"text"}
                  placeholder={"Input here"}
                  label={"Title *"}
                  content={this.state.title}
                  fullWidth={true}
                />
              </GridItem>
                    <GridItem xs={6} sm={6} md={6} style={styles.midDiv}>
                <DateInput
                  handleDate={this._handleDate}
                  date={this.state.date}
                  fullWidth={false}
                  labelText={"Meeting Time"}
                  placeholder={"choose a time"}
                />
              </GridItem>
              <GridItem xs={6} sm={6} md={6}>
                <SelectInput
                  label={"Duration"}
                  name={"selectDuration"}
                  selectedOption={this.state.selectDuration}
                  options={this.state.durations}
                  controlFunc={this.handleSimpleSelect}
                  placeholder={"Duration"}
                />
              </GridItem>
              <GridItem xs={6} sm={6} md={6}>
                <SelectInput
                  label={"Type"}
                  name={"selectType"}
                  selectedOption={this.state.selectType}
                  options={this.state.types}
                  controlFunc={this.handleSimpleSelect}
                  placeholder={"Type"}
                />
              </GridItem>
                    <GridItem xs={6} sm={6} md={6}>
                <SelectInput
                  label={"Attendees"}
                  name={"simpleSelect"}
                  selectedOption={this.state.simpleSelect}
                  options={this.state.options}
                  controlFunc={this.handleSimpleSelect}
                  placeholder={"Attendees"}
                />
              </GridItem>

              <GridItem xs={12} sm={12} md={12}>
                <DraftInput
                  editorState={this.state.editorState}
                  controlFunc={this.onEditorStateChange}
                />
              </GridItem>
                    <GridItem md={12}>
                        <GridContainer justify="flex-end">
                            <GridItem>
                                <Button color="rose" onClick={this.save} style={{ width: 120 }}>
                                    Add
						    </Button>

                                <Button color="rose" onClick={this.cancel} style={{ width: 120 }}>
                                    cancel
						</Button>
                            </GridItem>

                        </GridContainer>


                    </GridItem>
            </GridContainer>
          </form>
        );
    }
}
const styles = {
    midDiv: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "center"
    }
};
export default ScheduleForm;