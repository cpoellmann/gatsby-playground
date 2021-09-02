import React from 'react'
import NavBar from './NavBar'
import '../styles/global.css'

export default function Layout({ children }) {
    return (
        <div>
            <NavBar />
            <div>
                {children}
            </div>
            <footer>
                <p>Copyrights!</p>
            </footer>
        </div>
    )
}