import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const Navbar = () => {
    const history = useNavigate()
    const logout_btn = () => {
        localStorage.removeItem('token')
        toast.success("you are logout");
        setTimeout(() => {
            history('/login')
        }, 2000);
    }
    return (
        <>
        < ToastContainer />
            <nav className="navbar navbar-expand-lg bg-secondary sticky-top">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-lg-0">
                            {!localStorage.getItem('token') ? <form className='d-flex'>
                                <Link className="mx-3 nav-link fw-bold text-light" to="/signup">SignUp</Link>
                                <Link className="mx-3 nav-link fw-bold text-light" to="/login" >Login</Link>
                            </form> : <button className="btn btn-outline-success bg-light text-dark mx-2" type="button" onClick={logout_btn}>LogOut</button>}
                            <Link className="nav-link fw-bold mx-3 text-light" to="/home">Home</Link>

                            <Link className="nav-link fw-bold mx-3 text-light" to="/about">About</Link>
                        </ul>
                        <form className="d-flex mx-2" role="search">
                            <input className="form-control me-2 mx-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success bg-light text-dark mx-2" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar;