/* eslint-disable react/no-unescaped-entities */

// import Link from 'next/link'
import React from 'react'
import { Banner } from '../styles/About/banner'
import { Content } from '../styles/content'

const About: React.FC = () => {
    return (
        <>
            <Banner>
                <h1>About</h1>
            </Banner>
            <Content>
                <div className="wrapper">
                    <h1>I'm a passionate dev.</h1>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Ad magnam ab provident perspiciatis optio dolores
                        odit voluptatem explicabo pariatur dolor distinctio,
                        facilis totam itaque veniam rem maiores voluptate eius
                        ullam!
                    </p>
                </div>
            </Content>
        </>
    )
}

export default About
