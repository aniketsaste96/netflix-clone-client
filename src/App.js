
import './App.scss';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Watch from './pages/watch/Watch';
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext"
function App() {
  const { user } = useContext(AuthContext);
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Redirect to="/Login" />}
        </Route>
        <Route exact path="/register">
          {!user ? <Login /> : <Redirect to="/" />}

        </Route>
        <Route exact path="/login">
          {!user ? <Login /> : <Redirect to="/" />}
        </Route>
        {user && (
          <>
            <Route exact path="/movies">
              <Home type="movie" />
            </Route>
            <Route exact path="/series">
              <Home type="series" />
            </Route>
            <Route exact path="/watch">
              <Watch />
            </Route>
          </>
        )
        }
      </Switch>
    </div>
  );
}

export default App;
