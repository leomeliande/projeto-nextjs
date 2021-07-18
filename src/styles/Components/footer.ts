import styled from 'styled-components'

export const Footer = styled.div`
    width: 100%;
    height: auto;
    min-height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    background-color: ${props => props.theme.colors.background};
    position: relative;
    padding: 0 200px;

    @media screen and (max-width: 800px) {
        padding: 0 50px;
    }

    .logo {
        display: flex;
        align-items: center;

        svg {
            font-size: 10rem;
            margin: 0 5px;

            @media screen and (max-width: 800px) {
                font-size: 5rem;
            }

            @media screen and (max-width: 600px) {
                font-size: 3rem;
            }
        }
    }

    h1 {
        font-size: 10rem;

        @media screen and (max-width: 800px) {
            font-size: 5rem;
        }

        @media screen and (max-width: 600px) {
            font-size: 3rem;
        }

        //margin-top: 40px;
        //text-shadow: 0px 2px 16px #000;
    }
    p {
        margin-top: 24px;
        font-size: 3rem;
        line-height: 32px;

        @media screen and (max-width: 800px) {
            font-size: 2rem;
        }
    }
`
