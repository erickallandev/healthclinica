import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    max-width: 100vw;
`;

export const Home = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    background-color: #0C5C31;
`;

export const NavBar = styled.nav`
    display: flex;
    height: 50px;
    width: calc(100vw - 50px);
    justify-content: space-between;
    align-items: center;
    position: absolute;
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
    align-items: center;
    position: relative;
    margin-top: 150px;
    flex:1;
    margin-bottom: 50px;
`;

export const HomeHeader = styled.div`
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 1.5px;
    color: #FFF;
    margin: 0 10%;
    width: 80%;
`;

export const ImageHome = styled.img`
    height: 100vh;
    max-width: 100%;
    object-fit: cover;
    position: absolute;
    opacity: 0.3;
`;

export const HomeText = styled.div`
    font-size: 1.2rem;
    font-weight: 400;
    color: #FFF;
    margin: 0 10%;
    width: 80%;
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
    margin-bottom: 30px;
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



/* Convênios */

export const ConvTitle = styled.div`
    text-align: center;
    color: #424242;
    font-size: 1.5rem;
    font-weight: 500;
`;

export const ConvSubtitle = styled.div`
    text-align: center;
    color: #424242;
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 50px;
`;

export const Convenios = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 80px;
`;

export const ListaConvenios = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;

export const Convenio = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
    background-color: #0C5C31;
    width: 300px;
    height: 190px;
    border-radius: 30px 30px 30px 0;
    margin-bottom: 30px;
`;

export const BGPhotoConvenio = styled.div`
    background-color: #FFF;
    width: 180px;
    height: 120px;
    border-radius: 30px 30px 30px 0;
    border: 5px solid #fff;
    display: flex;
    align-items: center;
    align-items: center;
`;

export const BGPhotoConvenioAllianz = styled.div`
    background-color: #FFF;
    width: 180px;
    height: 120px;
    border-radius: 30px 30px 30px 0;
    border: 5px solid #FFFFFF;
    background-color: #002F87;
    display: flex;
    align-items: center;
    align-items: center;
`;

export const PhotoConvenio = styled.img`
    max-height: 120px;
    max-width: 160px;
    margin: 0 auto;
    background-color: #FFF;
`;

export const PhotoConvenioUnimed = styled.img`
    width: 170px;
    margin: 0 auto;
`;

export const TitleConvenio = styled.div`
    font-size: 1.2rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 5px;
    position: relative;
    margin-top: 10px;
    margin-bottom: 10px;
`;


/* Fale conosco */

export const FaleConosco = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #0C5C31;
    padding: 60px;
`;

export const FaleTitle = styled.div`
    text-align: center;
    color: #FFF;
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 20px;
`;

export const FaleSubtitle = styled.div`
    text-align: center;
    color: #FFF;
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 60px;
`;

export const InfosContato = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    color: #fff;
`;

export const InfoContato = styled.div`
    font-size: 1rem;
    margin-bottom: 40px;
`;

export const InfoTitle = styled.div`
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: 10px;
`;

export const Infos = styled.div`

`;

export const Mapa = styled.div`
    width: 100%;
    height: 250px;
    background-color: #FFF;
    border-radius: 30px 30px 30px 0;
    margin-top: 20px;
`;



/* Sessão de agendamento */

export const Agendamento = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #FFF;
    color: #424242;
    padding: 40px;
`;

export const AgendaTitle = styled.div`
    text-align: center;
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 20px;
`;

export const AgendaSubtitle = styled.div`
    text-align: center;
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 20px;
`;

export const Button3 = styled.div`
    background-color: #0C5C31;
    color: #fff;
    border-radius: 50px;
    padding: 16px 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 1rem;
    margin-top: 20px;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4);
`;



/* Footer */

export const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #0C5C31;
    color: #FFF;
    width: 100%;
`;

export const FooterInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 50px 40px;
`;

export const FooterInfo1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
`;

export const Info1Text = styled.div`
    margin-top: 20px;
`;

export const FooterInfo2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
`;

export const Info2Header = styled.div`
    font-size: 1.1rem;
    font-weight: 500;
`;

export const Info2Text = styled.div`

`;

export const FooterInfo3 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const Info3Header = styled.div`
    margin-bottom: 20px;
    font-size: 1.1rem;
    font-weight: 500;
`;

export const Info3Icons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
`;

export const IconMedia = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
`;

export const hr = styled.hr`
    margin: 0;
    width: 100%;
    background-color: #0C5C31;
    opacity: 0.3;
`;

export const hr2 = styled.hr`
    margin: 0;
    width: 100%;
    background-color: #0C5C31;
    opacity: 0.3;
    margin: 50px 0;
`;

export const FooterRef = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 0.9rem;
    margin: 50px auto;
`;