import styled from 'styled-components'

export const Hero = styled.div`
    //width: 100vw;
    height: 90vh;
    padding: 0 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-image: url('/hero.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    text-align: center;
    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.3);

    .btns-hero {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 100px;

        button {
            display: flex;
            align-items: center;
            margin: 0 15px;
            padding: 20px;
            box-shadow: none;
            cursor: pointer;
            transition: all 0.2s ease;
            //background: ${props => props.theme.colors.background};
            color: white;
            border-width: 1px;
            border-color: white;
            border-radius: 100px;

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
    }

    p {
        margin-top: 24px;
        font-size: 3rem;
        line-height: 32px;
    }
`
