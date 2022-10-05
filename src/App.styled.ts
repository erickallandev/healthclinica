import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
`;

export const navbarDesktop = styled.nav`
    width: 100%;
    margin: 0 80px;
    background-color: #FFF;
    display: none;
    align-items: center;
    position: relative;
    flex-direction: column;
    color: #424242;
        @media (min-width: 1024px) {
            display: flex;
        }
`;

export const navBarDesktop1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 40px;
`;

export const navBarDesktop2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    width: 100%;
`;

export const navBarDesktop1a = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 5%;
`;

export const navBarDesktop1b = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const navBarDesktop1c = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 5%;

`;

export const LogoDesktop = styled.div`
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 5%;
`;

export const MenuOpcoes = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 5%;
`;

export const MenuOpcao = styled.div`
    margin: 10px;
`;

export const NavBar = styled.nav`
    display: flex;
    height: 50px;
    justify-content: space-between;
    align-items: center;
    position: relative;
    margin-top: 20px;
    margin-bottom: 0;
    width: 85%;
    position: relative;
    top: 0;
        @media (min-width: 1024px) {
                display: none;
            }
`;

export const IconNavbar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    margin: 0 5px;
`;

export const InfoText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const IconLogo = styled.div`

`;

export const IconMenu = styled.div`

`;

/* HOMEPAGE */

export const Home = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #0C5C31;
    height: 100vh;
    bottom: 10px;   
    justify-content: center;
    width: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: relative;
        @media (min-width: 1024px) {
            height: 100vh;
        }
`;

export const Image = styled.img`
    width: 100%;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    justify-content: space-evenly;
    margin-bottom: 50px;
    height: 100vh;
        @media (min-width: 1024px) {
            align-items: flex-start;
            width: calc(100% - 160px);
            justify-content: flex-end;
            margin-bottom: 80px;
        }
`;

export const HomeHeader = styled.div`
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 1.5px;
    color: #FFF;
    margin: 0 10%;
    width: 80%;
    @media (min-width: 1024px) {
        display: none;
    }
`;

export const HomeHeaderDesktop = styled.div`
    display: none;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 1.5px;
    color: #FFF;
    margin: 0 10%;
    width: 100%;
    font-size: 4rem;
    @media (min-width: 1024px) {
        display: flex;
        margin: 0;
        margin-bottom: 30px;
    }
`;

export const HomeText = styled.div`
    font-size: 1.1rem;
    font-weight: 400;
    color: #FFF;
    margin: 0 10%;
    width: 80%;
    @media (min-width: 1024px) {
        display: none;
    }
`;

export const ImageHome = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.3;
`;

export const Button1 = styled.div`
    background-color: #FFF;
    white-space: nowrap;
    border-radius: 50px;
    padding: 15px 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #424242;
    font-weight: 500;
    font-size: 1rem;
    margin: 0 30px;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4);
        @media (min-width: 1024px) {
            margin: 0;
            font-size: 1.2rem;
            padding: 19px 38px;
            font-weight: 600;
        }
`;

/* Estilizações da área de agenda */

export const Schedule = styled.div`
    background-color: #FFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    color: #FFF;
    margin: 60px auto;
        @media (min-width: 1024px) {
            flex-direction: row;
            justify-content: space-between;
            width: calc(100% - 160px);
            margin-top: 80px;
            margin-bottom: 100px;
        }
`;

export const ScheduleSquare = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 200px;
    background-color: #000;
    margin-top: 50px;
    border-radius: 10px;
    width: 100%;
    max-width: 400px;
        @media (min-width: 1024px) {
            width: 400px;
            min-height: 250px;
        }
`;

export const ImageAgenda = styled.img`
    width: 300px;
    height: 200px;
    object-fit: cover;
    object-position: center;
    max-height: 200px;
    opacity: 0.6;
    position: absolute;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    max-width: 400px;
    @media (min-width: 1024px) {
            width: 400px;
            min-height: 250px;
        }
    `;

export const ScheduleHeader = styled.div`
    font-weight: 700;
    font-size: 1rem;
    position: relative;
    text-transform: uppercase;
        @media (min-width: 1024px) {
            font-size: 1.2rem;
        }
`;

export const ScheduleTopics = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 5% 5%;
    text-align: center;
    font-size: 1rem;
    position: relative;
    @media (min-width: 1024px) {
            font-size: 1.2rem;
        }
