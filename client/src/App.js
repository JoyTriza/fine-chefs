import Landing from "./Components/Home/Landing";
import Login from "./Components/Home/Login";
import {Routes, Route} from "react-router-dom";
import Quote from "./Components/Home/Quote";
import Signup from "./Components/Signup";
import Dashboard from "./Components/Dashboard/Dashboard";
import {Recipe} from "./Components/Helper/context"
import { useState } from "react";
import Recipes from "./Components/Dashboard/Recipes";


function App() {
  const [currentUser, setCurrentUser] = useState('')

  

  return (
    <Recipe.Provider value={{currentUser, setCurrentUser}}>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="login" element={<Login />} />
      <Route path="quote" element={<Quote />} />
      <Route path="signup" element={<Signup />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="recipes" element={<Recipes/>}/>
    </Routes>
    </Recipe.Provider>
  )
}

export default App;
