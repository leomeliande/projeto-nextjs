import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Navbar } from '../styles/Components/navbar'
import { SiAudiomack } from 'react-icons/si'

export type Custom = {
    scrolled?: boolean
}

const NavbarComponent: React.FC = () => {
    const [scrolled, setScrolled] = useState(false)

    const handleScroll = () => {
        const offset = window.scrollY

        if (offset > 200) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <Navbar scrolled={scrolled}>
                <div className="logo">
                    <Link href="/">
                        <h4>audia</h4>
                    </Link>
                    <SiAudiomack />
                </div>
                <div className="navbar-links">
                    <ul>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                        <Link href="/services">
                            <a>Services</a>
                        </Link>
                        <Link href="/about">
                            <a>About</a>
                        </Link>
                        <Link href="/about">
                            <a className="button">Sign Up</a>
                        </Link>
                        <Link href="/about">
                            <a className="button">Download</a>
                        </Link>
                    </ul>
                </div>
            </Navbar>
        </>
    )
}

export default NavbarComponent
