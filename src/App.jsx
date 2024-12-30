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
    <form>
      <input type="text" name="notes" id="notes" />
      <button>Add</button>
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
