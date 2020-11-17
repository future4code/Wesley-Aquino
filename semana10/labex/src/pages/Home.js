import React from 'react'
import axios from 'axios';
import styled from 'styled-components';
import logo from '../img/logo.png'
import homeimage from '../img/home-image.jpg';

const Container = styled.div`
`
const Header = styled.div`
display: flex;

`
const Head = styled.div`
display: flex;
justify-content: space-around;
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
width: 10vw;
margin: 1vw;
border: 2px solid red;
`
const Description = styled.div`
border: 2px solid green;
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
`
const Footer = styled.div`
border: 2px solid yellow;
margin-top: 5vw;
margin-left: 1vw;
margin-right: 1vw;
height: 10vh;
`

function Home() {
    return(
    <Container>
        <Header>
        <Img src={logo} />
        
        <Head>
        <h1>LabeX</h1>
        <button>Inscreva-se</button>
        <button>Login</button>
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