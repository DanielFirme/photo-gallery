import styled from 'styled-components';

export const Container = styled.div`
    border: .25rem solid #000;
    padding: 1rem;
    &:hover {
        background-color: #eaeaea;
    }

    a {
        display: flex;
        font-size: 1.4rem;
        text-decoration: none;
        color: #000;
        width: 100%;
    }
`;