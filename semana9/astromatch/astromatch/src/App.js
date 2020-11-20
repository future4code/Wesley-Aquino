import React, { useState, useEffect} from 'react'
import './App.css';
import axios from 'axios'
import styled from 'styled-components'
import MainPage from './components/MainPage'
import LikedPage from './components/LikedPage'

const AppContainer = styled.div`
display: flex;
justify-content: center;
margin-top: 2vw;
`

function App() {
  const [mainPage, setMainPage] = useState(true)

  const goToMatch = () => {
    setMainPage(false)
}

const goToMain = () => {
  setMainPage(true)
}


  const page = mainPage ? <MainPage goToMatch={goToMatch} /> : <LikedPage goToMain={goToMain}/>

  return (
    <AppContainer>
      {page}
    </AppContainer>
  );
}

export default App;
