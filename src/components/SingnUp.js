import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingnUp = () => {
    const [cridential, setCridential] = useState({ name: "", email: "", password: "", cpassword: "" })
    let history = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password } = cridential
        const response = await fetch("https://rahulnote.herokuapp.com/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password })
        });
        const json = await response.json()
        
        if (json.authtoken) {
            localStorage.setItem("token", json.authtoken);
            toast.success("you are signup")
            setTimeout(() => {
                history('/home')
            }, 2000);
        }

        else{
            return alert("invalid credential")
        }
    }
    const onchange = (e) => {
        setCridential({ ...cridential, [e.target.name]: e.target.value })
    }
    return (
        <>
        <ToastContainer />
            <h1 className='text-center my-3'>Welcome to Softnotes App</h1>
            <p className='text-center fw-bold fs-5'>Please SignUp to use to i-Notebiok App !</p>
            <div className='d-flex justify-content-center my-4 container'>
                <div className='py-4 px-5 bg-secondary rounded-2'>
                    <form onSubmit={handleSubmit}>
                        <div className="col-auto">
                            <label htmlFor="name" className="text-light fw-bold fs-5">Username</label>
                            <input type="text" className="form-control mb-2" id="name" name='name' value={cridential.name} placeholder="Input your username" onChange={onchange} />
                        </div>
                        <div className="col-auto">
                            <label htmlFor="email" className="text-light fw-bold fs-5">E-mail</label>
                            <input type="email" className="form-control mb-2" id="email" name='email' value={cridential.email} placeholder="Input your email" onChange={onchange} />
                        </div>
                        <div className="col-auto">
                            <label htmlFor="password" className="text-light fw-bold fs-5">Password</label>
                            <input type="password" className="form-control mb-2" id="password" name='password' value={cridential.password} placeholder="Input your Password" onChange={onchange} minLength={5} required />
                        </div>
                        <div className="col-auto">
                            <label htmlFor="cpassword" className="text-light fw-bold fs-5">Confirm Password</label>
                            <input type="password" className="form-control mb-3" id="cpassword" name='cpassword' placeholder="Input Confirm Password" onChange={onchange} minLength={5} required />
                        </div>
                        <button type="submit" className="btn btn-outline-info mx-1">SignUp</button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default SingnUp