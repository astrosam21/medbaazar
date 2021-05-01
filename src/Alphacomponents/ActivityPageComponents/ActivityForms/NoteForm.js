import React, { Component } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import Button from "components/CustomButtons/Button.jsx";
import { Input } from '@material-ui/core';
import TextField from "@material-ui/core/TextField";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import "./forms.css"
import TitleInput from '../../MicroComponents/titleInput';
import DraftInput from '../../MicroComponents/draftInput';
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

class NoteForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            editorState: EditorState.createEmpty(),
            save: true,
            cancel: true
        };
        this.save = this.save.bind(this);
        this.cancel = this.cancel.bind(this);
        this.verifyLength = this.verifyLength.bind(this);
    }

    save(event) {
        this.setState({ save: this.state.save });
        this.props.close();
    }
    cancel(event) {
        this.setState({ cancel: this.state.cancel });
        this.props.close();
    }

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState: editorState
        });
        console.log(this.state.editorState);
    };
    verifyLength(value, length) {
        if (value.length >= length) {
            return true;
        }
        return false;
    }
    change = (event, stateName, type, stateNameEqualTo, maxValue) => {
        switch (type) {
            case "length":
                if (this.verifyLength(event.target.value, stateNameEqualTo)) {
                    this.setState({ [stateName + "State"]: "success" });
                    this.setState({ title: event.target.value });
                } else {
                    this.setState({ [stateName + "State"]: "error" });
                }
                break;
            default:
                break;
        }
        console.log(this.state.title);
    };

    render() {
        const { editorState } = this.state;
        return (
            <form>
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
                    <GridItem xs={12} sm={12} md={12}>
                        <DraftInput editorState={this.state.editorState} controlFunc={this.onEditorStateChange} />
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


export default NoteForm;