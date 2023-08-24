import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Home from "./pages/home/Home";
import {Routes,Route} from 'react-router-dom'
import RequireUser from "./components/RequireUser";
import Feed from "./components/feed/Feed";
import Profile from "./components/profile/Profile";
 import UpdateProfile from "./components/updateProfile/UpdateProfile";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import LoadingBar from "react-top-loading-bar";
import OnlyIfNotLoggedIn from "./components/OnlyIfNotLoggedIn";

function App() {

  const isLoading = useSelector(state => state.appConfigReducer.isLoading);
  const loadingRef = useRef(null);

  useEffect(() => {
    if (isLoading) {
      loadingRef.current?.continuousStart();
    } else{
     loadingRef.current?.complete();
    }
  })

   
  return (
    <div className="App">
       <LoadingBar color='#5f9fff' ref = {loadingRef} />
  <Routes>  
   
   <Route element={<RequireUser/>}>
   <Route element={<Home />}>
  
   <Route path="/"element = {<Feed />}/>
   <Route path="/profile/:userId" element = {<Profile/>}/>
    <Route path="/UpdateProfile" element = {<UpdateProfile/>}/> 
   </Route>
</Route>
<Route element={<OnlyIfNotLoggedIn />}>
<Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
</Route>

  </Routes>
    </div>
  );
}

export default App;
