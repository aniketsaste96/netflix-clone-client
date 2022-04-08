
import './App.scss';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Watch from './pages/watch/Watch';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/movies">
          <Home />
        </Route>
        <Route exact path="/movies">
          <Home />
        </Route>
        <Route exact path="/movies">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
