import React, { Component } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import "./formComponentStyle/atoms.css";

class DraftInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
        }
    }

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
    };

    render() {
        const { editorState,controlFunc } = this.props;
        return (
            <div >
                <Editor
                    editorState={editorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editor-input"
                    editorStyle={{
                        backgroundColor: "#fafafa", padding: 10,
                        boxShadow: 'inset rgba(0, 0, 0, 0.117647) 0px 1px 2px, rgba(0, 0, 0, 0.117647) 0px 1px 2px',
                        borderWidth: 2,
                        borderColor: "#000",
                        zIndex: 'revert'
                    }}
                    onEditorStateChange={controlFunc}
                    toolbar={{
                        options: ['inline'],
                        inline: { inDropdown: false, options: ['bold', 'italic', 'underline'], },

                    }}
                />
                <hr />
            </div>
        );
    }
}

export default DraftInput;