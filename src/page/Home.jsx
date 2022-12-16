import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
function Home() {
  return (
    <div className="h-full flex flex-col justify-between items-center">
      <Nav />
      <div className="">
        <h1 className="text-yellow-600 text-3xl shadow-2xl shadow-yellow-600">Soy el Home</h1>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
