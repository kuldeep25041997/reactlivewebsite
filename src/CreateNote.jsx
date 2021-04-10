import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

const CreateNote = (props) => {

    const [note, setnote] = useState({
        title: "",
        content: "",
    });
    const [expand, setexpand] = useState(false);

    const expandIt = () => {
        setexpand(true); 
    }

    const backtoNormal = () => {
        setexpand(false);
    }


    const InputEvent = (event) => {
        const {value,name} = event.target;

    
        setnote((prevData) => {
            return {
                ...prevData,
                [name] : value,
            }
        })
        

    }
    const addEvent = () => {
        props.passNote(note);

    }
    return (
        <>
        <div className='main_note'>
            <form>
               { expand ? 
                <input type="text" 
                    placeholder="title"
                    name="title"
                    value={note.title}
                    onChange={InputEvent}
                    
                    /> : null }
                    <textarea rows="" column="" 
                    name="content"
                    value={note.content} placeholder="Write a note"
                    onChange={InputEvent}
                    onClick={expandIt}
                    onDoubleClick={backtoNormal}
                    >{note}</textarea>

                    {expand ?
                    <Button onClick={addEvent}>
                        <AddIcon className="plus_sign" />
                    </Button> : null }
                    
            </form>
        </div>

        </>
    )

}

export default CreateNote;