import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { Container } from "@chakra-ui/react"

export default function Layout({ children }) {
    return (
        <div >
            <NavBar />
            <Container maxW="container.xl">
                {children}
            </Container>

            <Footer />
        </div>
    )
}