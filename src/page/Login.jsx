import React from "react";
import Form from "../components/Form";
import { useAuth } from "../context/auth";
import Logout from "../components/Logout";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function Login() {
  const auth = useAuth();
  return (
    <div className="h-full flex flex-col justify-between items-center">
      <Nav />
      {auth.user.length > 0 ? <Logout /> : <Form nameForm="Login" />}
      <Footer />
    </div>
  );
}

export default Login;
