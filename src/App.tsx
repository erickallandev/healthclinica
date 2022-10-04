import * as C from './App.styled';
import IconLogo from './assets/images/icons/logo_svg.svg';
import IconMenu from './assets/images/icons/icon_menu.svg';
import Consulta1 from './assets/images/image_primconsulta.jpg';
import Consulta2 from './assets/images/image_consulta.jpg';
import Consulta3 from './assets/images/image_exames.jpg';
import ImageEsp from './assets/images/image_doctors.svg';
import Icon_tel from './assets/images/icons/icon_tel.svg';
import BGImage from './assets/images/image_home.jpg';
import Doctor1 from './assets/images/medico1.jpg';
import Doctor2 from './assets/images/medico2.jpg';
import Doctor3 from './assets/images/medico3.jpg';
import Doctor4 from './assets/images/medico4.jpg';
import Doctor5 from './assets/images/medico5.jpg';
import Doctor6 from './assets/images/medico6.jpg';
import Doctor7 from './assets/images/medico7.jpg';
import Doctor8 from './assets/images/medico8.jpg';
import Doctor9 from './assets/images/medico9.jpg';
import Doctor10 from './assets/images/medico10.jpg';
import Doctor11 from './assets/images/medico11.jpg';
import Doctor12 from './assets/images/medico12.jpg';
import Doctor13 from './assets/images/medico13.jpg';
import Doctor14 from './assets/images/medico14.jpg';
import Doctor15 from './assets/images/medico15.jpg';
import Doctor16 from './assets/images/medico16.jpg';
import Doctor17 from './assets/images/medico17.jpg';
import Doctor18 from './assets/images/medico18.jpg';
import Doctor19 from './assets/images/medico19.jpg';
import Convenio1 from './assets/images/convenio_unimed.png';
import Convenio2 from './assets/images/convenio_amil.png';
import Convenio3 from './assets/images/convenio_sulamerica.png';
import Convenio4 from './assets/images/convenio_bradesco.png';
import Convenio5 from './assets/images/convenio_porto.png';
import Convenio6 from './assets/images/convenio_allianz.png';
import IconSocial1 from './assets/images/icons/icon_whatsapp.svg';
import IconSocial2 from './assets/images/icons/icon_linkedin.svg';
import IconSocial3 from './assets/images/icons/icon_instagram.svg';
import IconSocial4 from './assets/images/icons/icon_facebook.svg';
import IconSocial5 from './assets/images/icons/icon_behance.svg';
import IconSocial6 from './assets/images/icons/icon_twitter.svg';

