import { useState } from 'react';
import './assets/global.css';
import Form from './components/Form';
import List from './components/List';

function App() {

  const [noteTitle, setNoteTitle] = useState("");
  const [isEditable, setIsEditable] = useState(false);
  const [noteList, setNoteList] = useState([]);
  const [editableNote, setEditableNote] = useState(null);

  return (
    <div className="App">
      <Form
      noteTitle = {noteTitle}
      setNoteTitle = {setNoteTitle}
      isEditable = {isEditable}
      setIsEditable = {setIsEditable}
      noteList = {noteList}
      setNoteList = {setNoteList}
      editableNote = {editableNote}
      setEditableNote = {setEditableNote}
      />
      <List 
      setNoteTitle = {setNoteTitle}
      setIsEditable = {setIsEditable}
      noteList = {noteList}
      setNoteList = {setNoteList}
      setEditableNote = {setEditableNote}
      />
    </div>
  );
}

export default App;
