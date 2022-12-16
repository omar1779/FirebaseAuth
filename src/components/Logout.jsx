import React from "react";
import { BiLogOut } from "react-icons/bi";
import { useAuth } from "../context/auth";
import { GiPlagueDoctorProfile } from "react-icons/gi";
function Logout() {
  const auth = useAuth();
  const username = localStorage.getItem("username");
  const logoutButton = () => {
    try {
      auth.logout();
    } catch (error) {
      console.log();
    }
  };
  return (
    <div className="flex w-4/6 bg-slate-400 rounded-xl shadow-2xl items-center justify-center flex-col py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center">
        <h1 className="text-xl font-semibold text-violet-900">Profile user</h1>
        <GiPlagueDoctorProfile className="ml-3 text-violet-900 animate-ping"/>
      </div>
      <div className="animate-pulse">
        <h2 className="font-thin">email : {auth.user}</h2>
        <h2 className="font-thin">
          username : {auth.userName ? auth.userName : username}
        </h2>
        <h2 className="font-thin text-sm">id : {auth.id} </h2>
      </div>
      <div
        className="flex mt-5 group relative w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 items-center"
        onClick={() => {
          logoutButton();
        }}
      >
        <p className="mr-2 text-base">logout</p>
        <BiLogOut className="h-5 w-5 animate-bounce" />
      </div>
    </div>
  );
}

export default Logout;
