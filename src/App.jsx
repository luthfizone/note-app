import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    /**
     * add new note to array notes
     * with spread parameter
     *
     * setNotes([...notes, note])
     *
     * or can use with manual style
     */
    const newNote = [...notes];
    newNote.push(note);
    setNotes(newNote);
  };
  return (
    <div className="app">
      <Header />
      <InputNotes addNote={addNote} />
      <NotesList notes={notes} />
    </div>
  );
}

function Header() {
  return <h1 className="header">Notes</h1>;
}

function InputNotes({ addNote }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim()) {
      addNote(inputValue);
      setInputValue("");
    }
  };

  return (
    <form className="input-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="notes"
        id="notes"
        className="input-field"
        placeholder="Add a new note..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="add-button">Add</button>
    </form>
  );
}

function NotesList({ notes }) {
  return (
    <ul className="notes-list">
      {notes.map((note, index) => (
        <li key={index} className="note-item">
          {note} <button className="done-button">Done</button>
        </li>
      ))}
    </ul>
  );
}

export default App;
