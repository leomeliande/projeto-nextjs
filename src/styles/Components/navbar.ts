import styled from 'styled-components'

export const Navbar = styled.div`
    //width: 100vw;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    background-color: #000;

    .wrapper {
        padding: 0 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        ul {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 400px;
            list-style: none;

            a {
                color: white;
                font-size: 1rem;
                cursor: pointer;
                text-decoration: none;
                transition: all 0.2s ease;

                &:hover {
                    color: #f898c8;
                }
            }

            button {
                padding: 20px;
                box-shadow: none;
                border: none;
                border-radius: 10px;
                cursor: pointer;
                transition: all 0.2s ease;
                background: #000;
                color: white;
                border: 1px solid white;

                &:hover {
                    background: white;
                    color: black;
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
