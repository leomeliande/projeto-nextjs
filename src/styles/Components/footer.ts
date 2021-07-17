import styled from 'styled-components'

export const Footer = styled.div`
    //width: 100vw;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    //background-color: #000;
    position: relative;

    .wrapper {
        padding: 0 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    h1 {
        font-size: 10rem;

        //margin-top: 40px;
        //text-shadow: 0px 2px 16px #000;
    }
    p {
        margin-top: 24px;
        font-size: 3rem;
        line-height: 32px;
    }
`
