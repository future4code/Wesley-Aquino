import axios from 'axios';
import styled from 'styled-components';
import Home from './pages/Home';
import Login from './pages/Login';
import Manage from './pages/Manage';
import Subscribe from './pages/Subscribe';
import NewTrip from './pages/NewTrip';
import TripList from './pages/TripList';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


const AppContainer = styled.div`
text-align: center;
`

function App() {
  return (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/subscribe">
        <Subscribe />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      

    </Switch>
   </BrowserRouter>
  );
}

export default App;
