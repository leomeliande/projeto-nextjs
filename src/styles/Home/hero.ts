import styled from 'styled-components'

export const Hero = styled.div`
    height: 90vh;
    padding: 0 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* background-image: url('/hero.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat; */
    text-align: center;
    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.3);

    @media screen and (max-width: 800px) {
        padding: 0 50px;
    }

    /* & > div > div {
        position: relative !important;
    } */

    .hero {
        object-fit: cover;
        width: 100%;
        height: 100%;
        position: fixed !important;
        z-index: -1;
    }

    .btns-hero {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        margin-top: 100px;

        button {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 15px;
            padding: 20px;
            box-shadow: none;
            cursor: pointer;
            transition: all 0.2s ease;
            color: white;
            border-width: 1px;
            border-color: white;
            border-radius: 100px;
            flex: 1 0 auto;
            max-width: 210px;

            &:nth-of-type(1) {
                background: transparent;

                &:hover {
                    background: white;
                    color: ${props => props.theme.colors.background};
                }
            }

            &:nth-of-type(2) {
                background: white;
                color: black;
            }

            svg {
                margin: 0 5px;
            }
        }
    }

    h1 {
        font-size: 15rem;
        margin-top: 40px;
        font-family: 'Times New Roman', Times, serif;

        @media screen and (max-width: 800px) {
            font-size: 10rem;
        }

        @media screen and (max-width: 600px) {
            font-size: 5rem;
        }
    }

    p {
        margin-top: 24px;
        font-size: 3rem;
        line-height: 32px;

        @media screen and (max-width: 800px) {
            font-size: 2rem;
        }

        @media screen and (max-width: 600px) {
            font-size: 1.3rem;
        }
    }
`
