import React,  {useState, useEffect, useMemo, createContext}  from "react";
import { BrowserRouter, Routes, Route, Link  } from "react-router-dom";

import Home from "./pages/Home";

//used in cased of users authentication
import { getFromStorage } from "./utils/Storage";
import AllFeatures from "./pages/AllFeatures";
//auth context that specified access route to authenticated users
export const AuthContext = createContext();

function App() {

  const [isLoggin, setIsLoggin] = useState(false);
  const user = getFromStorage('userToken');

  useEffect(()=>{
    getToken();
  },[])

  const getToken = async()=>{
    if(user == null){
      setIsLoggin(false);
    }else{
      setIsLoggin(true);
    }
  }

  const authContext = useMemo(
    ()=>({
      signIn: async () =>{
        setIsLoggin(true);
      },
      signOut: async()=>{
        setIsLoggin(false);
      }
    })
  )

  return (
    <AuthContext.Provider value={authContext}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/houses" element={<AllFeatures />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
