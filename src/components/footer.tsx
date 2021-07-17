// import Link from 'next/link'
import React from 'react'
import { Footer } from '../styles/Components/footer'
import { SiAudiomack } from 'react-icons/si'

const FooterComponent: React.FC = () => {
    return (
        <>
            <Footer>
                <div className="logo">
                    <h1>audia</h1>
                    <SiAudiomack />
                </div>
            </Footer>
        </>
    )
}

export default FooterComponent
