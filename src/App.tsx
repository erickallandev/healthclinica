import * as C from './App.styled';
import IconLogo from './assets/images/icons/logo_svg.svg';
import IconMenu from './assets/images/icons/icon_menu.svg';
import IconArrow from './assets/images/icons/icon_seta.png';
import Consulta1 from './assets/images/image_primconsulta.jpg';
import Consulta2 from './assets/images/image_consulta.jpg';
import Consulta3 from './assets/images/image_exames.jpg';
import ImageEsp from './assets/images/image_doctors.svg';

const App = () => {
    return (
        <C.Container>
            <C.Home>
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

                <C.IconArrow>
                    <C.Image src={IconArrow} alt='' />
                </C.IconArrow>
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

        </C.Container>
    );
}

export default App;