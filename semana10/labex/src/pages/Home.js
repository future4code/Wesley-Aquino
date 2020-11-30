import React from 'react'
import axios from 'axios';
import styled from 'styled-components';
import logo from '../img/logo.png';
import homeimage from '../img/home-image.jpg';
import { useHistory } from 'react-router-dom';

const Container = styled.div`
`
const Header = styled.div`
display: flex;

`
const Head = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
border: 2px solid blue;
width: 90vw;
height: 18vh;
margin: 1vw;
`
const Img = styled.img`
padding: 1vw;
width: 5vw;
`
const Body = styled.div`
display: flex;
border: 2px solid black;
height: 50vh;
margin: 1vw;
`
const Menu = styled.div`
display: flex;
flex-direction: column;
background-color: lightgrey;
width: 10vw;
margin: 1vw;
border-radius: 3vw;
text-align: center;
`
const Description = styled.div`
background-color: lightgray;
border-radius: 3vw;
width: 60vw;
margin: 1vw;
padding: 1vw;
`
const ImageContainer = styled.div`
margin: 1vw;
width: 35vw;
`
const HomeImage = styled.img`
height: 46vh;
border-radius: 3vw;
`
const Footer = styled.div`
text-align: center;
border: 2px solid yellow;
margin-top: 5vw;
margin-left: 1vw;
margin-right: 1vw;
height: 10vh;
`
const Botao = styled.button`
height: 3vh;
`
const Button = styled.button`
background: #3D94F6;
background-image: -webkit-linear-gradient(top, #3D94F6, #1E62D0);
background-image: -moz-linear-gradient(top, #3D94F6, #1E62D0);
background-image: -ms-linear-gradient(top, #3D94F6, #1E62D0);
background-image: -o-linear-gradient(top, #3D94F6, #1E62D0);
background-image: -webkit-gradient(to bottom, #3D94F6, #1E62D0);
-webkit-border-radius: 20px;
-moz-border-radius: 20px;
margin: 2vw;
border-radius: 20px;
color: #FFFFFF;
font-family: Open Sans;
font-size: 20px;
font-weight: 100;
padding: 15px;
-webkit-box-shadow: 1px 1px 20px 0 #000000;
-moz-box-shadow: 1px 1px 20px 0 #000000;
box-shadow: 1px 1px 20px 0 #000000;
text-shadow: 1px 1px 20px #000000;
border: solid #337FED 1px;
text-decoration: none;
display: inline-block;
cursor: pointer;
text-align: center;
`

function Home() {

const history = useHistory()

const goToLogin = () => {
    history.push("/login")
}

const goToSubscribe = () => {
    history.push("/application-form")
}

    
    return(
    <Container>
        <Header>
        <Img src={logo} />
        
        <Head>
        <h1>LabeX</h1>
        <Button onClick={goToSubscribe}>Inscreva-se</Button>
        <Button onClick={goToLogin}>Login</Button>
        </Head>
        </Header>

        <Body>
            <Menu>
                <p>Lista</p>
                <p>Lista</p>
                <p>Lista</p>
            </Menu>
            <Description>
                <h3>Somos uma agência de viagens espaciais, realizamos expedições para os mais diversos planetas e estrelas do sistema solar, aqui você pode se inscrever e participar das nossas saídas.</h3>
                <h4>Quem pode se inscrever? Qualquer pessoa que tenha a curiosidade de descobrir o que há além do globo, as vezes fazemos novas descobertas na expedição que você participará.</h4>
            </Description>
            <ImageContainer>
                <HomeImage src={homeimage} />
            </ImageContainer>
        </Body>

        <Footer>
            <h3>Desenvolvido por Wesley Aquino</h3>
        </Footer>

    </Container>
    )
}
export default Home;