import React, { useEffect, useState } from 'react'
import { AppProps } from 'next/app'
import GlobalStyle from '../styles/global'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import LayoutComponent from '../components/layout'
import { IoIosArrowUp } from 'react-icons/io'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    const [scrolled, setScrolled] = useState(false)

    const handleScroll = () => {
        const offset = window.scrollY

        if (offset > 200) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <LayoutComponent>
                <Component {...pageProps} />
                <GlobalStyle />
            </LayoutComponent>
            <IoIosArrowUp
                className="back-to-top"
                onClick={scrollTop}
                style={{ display: scrolled ? 'flex' : 'none' }}
            />
        </ThemeProvider>
    )
}

export default MyApp
