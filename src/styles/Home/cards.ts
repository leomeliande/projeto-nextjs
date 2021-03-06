import styled from 'styled-components'

export const Cards = styled.div`
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    background: ${props => props.theme.colors.text};
    padding: 0 200px;

    @media screen and (max-width: 800px) {
        padding: 0 50px;
    }

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

    .content:nth-of-type(odd) {
        &::before {
            content: '';
            position: absolute;
            top: 30px;
            bottom: 0;
            left: 50px;
            right: 0;
            width: 100%;
            height: 100%;
            border: 1px solid ${props => props.theme.palette.downriver};
            box-shadow: 0 6px 20px rgb(56 125 255 / 17%);
            filter: drop-shadow(
                0 6px 20px ${props => props.theme.palette.downriver}
            );
        }
    }

    .content {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        margin: 100px auto;
        position: relative;

        &::before {
            content: '';
            position: absolute;
            top: 30px;
            bottom: 0;
            left: -50px;
            right: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
            border: 1px solid ${props => props.theme.palette.eastside};
            box-shadow: 0 6px 20px rgb(56 125 255 / 17%);
            filter: drop-shadow(
                0 6px 20px ${props => props.theme.palette.eastside}
            );
        }

        .image {
            display: inherit;
            position: relative;
            z-index: 1;
            box-shadow: 0 6px 20px rgb(56 125 255 / 17%);
            filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));

            img {
                transition: all 0.5s ease;
                object-fit: cover;
            }

            img:hover {
                transform: scale(1.1);
            }
        }

        &:nth-of-type(even) {
            flex-wrap: wrap-reverse;
        }

        & > div {
            flex: 1 0 auto;
            width: 50%;
            min-width: 350px;
            position: relative;

            @media screen and (max-width: 600px) {
                min-width: 250px;
            }
        }

        &-description {
            display: inherit;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: flex-start;
            text-align: start;

            @media screen and (max-width: 1099px) {
                align-items: center !important;
                text-align: center !important;
            }

            &:nth-of-type(n + 2) {
                align-items: flex-end;
                text-align: end;
            }

            h1 {
                font-size: 4rem;
                margin-top: 40px;
                color: ${props => props.theme.palette.downriver};
                width: 80%;

                @media screen and (min-width: 1100px) {
                    margin-top: 0;
                }
            }

            p {
                font-size: 1.4rem;
                line-height: 22px;
                color: ${props => props.theme.colors.alttext};
                width: 80%;
            }
        }
    }
`
