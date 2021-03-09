import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import SingIn from './pages/SignIn';
import SingUp from './pages/SignUp';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/sing-up" component={SingUp}/>
        <Route path="/" component={SingIn}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
