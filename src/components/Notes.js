/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import NoteItem from './NoteItem';
import AddNote from './AddNote';
import noteContext from '../context/notes/noteContext';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
const Notes = () => {
    const history  = useNavigate()
    const context = useContext(noteContext);
    const { notes, getNote, editNote } = context;
    useEffect(() => {
        if (localStorage.getItem('token')) {
            getNote()
        } else {
            history('/login')
        }
        // eslint-disable-next-line
    }, [])

    const ref = useRef(null)
    const closeref = useRef(null)
    const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" })

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
    }

    const handleClick = () => {
        editNote(note.id, note.etitle, note.edescription, note.etag)
        closeref.current.click()
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <>
            <AddNote />
            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content bg-secondary">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5 text-light" id="exampleModalLabel">Edit Note</h1>
                        </div>
                        <div className="modal-body">
                            <input className="form-control form-control-lg my-2 text-secondary" type="text" name='etitle' value={note.etitle} placeholder="Change title" aria-label=".form-control-lg example" onChange={onChange} />
                            <input className="form-control my-2 text-secondary" type="text" name='edescription' value={note.edescription} placeholder="Change description" aria-label="default input example" onChange={onChange} />
                            <input className="form-control form-control-sm my-2 text-secondary" type="text" name='etag' value={note.etag} placeholder="Change tag" aria-label=".form-control-sm example" onChange={onChange} />
                        </div>
                        <div className="modal-footer">
                            <button ref={closeref} type="button" className="btn btn-outline-dark" data-bs-dismiss="modal">Close</button>
                            <button disabled={note.etitle.length < 5 || note.edescription.length < 5} onClick={handleClick} type="button" className="btn btn-outline-light">Update</button>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className='container mb-5'> <hr /> Your Notes <hr /></h1>
            <div className='container mb-5'>
                <div className='fw-bold fs-6 '>
                    {notes.length === 0 && "you have no note available and if you want to add note so Enable add note buttons title and description at least length of five cherecters." }
                </div>
                <div className='row'>
                    {notes.map((note) => {
                        return <NoteItem key={note._id} updateNote={updateNote} note={note} />
                    })}
                </div>

            </div>
        </>
    )
}

export default Notes