`;

export const Button2 = styled.div`
    background-color: #FFF;
    border-radius: 50px;
    padding: 14px 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #424242;
    font-weight: 500;
    font-size: 0.9rem;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4);
    position: relative;
    white-space: nowrap;
    @media (min-width: 1024px) {
            font-size: 1rem;
        }
`;



/* Estilização das especialidades */

export const Especialidades = styled.div`
    margin: 20px;
    width: 100vw;
    margin-bottom: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const EspBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
        @media (min-width: 1024px) {
            flex-direction: row;
            width: calc(100% - 160px);
        }
`;

export const EspHeader = styled.div`
    text-align: center;
    color: #424242;
    font-size: 1.5rem;
    font-weight: 500;
    @media (min-width: 1024px) {
        font-size: 2.5rem;
        text-align: left;
        width: calc(100% - 100px);
        margin-left: 100px;
    }
`;

export const EspSub = styled.div`
    text-align: center;
    color: #424242;
    font-size: 1.2rem;
    font-weight: 400;
    @media (min-width: 1024px) {
        font-size: 2rem;
        text-align: left;
        width: calc(100% - 100px);
        margin-left: 100px;
        margin-bottom: 10px;
    }
`;

export const ListaEspecialidades = styled.div`
    display: flex;
        @media (min-width: 1024px) {
            flex: 1;
            justify-content: center;
            align-items: center;
        }
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
    font-size: 1.2rem;
    padding: 6px 12px;
    margin-bottom: 10px;
    margin: 2px 5px;
    white-space: nowrap;
    @media (min-width: 1024px) {
            padding: 10px 20px;
            border: 3px solid #424242;
        }
`;

export const EspImage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    margin: 30px 0;
        @media (min-width: 1024px) {
            min-width: 400px;
            width: 50%;
            margin-right: 50px;
        }
`;



/* Central de atendimento */

export const CentAtendimento = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #0C5C31;
    width: 100vw;
    padding: 80px 0;
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
    font-size: 1.5rem;
    color: #FFF;
    text-align: center;
    margin-bottom: 10px;
        @media (min-width: 1024px) {
            font-size: 2rem;
        }
`;

export const AtendBody = styled.div`
    width: 80vw;
    font-size: 1rem;
    color: #fff;
    text-align: center;
    @media (min-width: 1024px) {
            font-size: 1.5rem;
        }
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
    @media (min-width: 1024px) {
        font-size: 2.5rem;
        text-align: left;
        width: calc(100% - 100px);
        margin-left: 100px;
        }
`;

export const CCSubtitle = styled.div`
    text-align: center;
    color: #424242;
    font-size: 1.2rem;
    font-weight: 400;
    @media (min-width: 1024px) {
        font-size: 2rem;
        text-align: left;
        width: calc(100% - 100px);
        margin-left: 100px;
        margin-bottom: 10px;
        }
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
    height: 300px;
    width: 250px;
    background-color: #000;
    margin: 0 40px;
    margin-top: 50px;
    border-radius: 10px;
`;

export const DoctorPhoto = styled.img`

    object-fit: cover;
    object-position: center;
    height: 300px;
    width: 250px;
    opacity: 0.5;
    position: absolute;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const DoctorName = styled.div`
    font-size: 1.1rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 5px;
    position: relative;
`;

export const DoctorSubtitle = styled.div`
    font-size: 1.1rem;
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
    @media (min-width: 1024px) {
        font-size: 2.5rem;
        text-align: left;
        width: calc(100vw - 100px);
        margin-left: 100px;
    }
`;

export const ConvSubtitle = styled.div`
    text-align: center;
    color: #424242;
    font-size: 1.2rem;
    font-weight: 400;
    margin-bottom: 50px;
    @media (min-width: 1024px) {
        font-size: 2rem;
        text-align: left;
        width: calc(100% - 100px);
        margin-left: 100px;
        margin-bottom: 10px;
    }
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
    @media (min-width: 1024px) {
        width: calc(100% - 100px);
        justify-content: space-evenly;
        margin-top: 20px;
    }
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
    padding: 80px 0;
    width: 100%;
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
    margin: auto 10%;
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
    margin-bottom: 40px;
`;

export const InfoTitle = styled.div`
    font-size: 1.2rem;
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: 10px;
`;

export const Infos = styled.div`

`;

export const Mapa = styled.div`
    width: 80%;
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
    padding: 60px 0;
    margin: 0 10%;
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
    white-space: nowrap;
    padding: 15px 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
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