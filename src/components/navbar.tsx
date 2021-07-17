import Link from 'next/link'
import React from 'react'
import { Navbar } from '../styles/Components/navbar'

const NavbarComponent: React.FC = () => {
    return (
        <>
            <Navbar>
                <div className="wrapper">
                    <div className="logo">BEATful</div>
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
                            <button>Sign Up</button>
                        </Link>
                    </ul>
                </div>
            </Navbar>
        </>
    )
}

export default NavbarComponent
