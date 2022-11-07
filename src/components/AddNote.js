import React from 'react'
import { useContext } from 'react';
import noteContext from '../context/notes/noteContext';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddNote = () => {
    const context = useContext(noteContext);
    const { addNote } = context;
    const [note, setNote] = useState({ title: "", description: "", tag: "" })
    const handleClick = (e) => {
        e.preventDefault()
        addNote(note.title, note.description, note.tag);
        setNote({ title: "", description: "", tag: "" })
        toast.success("note added");
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <>
        <ToastContainer />
            <h1 className='text-center mt-5 container'>keep and save your notes hare! <hr /></h1>
            <div className="container-sm my-5 border pt-4 pb-2 bg-secondary rounded-3">
                <label htmlFor="title" className='fs-5 fw-bold text-light'>Your Title</label>
                <input className="form-control form-control-lg my-3" type="text" id='title' value={note.title} name='title' placeholder="Input your title" aria-label=".form-control-lg example" onChange={onChange} />
                <label htmlFor="description" className='fs-5 fw-bold text-light'>Your Description</label>
                <input className="form-control my-3" type="text" id='description' value={note.description} name='description' placeholder="Input your description" aria-label="default input example" onChange={onChange} />
                <label htmlFor="tag" className='fs-5 fw-bold text-light'>Your Tag</label>
                <input className="form-control form-control-sm my-3" type="text" id='tag' value={note.tag} name='tag' placeholder="Input your tag" aria-label=".form-control-sm example" onChange={onChange} />
                <button disabled={note.title.length < 5 || note.description.length < 5} type="button" className="btn btn-outline-info my-2" onClick={handleClick}>Add Note</button>
            </div>
        </>
    )
}

export default AddNote