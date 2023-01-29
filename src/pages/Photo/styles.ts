import styled from 'styled-components';
export const Container = styled.div`
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
        font-size: 1.6rem;
    }

    img {
        margin-top: 1rem;
        border: .3rem solid #000;
        padding: .5rem;
    }

    @media (max-width: 450px){
        img {
            width: 30rem;
        }
    }
`;