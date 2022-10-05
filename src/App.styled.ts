import styled from 'styled-components';

type PropsMenu = {
    menuOn: boolean;
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
`;

export const MenuMobile = styled.div(({menuOn}: PropsMenu) => (`
    width: 100vw;
    height: 100vh;
    transition: 0.5s;
    left: ${menuOn ? '0' : '100vw'};
    background-color: rgba(76, 156, 113, 0.9);
    color: #FFF;
    position: fixed;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
`));

export const MMCloseButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 20px;
    margin-right: 40px;
    width: 100%;
    cursor: pointer;
`;

export const MMOptions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    width: 100%;
    flex: 1;
    margin-bottom: 100px;
`;

export const MMOption = styled.div`
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    cursor: pointer;
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
    cursor: pointer;
    padding: 5px 20px;
    border-bottom: 5px solid #FFF;
    :hover {
        border-bottom: 5px solid #4C9C71;
    }
`;

export const link = styled.a`
    text-decoration: none;
    color: inherit;
    margin: 0;
    padding: 0;
    cursor: pointer;
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
    cursor: pointer;
    transition: 0.5s;
    :hover {
        transform: scale(1.2);
    }
`;

export const InfoText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const IconLogo = styled.div`
    cursor: pointer;
`;

export const IconMenu = styled.div`
    cursor: pointer;
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
    transition: 0.5s;
    cursor: pointer;
    :hover {
                background-color: rgb(200, 200, 200);
            }
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
    @media(min-width: 1024px) {

    }
`;

export const ScheduleSquare = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: #000;
    margin-top: 50px;
    border-radius: 10px;
    height: 300px;
    width: 80vw;
    @media (min-width: 1024px) {
            min-height: 250px;
            max-width: 800px;
            margin-bottom: 50px;
        }
`;

export const ImageAgenda = styled.img`
    object-fit: cover;
    object-position: center;
    opacity: 0.6;
    position: absolute;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 300px;
    width: 80vw;
    @media (min-width: 1024px) {
            max-width: 800px;
            min-height: 250px;
        }
    `;

export const ScheduleHeader = styled.div`
    font-weight: 700;
    font-size: 1.2rem;
    position: relative;
    text-transform: uppercase;
        @media (min-width: 1024px) {
            font-size: 2rem;
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
    cursor: pointer;
    transition: 0.5s;
    :hover {
                background-color: rgb(200, 200, 200);
            }
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
        @media(min-width: 1024px) {
            margin-top: 100px;
            margin-bottom: 100px;
        }
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
    border: 2px solid #FFF;
    border-radius: 30px 30px 30px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    padding: 8px 15px;
    margin-bottom: 10px;
    margin: 2px 2px;
    white-space: nowrap;
    background-color: #0C5C31;
    color: #fff;
    transition: 0.5s;
    cursor: pointer;
        :hover {
            border: 2px solid #4C9C71;
            background-color: #4C9C71;
        }
    @media (min-width: 1024px) {
        margin: 5px 5px;
        padding: 16px 32px;
        font-size: 1.2rem;
        }
`;

export const EspImage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    margin: 30px 0;
    max-width: 500px;
        @media (min-width: 1024px) {
            min-width: 400px;
            width: 50%;
            margin-right: 50px;
            max-width: 600px;
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
    flex-direction: column;
        @media (min-width: 1024px) {
            flex-direction: row;
            flex-wrap: wrap;
            max-width: 1024px;
        }
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
    opacity: 1;
    position: absolute;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.7;
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
    flex-direction: column;
    @media (min-width: 1024px) {
        width: calc(100% - 100px);
        justify-content: space-evenly;
        margin-top: 20px;
        flex-direction: row;
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
        @media (min-width: 1024px) {
            font-size: 2rem;
        }
`;

export const FaleSubtitle = styled.div`
    text-align: center;
    color: #FFF;
    font-size: 1rem;
    font-weight: 400;
    margin: auto 10%;
    margin-bottom: 60px;
        @media (min-width: 1024px) {
            font-size: 1.5rem;
        }
    
`;

export const InfosContato = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    color: #fff;
    @media (min-width: 1024px) {
        flex-direction: row;
        width: 80%;
        justify-content: center;
    }
`;

export const InfoContato = styled.div`
    margin-bottom: 40px;
    @media (min-width: 1024px) {
        flex: 1;
    }
`;

export const InfoTitle = styled.div`
    font-size: 1.2rem;
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: 10px;
        @media(min-width: 1024px) {
            font-size: 1.5rem;
        }
`;

export const Infos = styled.div`
        @media(min-width: 1024px) {
            font-size: 1.2rem;
        }
`;

export const Mapa = styled.div`
    width: 80%;
    height: 250px;
    background-color: #FFF;
    border-radius: 30px 30px 30px 0;
    margin-top: 20px;
    @media (min-width: 1024px) {
        height: 400px;
    }
`;

export const Iframe = styled.iframe`
    border: 0;
    width: 100%;
    height: 100%;
    border-radius: 30px 30px 30px 0;
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
    @media (min-width: 1024px) {
        font-size: 2rem;
        margin-bottom: 50px;
    }
`;

export const AgendaSubtitle = styled.div`
    text-align: center;
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 20px;
    @media (min-width: 1024px) {
        font-size: 1.2rem;
    }
`;

export const Button3 = styled.div`
    background-color: #0C5C31;
    border: 2px solid #0C5C31;
    color: #FFF;
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
    cursor: pointer;
    transition: 0.5s;
        :hover {
                background-color: #4C9C71;
                border: 2px solid #4C9C71;
                }
    @media (min-width: 1024px) {
        font-size: 1.2rem;
        margin-top: 50px;
    }
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
    @media (min-width: 1024px) {
        flex-direction: row;
    }
`;

export const FooterInfo1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 80%;
        @media (min-width: 1024px) {
            flex: 1
        }
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
    @media (min-width: 1024px) {
            flex: 1
        }
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
    @media (min-width: 1024px) {
            flex: 1
        }
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
    cursor: pointer;
    transition: 0.5s;
    :hover {
        transform: scale(1.2);
    }
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
    @media (min-width: 1024px) {
        transform: rotate(90deg);
        width: 100px;
        margin: 0;
    }
`;

export const FooterRef = styled.div`
    text-align: center;
    font-size: 0.9rem;
    margin: 50px auto;
`;