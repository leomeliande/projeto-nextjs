import styled from 'styled-components'

export const Cards = styled.div`
    //width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* background-image: url('/hero.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat; */
    text-align: center;
    background: #e1e1e6;
    //box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.3);
    //position: relative;

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
        margin-top: 40px;
    }
    p {
        margin-top: 24px;
        font-size: 3rem;
        line-height: 32px;
    }
`
