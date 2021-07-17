import styled from 'styled-components'

export const Hero = styled.div`
    //width: 100vw;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-image: url('/hero.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    text-align: center;

    .btns-hero {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 100px;

        button {
            padding: 20px;
            box-shadow: none;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            transition: all 0.2s ease;
            background: transparent;
            color: white;
            border: 1px solid white;
            margin: 0 20px;

            &:hover {
                background: white;
                color: black;
            }
        }
    }

    h1 {
        font-size: 15rem;
        color: ${props => props.theme.colors.primary};
        margin-top: 40px;
        text-shadow: 0px 2px 16px black;
    }
    p {
        margin-top: 24px;
        font-size: 3rem;
        line-height: 32px;
    }
`
