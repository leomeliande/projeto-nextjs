import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { Hero } from '../styles/Home/hero'
import { Cards } from '../styles/Home/cards'

import { ImPlay2 } from 'react-icons/im'

const Home: React.FC = () => {
    return (
        <>
            <Head>
                <title>BEATful - join the music revolution</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
            </Head>

            <Hero>
                <main>
                    <h1>BEATful</h1>
                    <p>come join us in the music revolution.</p>
                    <div className="btns-hero">
                        <Link href="/about">
                            <button>GET STARTED</button>
                        </Link>
                        <Link href="/about">
                            <button>
                                WATCH TRAILER <ImPlay2 />
                            </button>
                        </Link>
                    </div>
                </main>
            </Hero>

            <Cards>
                <div className="content">
                    <div className="image">
                        <Image
                            src="/austin-neill-hgO1wFPXl3I-unsplash.jpg"
                            alt="Picture of a live concert"
                            width={1300}
                            height={800}
                        />
                    </div>

                    <div className="content-description">
                        <h1>Lorem ipsum dolor sit.</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Consectetur magnam eos minima esse corrupti
                            repellendus velit. Sunt iste inventore assumenda!
                            Exercitationem tenetur aut deleniti neque quo
                            laboriosam explicabo mollitia quas!
                        </p>
                    </div>
                </div>

                <div className="content">
                    <div className="content-description">
                        <h1>Lorem ipsum dolor sit.</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Consectetur magnam eos minima esse corrupti
                            repellendus velit. Sunt iste inventore assumenda!
                            Exercitationem tenetur aut deleniti neque quo
                            laboriosam explicabo mollitia quas!
                        </p>
                    </div>
                    <div className="image">
                        <Image
                            src="/james-stamler-k3heD_KwH0A-unsplash.jpg"
                            alt="Picture of studio equipment; keyboard and headphone"
                            width={1300}
                            height={800}
                            className="image"
                        />
                    </div>
                </div>
            </Cards>
        </>
    )
}

export default Home
