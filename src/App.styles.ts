import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Header = styled.header`
    position: fixed;
    left: 0;
    right: 0;
    height: 5rem;
    border-bottom: 2px solid #000;
    background-color: #FFF;
    display: flex;
    justify-content: space-between;
    padding-right: 2rem;

    button {
        border: 0;
        background-color: #FFF;
    }
`;

export const Main = styled.main`
    margin-top: 5rem;
`;

export const Footer = styled.footer`
    background-color: #000;
    padding: 2rem;
    color: #FFF;
    text-align: center;
`;

export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    height: 100%;
    padding: 1rem;
    box-sizing: border-box;

    img {
        object-fit: contain;
    }
`;
