import * as C from './App.styled';
import IconLogo from './assets/images/icons/logo_svg.svg';
import IconMenu from './assets/images/icons/icon_menu.svg';
import IconArrow from './assets/images/icons/icon_seta.png';

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
        </C.Container>
    );
}

export default App;