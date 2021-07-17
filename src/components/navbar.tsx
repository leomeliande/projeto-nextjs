import Link from 'next/link'
import React from 'react'
import { Navbar } from '../styles/Components/navbar'
import { SiAudiomack } from 'react-icons/si'

const NavbarComponent: React.FC = () => {
    return (
        <>
            <Navbar>
                <div className="wrapper">
                    <div className="logo">
                        BEATful
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
                </div>
            </Navbar>
        </>
    )
}

export default NavbarComponent
