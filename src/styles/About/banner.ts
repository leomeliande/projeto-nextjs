import styled from 'styled-components'

export const Banner = styled.div`
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-image: url('/hero.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    text-align: center;
    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.3);

    h1 {
        font-family: 'Times New Roman', Times, serif;
        font-size: 15rem;

        @media screen and (max-width: 800px) {
            font-size: 10rem;
        }
    }
`
