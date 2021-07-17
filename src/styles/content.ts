import styled from 'styled-components'

export const Content = styled.div`
    //width: 100vw;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    background-color: #fff;

    .wrapper {
        padding: 0 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    h1 {
        font-size: 5rem;
        color: ${props => props.theme.colors.primary};
        margin-top: 40px;
    }
    p {
        margin: 100px 0;
        font-size: 3rem;
        line-height: 32px;
    }
`
