import styled from 'styled-components';
import BGImage from './assets/images/image_home.jpg';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Home = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    width: 100vw;
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
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
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
    height: 80%;
    position: relative;
`;

export const HomeHeader = styled.div`
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 1.5px;
    color: #FFF;
    margin: 0 40px;
`;

export const HomeText = styled.div`
    font-size: 1rem;
    font-weight: 400;
    color: #FFF;
    margin: 0 40px;
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
    margin: 0 30px;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4);
`;

export const IconArrow = styled.div`
    width: 50px;
    margin: 0 auto;
    margin-bottom: 60px;
    position: relative;
    filter: drop-shadow(0 0 2px #FFF);
`;


/* Estilizações da área de agenda */

export const Schedule = styled.div`
    background-color: #FFF;
    display: flex;
    flex-direction: column;
    width: 100%;
    color: #FFF;
    margin-bottom: 60px;
`;

export const ScheduleSquare = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 200px;
    background-color: #000;
    margin: 0 40px;
    margin-top: 50px;
    border-radius: 10px;
    object-fit: cover;
`;

export const ImageAgenda = styled.img`
    width: 80%;
    object-fit: cover;
    max-height: 200px;
    opacity: 0.5;
    position: absolute;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    `;

export const ScheduleHeader = styled.div`
    font-weight: 700;
    font-size: 1.2rem;
    margin-top: 10%;
    position: relative;
`;

export const ScheduleTopics = styled.ul`
    list-style-type: none;
    padding: 0;
    text-align: center;
    font-size: 0.8rem;
    position: relative;
`;

export const Button2 = styled.div`
    background-color: #FFF;
    border-radius: 50px;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #424242;
    font-weight: 700;
    font-size: 0.8rem;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4);
    position: relative;
`;



/* Estilização das especialidades */

export const Especialidades = styled.div`
    margin: 20px;
    width: 100vw;
    margin-bottom: 60px;
`;

export const EspBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const EspHeader = styled.div`
    text-align: center;
    color: #424242;
    font-size: 1.5rem;
    font-weight: 500;
`;

export const EspSub = styled.div`
    text-align: center;
    color: #424242;
    font-size: 1rem;
    font-weight: 400;
`;

export const ListaEspecialidades = styled.div`
    display: flex;
`;

export const EspContent = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Espec = styled.div`
    border: 1px solid #424242;;
    border-radius: 30px 30px 30px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    padding: 6px 12px;
    margin-bottom: 10px;
    margin: 2px 5px;
`;

export const EspImage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    margin: 30px 0;
`;