import React from 'react';
import '../assets/global.css';


function Form(props) {
    const createHandler = () => {
        if (props.noteTitle) {
            const note = {
                id: Date.now(),
                content: props.noteTitle,
            }
            props.setNoteList([note, ...props.noteList]);
            props.setNoteTitle("");
        }
        else {
            alert("Input Field can not be empty!");
        }
    }

    const updateHandler = () => {
        if (props.noteTitle) {
            props.editableNote.content = props.noteTitle;
            props.setNoteTitle("");
            props.setIsEditable(false);
            props.setEditableNote(null);
        }
        else {
            alert("Input Field can not be empty!");
        }
    }

    return (
        <div className="Form">
            <form action="">
                <input type="text" placeholder='Write your notes here...' value={props.noteTitle} onChange={(e) => props.setNoteTitle(e.target.value)} />

                <button onClick={(e) => {
                    e.preventDefault();
                    props.isEditable ? updateHandler() : createHandler();
                }}>{props.isEditable ? "Update Note" : "Create Note"}</button>
            </form>
        </div>
    )
}

export default Form