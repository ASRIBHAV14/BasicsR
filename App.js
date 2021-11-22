import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import Nav from "./components/nav";
import { Login } from './components/login';
import { Route, Switch, Redirect } from "react-router-dom";
import Posts from './components/posts';
import Register from './components/register';
import PageNotFound from './components/pagenotfound';
import LoginLms from './components/loginlms';
import RegisterationForm from './components/RegisterationForm';
import "bootstrap/dist/css/bootstrap.css";





function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/posts" component={Posts} />
        <Route path="/login" component={Login} />
        <Route path="/Register" component={Register} />
        <Route path="/LoginLms" component={LoginLms} />
        <Route path="/addLoginDetails" component={RegisterationForm} />
        <Route exact path="/" component={Home} />
        <Redirect from="/home" to="/" />
        <Route component={PageNotFound} />
      </Switch>



    </div>
  );
}

export default App;
