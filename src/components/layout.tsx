import React from 'react'
import NavbarComponent from './navbar'
import FooterComponent from './footer'
import { Layout } from '../styles/Components/layout'

const LayoutComponent: React.FC = ({ children }) => {
    return (
        <Layout>
            <NavbarComponent />
            {children}
            <FooterComponent />
        </Layout>
    )
}

export default LayoutComponent
