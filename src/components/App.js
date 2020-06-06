import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

let noteID = 0;

function App() {
  let [notes, updateNotes] = useState([]);

  function addNote(note) {
    updateNotes(prevNotes => {
      noteID++;
      return [...prevNotes, { key: noteID, title: note.title, content: note.content }];
    });
  }

  function deleteNote(id) {
    updateNotes(prevNotes => {
      return prevNotes.filter((item, index) => {
        return item.key !== id;
      });
    });
  }

  function renderNote(noteObject) {
    return (
      <Note
        key={noteObject.key}
        id={noteObject.key}
        title={noteObject.title}
        content={noteObject.content}
        onDelete={deleteNote}
      />
    );
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />

      {notes.map(renderNote)}

      <Footer />
    </div>
  );
}

export default App;