import styled from 'styled-components'

export const Cards = styled.div`
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    background: #e1e1e6;
    padding: 0 100px;

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

    .content {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        margin: 100px auto;

        .image {
            display: inherit;
            position: relative;

            &::before {
                content: '';
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                width: 100%;
                height: 100%;
                transform: scale(1.1);
                border: 1px solid ${props => props.theme.palette.eastside};
            }
        }

        .image:nth-of-type(n + 2) {
            &::before {
                content: '';
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                width: 100%;
                height: 100%;
                transform: scale(1.1);
                border: 1px solid ${props => props.theme.palette.downriver};
            }
        }

        &:nth-of-type(n + 2) {
            flex-wrap: wrap-reverse;
        }

        & > div {
            flex: 1 0 auto;
            width: 50%;
            min-width: 350px;
            position: relative;

            /* .image {
                position: relative;

                &::before {
                    content: '';
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    background-color: red;
                }
            } */
        }

        &-description {
            display: inherit;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: flex-start;
            text-align: start;

            &:nth-of-type(n + 2) {
                align-items: flex-end;
                text-align: end;
            }

            h1 {
                font-size: 3rem;
                //margin-top: 40px;
                color: ${props => props.theme.palette.downriver};
            }

            p {
                margin-top: 24px;
                font-size: 1rem;
                line-height: 32px;
                color: ${props => props.theme.colors.alttext};
                width: 80%;
            }
        }
    }

    /* h1 {
        font-size: 15rem;
        margin-top: 40px;
    }
    p {
        margin-top: 24px;
        font-size: 3rem;
        line-height: 32px;
    } */
`
