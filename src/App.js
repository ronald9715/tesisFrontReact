import logo from './logo.svg';
import Login from './components/login'
import { BrowserRouter, Route, Switch,Link } from "react-router-dom";
import Register from './components/register'
import Dash from './components/index'
import Third from './components/thirdgame'
import Fourth from './components/fourthgame'
import Fifth from './components/fifthgame'
import Quiz from './components/quiz'
import Drag from './components/dad'
import Six from './components/sixth'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/dashboard" component={Dash}/>
        <Route exact path="/dashboard/lista" component={Third}/>
        <Route exact path="/dashboard/cuartojuego" component={Fourth}/>
        <Route exact path="/dashboard/quintojuego" component={Fifth}/>
        <Route excat path="/dashboard/juego1" component={Quiz}/>
        <Route exact path="/dashboard/juego2" component={Drag}/>
        <Route exact path="/dashboard/sextojuego" component={Six}/>
        <Route/>
      </Switch>
    </BrowserRouter>
    
    
    
     
   
  );
}

export default App;
