import styled from 'styled-components'

export const Navbar = styled.div`
    //width: 100vw;
    position: fixed;
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    background-color: transparent;
    z-index: 9999999;

    .wrapper {
        padding: 0 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;

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
                    transition: all 0.2s ease;
                    margin: 0 15px;
                    padding: 20px;

                    &:hover {
                        color: #f898c8;
                    }
                }

                .button {
                    //padding: 20px;
                    box-shadow: none;
                    /* border: none;
                    border-radius: 10px; */
                    cursor: pointer;
                    transition: all 0.2s ease;
                    background: ${props => props.theme.colors.background};
                    color: white;
                    border-width: 1px;
                    border-color: transparent;
                    border-radius: 100px;

                    &:hover {
                        background: white;
                        color: ${props => props.theme.colors.background};
                    }
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
