import styled from 'styled-components';
import BGImage from './assets/images/image_home.jpg';

export const Container = styled.div`
    display: flex;
`;

export const Home = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100vh - 40px);
    width: 100vw;
    padding: 20px 25px;
    background-color: #0C5C31;
        &:before {
            content: "";
            background-image: url(${BGImage});
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            position: absolute;
            top: 0px;
            right: 0px;
            bottom: 0px;
            left: 0px;
            opacity: 0.3;
        }
`;

export const NavBar = styled.nav`
    display: flex;
    height: 50px;
    width: calc(100vw - 50px);
    justify-content: space-between;
    align-items: center;
    position: relative;
`;

export const IconLogo = styled.div`

`;

export const IconMenu = styled.div`

`;

export const Image = styled.img`
    width: 100%;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 60vh;
    position: relative;
`;

export const HomeHeader = styled.div`
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 1.5px;
    color: #FFF;
    margin: 0 20px;
`;

export const HomeText = styled.div`
    font-size: 1rem;
    font-weight: 400;
    color: #FFF;
    margin: 0 20px;
`;

export const Button1 = styled.div`
    background-color: #FFF;
    border-radius: 50px;
    padding: 16px 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #424242;
    font-weight: 700;
    font-size: 1rem;
`;

export const IconArrow = styled.div`
    width: 50px;
    margin: 0 auto;
    position: relative;
    filter: drop-shadow(0 0 2px #FFF);
`;