import styled from 'styled-components';

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
    align-items: center;
    max-height: 100vh;
    height: 100vh;
    min-height: 100vh;
    width: 100vw;
    background-color: #0C5C31;
    object-fit: cover;
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
    height: 70%;
    position: relative;
    margin-bottom: 60px;
    margin-top: 40px;
`;

export const HomeHeader = styled.div`
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 1.5px;
    color: #FFF;
    margin: 0 40px;
`;

export const ImageHome = styled.img`
    height: 100%;
    max-width: 100%;
    object-fit: cover;
    position: absolute;
    opacity: 0.3;
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
`;

export const ImageAgenda = styled.img`
    width: 80%;
    object-fit: cover;
    object-position: center;
    max-height: 200px;
    opacity: 0.6;
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
    border: 1px solid #424242;
    border-radius: 30px 30px 30px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
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



/* Central de atendimento */

export const CentAtendimento = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #0C5C31;
    width: 100vw;
    padding: 40px 0;
`;

export const Icon1 = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`;

export const AtendHeader = styled.div`
    font-weight: 400;
    font-size: 1.2rem;
    color: #FFF;
    text-align: center;
    margin-bottom: 10px;
`;

export const AtendBody = styled.div`
    width: 80vw;
    font-size: 0.8rem;
    color: #fff;
    text-align: center;
`;


/* Sobre o corpo clínico */
 export const CorpoClinico = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    padding: 40px 0;
    margin-bottom: 80px;
 `;

export const CCTitle = styled.div`
    text-align: center;
    color: #424242;
    font-size: 1.5rem;
    font-weight: 500;
`;

export const CCSubtitle = styled.div`
    text-align: center;
    color: #424242;
    font-size: 1rem;
    font-weight: 400;
`;

export const Doctors = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
`;

export const Doctor = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    height: 320px;
    width: 300px;
    background-color: #000;
    margin: 0 40px;
    margin-top: 50px;
    border-radius: 10px;
`;

export const DoctorPhoto = styled.img`

    object-fit: cover;
    object-position: center;
    height: 320px;
    width: 300px;
    opacity: 0.5;
    position: absolute;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const DoctorName = styled.div`
    font-size: 1.2rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 5px;
    position: relative;
`;

export const DoctorSubtitle = styled.div`
    font-size: 1rem;
    color: #fff;
    margin-bottom: 30px;
    position: relative;
`;