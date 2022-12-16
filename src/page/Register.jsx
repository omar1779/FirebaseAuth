import React from "react";
import Form from "../components/Form";
import {useAuth} from "../context/auth"
import Logout from "../components/Logout";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function Register() {
  const auth = useAuth();
  console.log(auth.user)
  return (
    <div className="h-full flex flex-col justify-between items-center">
      <Nav/>
      {auth.user.length > 0
      ?<Logout/>
      :<Form nameForm="Register" />
      }
      <Footer/>
    </div>
  );
}

export default Register;
