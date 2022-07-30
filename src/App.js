import { useState } from 'react';
import './assets/global.css';
import Form from './components/Form';
import List from './components/List';

function App() {

  const [noteTitle, setNoteTitle] = useState("");
  const [isEditable, setIsEditable] = useState(false);
  const [noteList, setNoteList] = useState([]);
  const [editableNote, setEditableNote] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const getData = () => {
    fetch("http://localhost:3000/notes").then(response => response.json()).then((data) => {
      setNoteList(data);
      setErrorMsg("");
      setIsLoading(false);
    }).catch((err) => {
      setErrorMsg(err.message);
      setIsLoading(false);
    }
    )

  }


  return (
    <div className="App">
      <Form
        noteTitle={noteTitle}
        setNoteTitle={setNoteTitle}
        isEditable={isEditable}
        setIsEditable={setIsEditable}
        noteList={noteList}
        setNoteList={setNoteList}
        editableNote={editableNote}
        setEditableNote={setEditableNote}
        errorMsg={errorMsg}
        setErrorMsg={setErrorMsg}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        getData = {getData}
      />
      <List
        setNoteTitle={setNoteTitle}
        setIsEditable={setIsEditable}
        noteList={noteList}
        setNoteList={setNoteList}
        setEditableNote={setEditableNote}
        errorMsg={errorMsg}
        setErrorMsg={setErrorMsg}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        getData = {getData}
      />
    </div>
  );
}

export default App;
