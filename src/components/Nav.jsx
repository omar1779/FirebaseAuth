import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth";
import { RiRadioButtonLine } from "react-icons/ri";
function Nav() {
  const auth = useAuth();
  console.log(auth.user);
  return (
    <div className="flex items-center w-full justify-between pr-3 pl-1 bg-white h-14">
      <h1 className="text-3xl font-mono">
        <Link to="/">
          <span className="text-red-500">☕</span>Coffee&&Code
        </Link>
      </h1>
      <div className="bg-slate-800 text-white rounded-md w-16 text-center mr-3">
        <Link to="/admin">Admin</Link>
      </div>
      <div className="flex">
        {auth.user === "" ? (
          <>
            <div className="bg-slate-800 text-white rounded-md w-16 text-center">
              <Link to="/register">Register</Link>
            </div>
            <div className="bg-slate-800 text-white rounded-md ml-3 w-16 text-center">
              <Link to="/login">Login</Link>
            </div>
          </>
        ) : (
          <div className="bg-slate-800 text-white text-center rounded-md ml-3 w-auto pr-2 pl-2 flex items-center">
            <Link to="/login" className="flex items-center">
              <p>{auth.userName}</p>
              <RiRadioButtonLine className="ml-2 animate-pulse text-green-500" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Nav;
