import React from 'react';
import DeleteOutLineIcon from '@material-ui/icons/DeleteOutline';

const Note = (props) => {

 

    return (
    <>
        <div className='note'>
            <h1>{props.title}</h1>
            <br />
            <p>{props.content}</p>
            <button className="btn"  onClick = {() => {
                props.onSelect(props.id)
            }}> 
            <DeleteOutLineIcon className='deleteIcon' />
            </button>
        </div> 
    </>
    )
}

export default Note;
