import styled from 'styled-components';

export const Container = styled.div`
    padding: 2rem;

    h2 {
        font-size: 3rem;

    }
`;

export const PhotosGallery = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: .5rem;

    @media (max-width: 770px){
        grid-template-columns: repeat(5, 1fr);
    }

    @media (max-width: 450px){
        grid-template-columns: repeat(2, 1fr);
    }
`;