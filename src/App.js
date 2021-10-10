import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  BrowserRouter
} from "react-router-dom";
import "./index.css"
import Login from "./pages/Login";
import MyProfile from "./pages/MyProfile";
import { auth } from "./action/user";

function App(props) {

  const isAuth = useSelector(state=>state.user.isAuth)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(auth())
  },[])

  return (
    <BrowserRouter>


    

    {!isAuth ?
    <Switch>
    <Route path="/" component={Login}/>
    </Switch>
      :
      <Switch>
      <Route path="myprofile" component={MyProfile}/>
      </Switch>
  }
    {/* <Route path="/myProfile">
    <MyProfile/>
    </Route>
    <Route path="/">
    <Login/>
    </Route>
  </Switch>
</Router>  */}



    </BrowserRouter>
  
  )
}

export default App;
