import React, { useState } from "react";
import Header from "./Header";
import NotesList from "./components/NotesList";

const App = () => {
  const [notes, setNotes] = useState([""]);

  return (
    <div className="app">
      <Header />
      <NotesList notes={notes} />
    </div>
  );
};

export default App;
