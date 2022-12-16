import "./App.css";
import Login from "./page/Login";
import Register from "./page/Register";
import Home from "./page/Home";
import Reset from "./page/Reset";
import Admin from "./page/Admin";
import { Route, Routes } from "react-router-dom";
import { useAuth } from "./context/auth";
function App() {
  const auth = useAuth()
  auth.getAllUsers()
  return (
    <div className="App h-screen bg-slate-800">
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="reset" element={<Reset />} />
          <Route path="admin" element={<Admin/>} />
      </Routes>
    </div>
  );
}

export default App;
