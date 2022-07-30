import React, { useEffect } from 'react';
import '../assets/global.css';


function List(props) {

    const editHandler = (id) => {
        const tobeUpdated = props.noteList.find(item => item.id === id);
        props.setEditableNote(tobeUpdated);
        props.setIsEditable(true);
        props.setNoteTitle(tobeUpdated.content);
    }

    const deleteHandler = (id) => {
        // const afterDeletion = props.noteList.filter(item => item.id !== id);
        // props.setNoteList(afterDeletion);
        fetch(`http://localhost:3000/notes/${id}`, {
            method : "DELETE"
        }).then( () => {
            props.getData();
        })
    }


    useEffect(() => {
        props.getData();
    }, [])



    return (
        <div className="List">
            <h1>All Notes</h1>
            
            <ul>
                {props.isLoading && <h3>Loading.....</h3> }
                {
                    props.noteList.map(item => (
                        <li>
                            <p>{item.content}</p>
                            <button className='violet' onClick={() => { editHandler(item.id) }}>Edit</button>
                            <button className='red' onClick={() => { deleteHandler(item.id) }}>Delete</button>
                        </li>
                    ))
                }
                {props.errorMsg && <p>{props.errorMsg}</p>}
            </ul>
        </div>
    )
}

export default List