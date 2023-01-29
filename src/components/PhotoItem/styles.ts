import styled from 'styled-components';

export const PhotoWrapper = styled.div`
    display: inline-block;
    border: .25rem solid #000;
    padding: 1rem;
    &:hover {
        background-color: #eaeaea;
    }
`;

export const PhotoImage = styled.img`
    width: 100%;
    heigth: auto;
`;