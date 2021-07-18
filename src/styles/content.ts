import styled from 'styled-components'

export const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    background-color: #fff;
    padding: 0 200px;

    @media screen and (max-width: 800px) {
        padding: 0 50px;
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
