
import './App.scss';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Watch from './pages/watch/Watch';
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
function App() {
  const user = true;
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Redirect to="/register" />}
        </Route>
        <Route exact path="/register">
          {!user ? <Register /> : <Redirect to="/" />}

        </Route>
        <Route exact path="/login">
          {!user ? <Login /> : <Redirect to="/" />}
        </Route>
        {user && (
          <>
            <Route exact path="/movies">
              <Home type="movies" />
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
