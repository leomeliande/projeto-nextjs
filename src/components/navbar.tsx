import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Navbar } from '../styles/Components/navbar'
import { SiAudiomack } from 'react-icons/si'
import { FaBars, FaTimes } from 'react-icons/fa'

export type Custom = {
    scrolled?: boolean
}

const NavbarComponent: React.FC = () => {
    const [states] = useState({
        open: <FaBars />,
        close: <FaTimes />
    })

    const [scrolled, setScrolled] = useState(false)
    const [click, setClick] = useState(false)
    const [menu, setMenu] = useState(states.open)
    // const [button, setButton] = useState(true)

    const closeMobileMenu = () => setClick(false)

    const handleClick = () => {
        if (menu === states.open) {
            setMenu(states.close)
        } else {
            setMenu(states.open)
        }
        setClick(!click)
    }

    /* const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    } */

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
                <div className="menu-icon" onClick={() => handleClick()}>
                    {menu}
                </div>
                {/* <div className="navbar-links"> */}
                {/* <ul>
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
                    </ul> */}
                <ul className={click ? 'navbar-links active' : 'navbar-links'}>
                    <Link href="/">
                        <a onClick={closeMobileMenu}>Home</a>
                    </Link>
                    <Link href="/services">
                        <a onClick={closeMobileMenu}>Services</a>
                    </Link>
                    <Link href="/about">
                        <a onClick={closeMobileMenu}>About</a>
                    </Link>
                    <Link href="/about">
                        <a className="button" onClick={closeMobileMenu}>
                            Sign Up
                        </a>
                    </Link>
                    <Link href="/about">
                        <a className="button" onClick={closeMobileMenu}>
                            Download
                        </a>
                    </Link>
                    {/* <li className="nav-item search">
                            <FaSearch />
                        </li> */}
                    {/* <button className="search-desktop" id="open_search">
                            <FaSearch />
                        </button> */}
                </ul>
                {/* </div> */}
            </Navbar>
        </>
    )
}

export default NavbarComponent
