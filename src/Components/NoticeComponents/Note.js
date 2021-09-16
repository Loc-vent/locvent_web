import React, { useContext } from "react";
import { Context } from "../../Context/DataContext";
import { Button } from "reactstrap";

import styles from "../../Styles/Note.module.css";

export function Note() {
  const { notes, removeNote, editNote } = useContext(Context);

  function getListItems() {
    return notes.map((note) => (
      <li key={note.id}>
        {note.isEditing ? (
          <div 
          style={{
            border: "1px solid #ccc",
          }}
          >
            <textarea
              rows="3"
              type="text"
              value={note.text}
              onChange={(e) => {
                note.text = e.target.value;
                editNote(note);
              }}
            />
            <Button
              size="sm"
              outline
              color="success"
              onClick={() => {
                note.isEditing = false;
                editNote(note);
              }}
            >
              update
            </Button>
          </div>
        ) : (
          <div>
            <input type="text" readOnly={true} value={note.text} />
            <Button
              size="sm"
              outline
              color="warning"
              className="m-2"
              onClick={() => {
                note.isEditing = true;
                editNote(note);
              }}
            >
              edit
            </Button>
          </div>
        )}

        <Button
          size="sm"
          outline
          color="danger"
          className="m-2"
          onClick={() => removeNote(note.id)}
        >
          delete
        </Button>
      </li>
    ));
  }

  function getNotes() {
    if (notes.length > 0) {
      return <ul className={styles.noteContainer}>{getListItems()}</ul>;
    }
  }

  return <>{getNotes()}</>;
}
