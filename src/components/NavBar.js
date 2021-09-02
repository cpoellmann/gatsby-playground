import { Link } from 'gatsby'
import React from 'react'

export default function NavBar() {
    return (
        <nav>
            <h1>Testpage</h1>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/news">News</Link>
        </nav>
    )
}
