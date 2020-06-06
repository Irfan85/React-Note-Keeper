import React, { useState } from "react";
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import AddIcon from '@material-ui/icons/Add';

function CreateArea(props) {
  let [isExpanded, setExpanded] = useState(false);
  let [note, setNote] = useState({ title: "", content: "" });

  function handleContentChange(event) {
    let { name, value } = event.target;

    setNote(prevValues => {
      return {
        ...prevValues,
        [name]: value
      };
    });
  }

  function expand() {
    if (!isExpanded) {
      setExpanded(true);
    }
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && <input name="title" placeholder="Title" value={note.title} onChange={handleContentChange} />}
        <textarea name="content" placeholder="Take a note..." rows={isExpanded ? "3" : "1"} value={note.content} onChange={handleContentChange} onClick={expand} />
        <Zoom in={isExpanded} >
          <Fab
            type="reset"
            onClick={() => {
              props.onAdd(note);
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;