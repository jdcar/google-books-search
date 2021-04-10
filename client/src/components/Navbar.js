import React from 'react'
import { Link } from 'react-router-dom'
import Jumbo from './Jumbo'

const Navbar = () => {
    return (
        <div>
            <Link to="/" className="navbar-brand" href="#">Home</Link>
            <br></br>
            <Link to="/search" className="navbar-brand" href="#">Search</Link>
            <br></br>
            <Link to="/saved" className="navbar-brand" href="#">Saved</Link>

            <Jumbo />
        </div>
    )

}

export default Navbar