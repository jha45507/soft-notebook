import React from 'react'
import { useContext } from 'react';
import noteContext from '../context/notes/noteContext';
const NoteItem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context
    const { note, updateNote } = props;
    return (
        <>
            <div className='col-md-3 mb-5'>
                <div className="card">
                    <div className="card-body bg-secondary text-light rounded-1">
                        <h5 className="card-title"> {note.title}</h5>
                        <p className="card-text"> {note.description} </p>
                        <p className="card-text"> {note.tag} </p>
                        <i className="fa-solid fa-trash mx-5" onClick={() => { deleteNote(note._id) }}></i><i className="fa-sharp fa-solid fa-pen-to-square mx-5" onClick={() => { updateNote(note) }}></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NoteItem