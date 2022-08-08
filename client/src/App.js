import Landing from "./Components/Home/Landing";
import Login from "./Components/Home/Login";
import {Routes, Route} from "react-router-dom";
import Quote from "./Components/Home/Quote";
import Signup from "./Components/Signup";
import Dashboard from "./Components/Dashboard/Dashboard";


function App() {

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="login" element={<Login />} />
      <Route path="quote" element={<Quote />} />
      <Route path="signup" element={<Signup />} />
      <Route path="dashboard" element={<Dashboard />} />


    </Routes>
  )
}

export default App;
