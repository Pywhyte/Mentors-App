import React from "react";

import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import Login from "./pages/Login";
import MyProfile from "./pages/MyProfile";
import Users from "./pages/Users";

const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/mentors">
          <Users />
        </Route>
        <Route path="/myprofile">
          <MyProfile />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
