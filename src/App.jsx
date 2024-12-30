function App() {
  return (
    <div className="app">
      <Header />
      <InputNotes />
      <NotesList />
    </div>
  );
}

function Header() {
  return <h1 className="header">Notes</h1>;
}

function InputNotes() {
  return (
    <form className="input-form">
      <input
        type="text"
        name="notes"
        id="notes"
        className="input-field"
        placeholder="Add a new note..."
      />
      <button className="add-button">Add</button>
    </form>
  );
}

function NotesList() {
  return (
    <ul>
      <li>
        Makan <button>Done</button>
      </li>
    </ul>
  );
}

export default App;