const App = () => {
    return (
        <C.Container>
            <C.Home>
                <C.ImageHome src={BGImage} alt='' />
                <C.NavBar>
                    <C.IconLogo>
                        <C.Image src={IconLogo} alt='' />
                    </C.IconLogo>
                    <C.IconMenu>
                        <C.Image src={IconMenu} />
                    </C.IconMenu>
                </C.NavBar>

                <C.Content>
                    <C.HomeHeader>
                        Comece a cuidar<br /> da sua saúde<br /> ainda hoje!
                    </C.HomeHeader>
                    <C.HomeText>
                        A Health Clínica é a melhor opção para você cuidar do seu mais precioso bem: a sua saúde. Atendemos de forma humanizada, com um preço acessível e sempre pensando no melhor para você.
                    </C.HomeText>

                    <C.Button1>
                        Agende agora o seu atendimento
                    </C.Button1>

                </C.Content>
            </C.Home>

            <C.Schedule>
                <C.ScheduleSquare>
                    <C.ImageAgenda src={Consulta1} alt='' />
                    <C.ScheduleHeader>
                        Primeira Consulta
                    </C.ScheduleHeader>
                    <C.ScheduleTopics>
                        <li>Online ou presenciais</li>
                        <li>De acordo com a sua preferência</li>
                    </C.ScheduleTopics>
                    <C.Button2>
                        Agende sua consulta
                    </C.Button2>
                </C.ScheduleSquare>

                <C.ScheduleSquare>
                    <C.ImageAgenda src={Consulta2} alt='' />
                    <C.ScheduleHeader>
                        Retorno
                    </C.ScheduleHeader>
                    <C.ScheduleTopics>
                        <li>A consulta de retorno é indispensável</li>
                        <li>Agende agora o seu retorno</li>
                    </C.ScheduleTopics>
                    <C.Button2>
                        Agende seu retorno
                    </C.Button2>
                </C.ScheduleSquare>

                <C.ScheduleSquare>
                    <C.ImageAgenda src={Consulta3} alt='' />
                    <C.ScheduleHeader>
                        Exames
                    </C.ScheduleHeader>
                    <C.ScheduleTopics>
                        <li>Mais de 30 especialidades</li>
                        <li>Agende rapidamento os seus próximos exames</li>
                    </C.ScheduleTopics>
                    <C.Button2>
                        Agende sua consulta
                    </C.Button2>
                </C.ScheduleSquare>
            </C.Schedule>



            <C.Especialidades>
                <C.EspHeader>
                    Especialidades
                </C.EspHeader>
                <C.EspSub>
                    Confira as especialidades oferecidas
                </C.EspSub>
                <C.EspBody>
                    <C.EspImage>
                        <C.Image src={ImageEsp} alt='' />
                    </C.EspImage>
                    <C.ListaEspecialidades>
                        <C.EspContent>
                            <C.Espec>
                                Alergologia
                            </C.Espec>
                            <C.Espec>
                                Cardiologia
                            </C.Espec>
                            <C.Espec>
                                Clínica médica
                            </C.Espec>
                            <C.Espec>
                                Dermatologia
                            </C.Espec>
                            <C.Espec>
                                Endocrinologia
                            </C.Espec>
                            <C.Espec>
                                Gastroenterologia
                            </C.Espec>
                            <C.Espec>
                                Geriatria
                            </C.Espec>
                            <C.Espec>
                                Ginecologia
                            </C.Espec>
                        </C.EspContent>
                        <C.EspContent>
                            <C.Espec>
                                Mastologia
                            </C.Espec>
                            <C.Espec>
                                Neurologia
                            </C.Espec>
                            <C.Espec>
                                Obstetrícia
                            </C.Espec>
                            <C.Espec>
                                Odontologia
                            </C.Espec>
                            <C.Espec>
                                Oftalmologia
                            </C.Espec>
                            <C.Espec>
                                Pediatria
                            </C.Espec>
                            <C.Espec>
                                Psiquiatria clínica
                            </C.Espec>
                            <C.Espec>
                                Urologia
                            </C.Espec>
                        </C.EspContent>
                    </C.ListaEspecialidades>
                </C.EspBody>
            </C.Especialidades>



            <C.CentAtendimento>
                <C.Icon1>
                    <C.Image src={Icon_tel} alt='' />
                </C.Icon1>
                <C.AtendHeader>
                    Central de atendimento
                </C.AtendHeader>
                <C.AtendBody>
                    Para qualquer dúvida, tente o nosso canal de atendimento:<br />
                    (84) 2525-2266 | (84) 2834-3838
                </C.AtendBody>
            </C.CentAtendimento>



            <C.CorpoClinico>
                <C.CCTitle>
                    Corpo Clínico
                </C.CCTitle>
                <C.CCSubtitle>
                    Conheça os nossos especialistas
                </C.CCSubtitle>

                <C.Doctors>

                </C.Doctors>
                <C.Doctors>
                    <C.Doctor>
                        <C.DoctorPhoto src={Doctor1} alt='' />
                        <C.DoctorName>
                            Dr. João Leônidas Filho
                        </C.DoctorName>
                        <C.DoctorSubtitle>
                            Diretor Geral
                        </C.DoctorSubtitle>
                    </C.Doctor>
                </C.Doctors>

                <C.Doctors>
                    <C.Doctor>
                        <C.DoctorPhoto src={Doctor2} alt='' />
                        <C.DoctorName>
                            Dra. Maria Lúcia Silva
                        </C.DoctorName>
                        <C.DoctorSubtitle>
                            Alergologista
                        </C.DoctorSubtitle>
                    </C.Doctor>

                    <C.Doctor>
                        <C.DoctorPhoto src={Doctor3} alt='' />
                        <C.DoctorName>
                            Dra. Joana Alves
                        </C.DoctorName>
                        <C.DoctorSubtitle>
                            Cardiologista
                        </C.DoctorSubtitle>
                    </C.Doctor>

                    <C.Doctor>
                        <C.DoctorPhoto src={Doctor4} alt='' />
                        <C.DoctorName>
                            Dr. João Leôncio
                        </C.DoctorName>
                        <C.DoctorSubtitle>
                            Clínico Geral
                        </C.DoctorSubtitle>
                    </C.Doctor>

                    <C.Doctor>
                        <C.DoctorPhoto src={Doctor5} alt='' />
                        <C.DoctorName>
                            Dr. Marcos Souza
                        </C.DoctorName>
                        <C.DoctorSubtitle>
                            Clínico Geral
                        </C.DoctorSubtitle>
                    </C.Doctor>

                    <C.Doctor>
                        <C.DoctorPhoto src={Doctor6} alt='' />
                        <C.DoctorName>
                            Dra. Délis Maria Cristina
                        </C.DoctorName>
                        <C.DoctorSubtitle>
                            Dermatologista
                        </C.DoctorSubtitle>
                    </C.Doctor>

                    <C.Doctor>
                        <C.DoctorPhoto src={Doctor7} alt='' />
                        <C.DoctorName>
                            Dr. Tomio Young
                        </C.DoctorName>
                        <C.DoctorSubtitle>
                            Endocrinologista
                        </C.DoctorSubtitle>
                    </C.Doctor>

                    <C.Doctor>
                        <C.DoctorPhoto src={Doctor8} alt='' />
                        <C.DoctorName>
                            Dr. Paulo Henrique
                        </C.DoctorName>
                        <C.DoctorSubtitle>
                            Geriatra
                        </C.DoctorSubtitle>
                    </C.Doctor>

                    <C.Doctor>
                        <C.DoctorPhoto src={Doctor9} alt='' />
                        <C.DoctorName>
                            Dra. Veruska Peixoto
                        </C.DoctorName>
                        <C.DoctorSubtitle>
                            Geriatra
                        </C.DoctorSubtitle>
                    </C.Doctor>

                    <C.Doctor>
                        <C.DoctorPhoto src={Doctor10} alt='' />
                        <C.DoctorName>
                            Dra. Ana Lídia Flores
                        </C.DoctorName>
                        <C.DoctorSubtitle>
                            Ginecologista
                        </C.DoctorSubtitle>
                    </C.Doctor>

                    <C.Doctor>
                        <C.DoctorPhoto src={Doctor11} alt='' />
                        <C.DoctorName>
                            Dra. Lívia Alburquerque
                        </C.DoctorName>
                        <C.DoctorSubtitle>
                            Mastologista
                        </C.DoctorSubtitle>
                    </C.Doctor>

                    <C.Doctor>
                        <C.DoctorPhoto src={Doctor12} alt='' />
                        <C.DoctorName>
                            Dr. Carlos Augusto Silva
                        </C.DoctorName>
                        <C.DoctorSubtitle>
                            Neurologista
                        </C.DoctorSubtitle>
                    </C.Doctor>

                    <C.Doctor>
                        <C.DoctorPhoto src={Doctor13} alt='' />
                        <C.DoctorName>
                            Dr. Hélio Gonçalves
                        </C.DoctorName>
                        <C.DoctorSubtitle>
                            Obstetra
                        </C.DoctorSubtitle>
                    </C.Doctor>

                    <C.Doctor>
                        <C.DoctorPhoto src={Doctor14} alt='' />
                        <C.DoctorName>
                            Dr. Dênis Ferreira
                        </C.DoctorName>
                        <C.DoctorSubtitle>
                            Dentista
                        </C.DoctorSubtitle>
                    </C.Doctor>

                    <C.Doctor>
                        <C.DoctorPhoto src={Doctor15} alt='' />
                        <C.DoctorName>
                            Dra. Mariana Queiroz
                        </C.DoctorName>
                        <C.DoctorSubtitle>
                            Pediatra
                        </C.DoctorSubtitle>
                    </C.Doctor>

                    <C.Doctor>
                        <C.DoctorPhoto src={Doctor16} alt='' />
                        <C.DoctorName>
                            Dr. Daniel Barros                        </C.DoctorName>
                        <C.DoctorSubtitle>
                            Pediatra
                        </C.DoctorSubtitle>
                    </C.Doctor>

                    <C.Doctor>
                        <C.DoctorPhoto src={Doctor17} alt='' />
                        <C.DoctorName>
                            Dr. Anna Gabriella                        </C.DoctorName>
                        <C.DoctorSubtitle>
                            Pediatra
                        </C.DoctorSubtitle>
                    </C.Doctor>

                    <C.Doctor>
                        <C.DoctorPhoto src={Doctor18} alt='' />
                        <C.DoctorName>
                            Dr. Hugo Moura
                        </C.DoctorName>
                        <C.DoctorSubtitle>
                            Psiquiatra
                        </C.DoctorSubtitle>
                    </C.Doctor>

                    <C.Doctor>
                        <C.DoctorPhoto src={Doctor19} alt='' />
                        <C.DoctorName>
                            Dr. Pedro Siqueira
                        </C.DoctorName>
                        <C.DoctorSubtitle>
                            Urologista
                        </C.DoctorSubtitle>
                    </C.Doctor>

                </C.Doctors>
            </C.CorpoClinico>


            <C.Convenios>
                <C.ConvTitle>
                    Convênios
                </C.ConvTitle>
                <C.ConvSubtitle>
                    Confira os convênios aceitos
                </C.ConvSubtitle>

                <C.ListaConvenios>
                    <C.Convenio>
                        <C.BGPhotoConvenio>
                            <C.PhotoConvenioUnimed src={Convenio1} alt='' />
                        </C.BGPhotoConvenio>
                        <C.TitleConvenio>
                            Unimed
                        </C.TitleConvenio>
                    </C.Convenio>

                    <C.Convenio>
                        <C.BGPhotoConvenio>
                            <C.PhotoConvenio src={Convenio2} alt='' />
                        </C.BGPhotoConvenio>
                        <C.TitleConvenio>
                            Amil
                        </C.TitleConvenio>
                    </C.Convenio>

                    <C.Convenio>
                        <C.BGPhotoConvenio>
                            <C.PhotoConvenio src={Convenio3} alt='' />
                        </C.BGPhotoConvenio>
                        <C.TitleConvenio>
                            Sulamérica
                        </C.TitleConvenio>
                    </C.Convenio>
                </C.ListaConvenios>

                <C.ListaConvenios>
                    <C.Convenio>
                        <C.BGPhotoConvenio>
                            <C.PhotoConvenio src={Convenio4} alt='' />
                        </C.BGPhotoConvenio>
                        <C.TitleConvenio>
                            Bradesco Saúde
                        </C.TitleConvenio>
                    </C.Convenio>

                    <C.Convenio>
                        <C.BGPhotoConvenio>
                            <C.PhotoConvenio src={Convenio5} alt='' />
                        </C.BGPhotoConvenio>
                        <C.TitleConvenio>
                            Porto Seguro
                        </C.TitleConvenio>
                    </C.Convenio>

                    <C.Convenio>
                        <C.BGPhotoConvenioAllianz>
                            <C.PhotoConvenio src={Convenio6} alt='' />
                        </C.BGPhotoConvenioAllianz>
                        <C.TitleConvenio>
                            Allianz
                        </C.TitleConvenio>
                    </C.Convenio>
                </C.ListaConvenios>
            </C.Convenios>

            <C.FaleConosco>
                <C.FaleTitle>
                    Fale conosco
                </C.FaleTitle>
                <C.FaleSubtitle>
                    Entre em contato conosco através de um dos canais oferecidos abaixo:
                </C.FaleSubtitle>
                <C.InfosContato>
                    <C.InfoContato>
                        <C.InfoTitle>
                            Telefone
                        </C.InfoTitle>
                        <C.Infos>
                            (84) 2850-5328 | (84) 2380-8706 <br />
                            (84) 2169-0515 | (84) 2803-5137
                        </C.Infos>
                    </C.InfoContato>
                    <C.InfoContato>
                        <C.InfoTitle>
                            Whatsapp
                        </C.InfoTitle>
                        <C.Infos>
                            (84) 99594-7364 | (84) 99314-4673 <br />
                            (Clique em uma das opções)
                        </C.Infos>
                    </C.InfoContato>
                </C.InfosContato>

                <C.InfosContato>
                    <C.InfoContato>
                        <C.InfoTitle>
                            Horário de atendimento
                        </C.InfoTitle>
                        <C.Infos>
                            Segunda a Sábado: 06h - 00h <br />
                            Domingo: 06h - 22h
                        </C.Infos>
                    </C.InfoContato>
                    <C.InfoContato>
                        <C.InfoTitle>
                            Endereço
                        </C.InfoTitle>
                        <C.Infos>
                            Av. Des. João da Fonseca, 999 <br />
                            Petrópolis, Natal/RN
                        </C.Infos>
                    </C.InfoContato>
                </C.InfosContato>

                <C.Mapa></C.Mapa>
            </C.FaleConosco>

            <C.Agendamento>
                <C.AgendaTitle>
                    Agendamento rápido
                </C.AgendaTitle>
                <C.AgendaSubtitle>
                    Fale com um de nossos atendentes e agende já a sua primeira consulta, retorno ou marcação de exames.
                </C.AgendaSubtitle>
                <C.AgendaSubtitle>
                    Tenha em mãos um documento de identificação e o seu convênio, se for o caso.
                </C.AgendaSubtitle>
                <C.Button3>
                    Clique para iniciar o atendimento
                </C.Button3>
            </C.Agendamento>

            <C.Footer>
                <C.FooterInfo>
                    <C.FooterInfo1>
                        <C.IconLogo>
                            <C.Image src={IconLogo} alt='' />
                        </C.IconLogo>
                        <C.Info1Text>
                            Aqui na Health Clínica você encontrará o conforto que tanto busca para cuidar da sua saúde. A nossa equipe multidisciplinar está pronta para atendê-lo da melhor forma possível. Agenda já a sua consulta.
                        </C.Info1Text>
                    </C.FooterInfo1>
                    <C.hr2 />
                    <C.FooterInfo2>
                        <C.Info2Header>
                        Endereço
                        </C.Info2Header>
                        <C.Info2Text>
                            Av. Des. João da Fonseca, 999 <br />
                            Petrópolis, Natal/RN - CEP: 59020-025
                        </C.Info2Text>
                        <br />
                        <C.Info2Text>
                            <C.Info2Header>
                            Telefones
                            </C.Info2Header>
                            (84) 2850-5328 | (84) 2380-8706 <br />
                            (84) 2169-0515 | (84) 2803-5137
                        </C.Info2Text>
                    </C.FooterInfo2>
                    <C.hr2 />
                    <C.FooterInfo3>
                        <C.Info3Header>
                            Redes sociais
                        </C.Info3Header>
                        <C.Info3Icons>
                        <C.IconMedia>
                            <C.Image src={IconSocial1} alt='' />
                        </C.IconMedia>
                        <C.IconMedia>
                            <C.Image src={IconSocial2} alt='' />
                        </C.IconMedia>
                        <C.IconMedia>
                            <C.Image src={IconSocial3} alt='' />
                        </C.IconMedia>
                        <C.IconMedia>
                            <C.Image src={IconSocial4} alt='' />
                        </C.IconMedia>
                        <C.IconMedia>
                            <C.Image src={IconSocial5} alt='' />
                        </C.IconMedia>
                        <C.IconMedia>
                            <C.Image src={IconSocial6} alt='' />
                        </C.IconMedia>
                        </C.Info3Icons>
                    </C.FooterInfo3>
                </C.FooterInfo>
                <C.hr />
                <C.FooterRef>
                    Health Clínica 2022 - Todos os direitos reservados <br />
                    Desenvolvido por EAWebDev 2022
                </C.FooterRef>
            </C.Footer>

        </C.Container>
    );
}

export default App;