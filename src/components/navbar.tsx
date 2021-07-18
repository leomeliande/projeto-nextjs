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
    const [darkbg, showDarkbg] = React.useState(false)

    const closeMobileMenu = () => setClick(false)

    const handleClick = () => {
        if (menu === states.open) {
            setMenu(states.close)
            showDarkbg(true)
            document.body.classList.add('suppress-scroll')
        } else {
            setMenu(states.open)
            showDarkbg(false)
            document.body.classList.remove('suppress-scroll')
        }
        setClick(!click)
    }

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
                        <h4>aura</h4>
                    </Link>
                    <SiAudiomack />
                </div>
                <div
                    className="menu-icon"
                    onClick={() => {
                        handleClick()
                    }}
                >
                    {menu}
                </div>

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
                    {/* <li className="separator" role="separator"></li> */}
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
                </ul>
                <div
                    className={
                        darkbg ? 'background-dark' : 'background-dark hidden'
                    }
                />
            </Navbar>
        </>
    )
}

export default NavbarComponent
