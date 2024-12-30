import { useState } from "react";
import PropTypes from "prop-types";

/**
 * Komponen utama aplikasi yang mengelola state dan merender komponen lainnya.
 * @returns {JSX.Element} Elemen JSX untuk aplikasi.
 */
function App() {
  // State untuk menyimpan daftar catatan
  const [notes, setNotes] = useState([]);

  /**
   * Menambahkan catatan baru ke dalam daftar catatan.
   * @param {string} note - Catatan baru yang akan ditambahkan.
   */
  const addNote = (note) => {
    // Membuat salinan dari array notes dan menambahkan catatan baru
    const newNote = [...notes];
    newNote.push(note); // menambahkan data catatan dari parameter yang diinputkan
    setNotes(newNote); // mengirim kembali data catatan ke state daftar catatan
  };

  /**
   * Menghapus catatan dari daftar berdasarkan indeks.
   * @param {number} index - Indeks catatan yang akan dihapus.
   */
  const removeNote = (index) => {
    // Membuat salinan dari array notes dan menghapus catatan pada indeks tertentu
    const newNote = [...notes];
    newNote.splice(index, 1); // menghapus 1 data tergantung dari index yang dipilih
    setNotes(newNote); // mengirim kembali datanya ke state daftar catatan
  };

  return (
    <div className="app">
      <Header />
      <InputNotes addNote={addNote} />
      <NotesList notes={notes} removeNote={removeNote} />
      <Footer />
    </div>
  );
}

/**
 * Komponen header yang menampilkan judul aplikasi.
 * @returns {JSX.Element} Elemen JSX untuk header.
 */
function Header() {
  return <h1 className="header">Notes</h1>;
}

/**
 * Komponen untuk memasukkan catatan baru.
 * @param {Object} props - Properti komponen.
 * @param {Function} props.addNote - Fungsi untuk menambahkan catatan baru.
 * @returns {JSX.Element} Elemen JSX untuk input catatan.
 */
function InputNotes({ addNote }) {
  // State untuk menyimpan nilai input
  const [inputValue, setInputValue] = useState("");

  /**
   * Menangani pengiriman formulir untuk menambahkan catatan baru.
   * @param {Event} e - Event pengiriman formulir.
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    // Menambahkan catatan baru jika input tidak kosong
    if (inputValue.trim()) {
      addNote(inputValue);
      setInputValue(""); // Mengosongkan input setelah menambahkan catatan
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
        onChange={(e) => setInputValue(e.target.value)} // Mengubah nilai input
      />
      <button className="add-button">Add</button>
    </form>
  );
}

/**
 * Props validasi untuk keperluan validasi
 * di proyek react
 */
InputNotes.propTypes = {
  addNote: PropTypes.func.isRequired,
};

/**
 * Komponen untuk menampilkan daftar catatan.
 * @param {Object} props - Properti komponen.
 * @param {Array<string>} props.notes - Daftar catatan dari parent.
 * @param {Function} props.removeNote - Fungsi untuk menghapus catatan dari parent.
 * @returns {JSX.Element} Elemen JSX untuk daftar catatan.
 */
function NotesList({ notes, removeNote }) {
  return (
    <ul className="notes-list">
      {/* Merender daftar catatan dari parent kesini */}
      {notes.map((note, index) => (
        <li key={index} className="note-item">
          {note}{" "}
          {/* Menjalankan fungsi menghapus cararan dari state daftar catatan (parent) ketika tombol di klik */}
          <button className="done-button" onClick={() => removeNote(index)}>
            Done
          </button>
        </li>
      ))}
    </ul>
  );
}

/**
 * Props validasi untuk keperluan validasi
 * di proyek react
 */
NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.string).isRequired,
  removeNote: PropTypes.func.isRequired,
};

function Footer() {
  return <span className="footer">Develop by luthfizone@2024</span>;
}

export default App;
