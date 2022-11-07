/* eslint-disable no-restricted-globals */
import React from "react";
import { useState } from "react";
import NoteContext from "./noteContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const NoteState = (props) => {
    const host = "https://rahulnote.herokuapp.com"
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial);
    //Get All Note
    const getNote = async () => {
        //API Call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        });
        const json = await response.json()
        setNotes(json)
    }
    //Add Note
    const addNote = async (title, description, tag) => {
        //TODO: API Call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag })
        })
        const note = await response.json()
        setNotes(notes.concat(note));
    }
    //deleteNote
    const deleteNote = async (id) => {
        if (confirm("Do You Wan't To Delete This Note")) {
            const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('token')
                },
            });
            // eslint-disable-next-line
            const json = response.json()
            const newNotes = notes.filter((note) => { return note._id !== id })
            setNotes(newNotes)
            toast.success("note deleted");
        }
    }
    //editNote
    const editNote = async (id, title, description, tag) => {
        //API call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag })
        });
        // eslint-disable-next-line
        const json = await response.json()

        let newNotes = JSON.parse(JSON.stringify(notes))
        //logic to edit in clint
        for (let i = 0; i < notes.length; i++) {
            const element = notes[i];
            if (element._id === id) {
                newNotes[i].title = title;
                newNotes[i].description = description;
                newNotes[i].tag = tag;
                break;
            }
        }
        setNotes(newNotes);
        toast.success("update note");
    }
    return (
        <>
        <ToastContainer/>
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNote }}>
            {props.children}
        </NoteContext.Provider>
        </>
    )
}
export default NoteState;