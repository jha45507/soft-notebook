import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Loging = () => {

    const [cridential, setCridential] = useState({ lemail: "", lpassword: "" })
    let history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("https://rahulnote.herokuapp.com/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: cridential.lemail, password: cridential.lpassword })
        });
        const json = await response.json()
        if (json.authtoken) {
            localStorage.setItem("token", json.authtoken);
            toast.success("you are logedin");
            setTimeout(() => {
                history('/home')
            }, 2000);
        }
        else{
            alert("invalid credential")
        }
    }

    const onChange = (e) => {
        setCridential({ ...cridential, [e.target.name]: e.target.value })
    }

    return (
        <>
        <ToastContainer />
            <h1 className='text-center my-3'>Welcome to Softnotes App </h1>
            <p className='text-center fs-5 fw-bold'>Please Login to continue to i-Notebiok App !</p>
            <div className='d-flex justify-content-center my-4 container'>
                <div className='py-4 px-5 bg-secondary rounded-2'>
                    <form onSubmit={handleSubmit}>
                        <div className="col-auto">
                            <label htmlFor="lemail" className="text-light fw-bold fs-5">E-mail</label>
                            <input type="email" className="form-control mb-3" id="lemail" name='lemail' placeholder="Input your email" onChange={onChange} value={cridential.lemail} />
                        </div>
                        <div className="col-auto">
                            <label htmlFor="lpassword" className="mt-1 text-light fw-bold fs-5">Password</label>
                            <input type="password" className="form-control mb-3" id="lpassword" name="lpassword" placeholder="Input your Password" onChange={onChange} value={cridential.lpassword} />
                        </div>
                        <button type="submit" className="btn btn-outline-primary mx-1">Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Loging;
