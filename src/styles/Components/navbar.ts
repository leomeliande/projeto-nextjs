import styled from 'styled-components'
import { Custom } from '../../components/navbar'

export const Navbar = styled.div<Custom>`
    position: fixed;
    padding: 0 200px;
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    background: ${({ scrolled }) => (scrolled ? '#0a0a0a' : 'transparent')};
    transition: all 0.5s ease;
    z-index: 9999999;

    .menu-icon {
        display: none;
        /* transition: all 0.5s ease; */

        svg {
            color: white;
            font-size: 1.5rem !important;
        }
    }

    .navbar-links {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: nowrap;
        //width: 600px;

        a {
            color: white;
            font-size: 1rem;
            cursor: pointer;
            text-decoration: none;
            transition: all 0.5s ease;
            margin: 0 5px;
            padding: 10px;

            &:hover {
                color: ${props => props.theme.palette.pastelmagenta};
            }
        }

        .button {
            padding: 20px;
            box-shadow: none;
            cursor: pointer;
            //transition: all 0.2s ease;
            //background: ${props => props.theme.colors.background};
            //color: white;
            color: ${({ scrolled }) => (scrolled ? '#0a0a0a' : '#fff')};
            background: ${({ scrolled }) => (scrolled ? '#fff' : '#0a0a0a')};
            /* border-width: 1px;
                border-color: ${({ scrolled }) =>
                scrolled ? '#fff' : '#0a0a0a'}; */
            border: 1px solid
                ${({ scrolled }) => (scrolled ? '#fff' : 'transparent')};
            border-radius: 100px;
            transition: all 0.5s ease;

            &:hover {
                color: ${({ scrolled }) => (scrolled ? '#fff' : '#0a0a0a')};
                background: ${({ scrolled }) =>
                    scrolled ? '#0a0a0a' : '#fff'};
            }
        }
    }

    .logo {
        display: flex;
        align-items: center;

        h4 {
            font-size: 2rem;
            cursor: pointer;
        }

        svg {
            font-size: 2rem;
            margin: 0 5px;
        }
    }

    h1 {
        font-size: 15rem;
        color: ${props => props.theme.colors.primary};
        margin-top: 40px;
        text-shadow: 0px 2px 16px #000;
    }

    p {
        margin-top: 24px;
        font-size: 3rem;
        line-height: 32px;
    }

    @media screen and (max-width: 960px) {
        padding: 0 50px;
    }

    @media screen and (max-width: 1099px) {
        .navbar-links {
            display: flex;
            flex-direction: column;
            width: 50%;
            height: 400px;
            position: absolute;
            top: 10vh;
            right: -100%;
            opacity: 0;
            transition: all 0.5s ease;
            justify-content: space-evenly;
            border-radius: ${({ scrolled }) =>
                scrolled ? '0px 0px 0px 20px' : '20px 0px 0px 20px'};

            a {
                color: white;
                font-size: 1rem;
                cursor: pointer;
                text-decoration: none;
                transition: all 0.5s ease;
                margin: 0 5px;
                padding: 10px;

                &:hover {
                    color: ${props => props.theme.palette.pastelmagenta};
                }
            }

            .button {
                padding: 20px;
                box-shadow: none;
                cursor: pointer;
                //transition: all 0.2s ease;
                //background: ${props => props.theme.colors.background};
                //color: white;
                color: ${({ scrolled }) => (scrolled ? '#0a0a0a' : '#fff')};
                background: ${({ scrolled }) =>
                    scrolled ? '#fff' : '#0a0a0a'};
                /* border-width: 1px;
                border-color: ${({ scrolled }) =>
                    scrolled ? '#fff' : '#0a0a0a'}; */
                border: 1px solid #fff;
                border-radius: 100px;
                transition: all 0.5s ease;

                &:hover {
                    color: ${({ scrolled }) => (scrolled ? '#fff' : '#0a0a0a')};
                    background: ${({ scrolled }) =>
                        scrolled ? '#0a0a0a' : '#fff'};
                }
            }
        }

        .navbar-links.active {
            background: ${props => props.theme.colors.background};
            right: 0;
            opacity: 1;
            transition: all 0.5s ease;
            z-index: 9999999;
        }

        .menu-icon {
            display: flex;
            //position: absolute;
            right: 40px;
            font-size: 1.8rem;
            cursor: pointer;
        }
    }

    .background-dark {
        display: block;
        z-index: -1;
        width: 100vw;
        height: ${({ scrolled }) => (scrolled ? '90vh' : '100vh')};
        position: fixed;
        top: ${({ scrolled }) => (scrolled ? '10vh' : '0')};
        left: 0;
        background: rgba(0, 0, 0, 0.75);
        transition: all 0.5s ease;

        &.hidden {
            display: none;
        }
    }

    /* @media screen and (max-width: 960px) {
    } */
`
