import React, { useEffect, useState } from "react";

import {
  BrowserRouter ,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Login from "./pages/Login";
import MyProfile from "./pages/MyProfile";
import Users from "./pages/Users";

const App = ()=> {

  // const [isAuth, setIsAuth] = useState(false)


  // useEffect(() => {
  //   if (localStorage.getItem("auth")) {
  //     setIsAuth(true)
  //   }
  // }, [])

  return (
    // <authContext.Provider value={{
    //   isAuth,
    //   setIsAuth,
    // }}>
    //   <BrowserRouter>
    //     <AppRouter />
    //   </BrowserRouter>
    //  </authContext.Provider>
<BrowserRouter>
<Switch>
        <Route path="/mentors">
          <Users/>
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
