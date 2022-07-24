import React from 'react';
import '../assets/global.css';


function List(props) {

    const editHandler = (id) => {
        const tobeUpdated = props.noteList.find(item => item.id === id);
        props.setEditableNote(tobeUpdated);
        props.setIsEditable(true);
        props.setNoteTitle(tobeUpdated.content);
    }

    const deleteHandler = (id) => {
        const afterDeletion = props.noteList.filter(item => item.id !== id);
        props.setNoteList(afterDeletion);
    }
    return (
        <div className="List">
            <h1>All Notes</h1>
            <ul>
                {
                    props.noteList.map(item => (
                        <li>
                            <p>{item.content}</p>
                            <button className='violet' onClick={() => { editHandler(item.id) }}>Edit</button>
                            <button className='red' onClick={() => { deleteHandler(item.id) }}>Delete</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default List