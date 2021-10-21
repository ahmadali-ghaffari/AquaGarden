import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './components/register/Register';
import { Header } from './components/header/Header';
import { Main } from './components/main/main';
import Login from './components/login/Login';
import React, { useState } from 'react';
import Home from './components/Home';
import jwtDecode from "jwt-decode";

interface UserFromToken {
  id: number;
  userName: string;
  email: string;
  exp: number;
  iat: number;
};

const App: React.FC = () => {

  const getUser = () => {
    if (localStorage.getItem("token")) {
      console.log(jwtDecode<UserFromToken>(localStorage.getItem("token") as string), 'hey');
      return jwtDecode<UserFromToken>(localStorage.getItem("token") as string);
    } else {
      return undefined;
    }
  };
  const [user, setUser] = useState<UserFromToken | undefined>(() => {
    return getUser();
  });

  const onLogout = (): void => {
    localStorage.removeItem("token");
    setUser(undefined);
  };

  return (
    <div className="App">
      <Router>
        <Header
          onLogout={onLogout}
          isUser={user !== undefined}
        />

{/* userId={(user && user.id) ? user.id : null} */}
        <Switch>
          <Route exact path="/" > <Main  userId={(user && user.id) ? user.id : null}/> </Route>
          <Route exact path="/home" > <Home/> </Route>
         <Route exact path="/login" component={Login} /> 
        <Route exact path="/register" component={Register} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
