import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        font-size: 1rem;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
        overflow-x: hidden;
    }

    .suppress-scroll {
        overflow: hidden;
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        
        100% {
            opacity: 0.5;
        }
    }

    .back-to-top {
        position: fixed;
        cursor: pointer;
        bottom: 15px;
        right: 15px;
        font-size: 25px;
        color: ${props => props.theme.colors.text};
        background: ${props => props.theme.colors.background};
        z-index: 4;
        width: 45px;
        text-align: center;
        height: 45px;
        line-height: 45px;
        border-radius: 50%;
        animation: fadeIn 0.3s;
        transition: all 0.4s;
        opacity: 0.5;
    }

    @media screen and (min-width: 1100px) {
        .back-to-top:hover {
            color: ${props => props.theme.colors.background};
            background: ${props => props.theme.palette.pastelmagenta};
        }
    }
    
`
