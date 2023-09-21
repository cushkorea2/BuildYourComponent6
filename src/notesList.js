// NotesList.js

import React from "react";
import Note from "./Note";

const NotesList = ({ notes, searchText }) => {
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="notes-list">
      {filteredNotes.map((note) => (
        <Note key={note.id} title={note.title} description={note.description} />
      ))}
    </div>
  );
};

export default NotesList;
