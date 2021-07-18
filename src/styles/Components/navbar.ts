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

    @media screen and (max-width: 800px) {
        padding: 0 50px;
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

    .navbar-links {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: nowrap;
        //width: 600px;

        ul {
            list-style: none;

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
`
