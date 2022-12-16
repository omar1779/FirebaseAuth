import React from "react";
import { useAuth } from "../context/auth";
import { Navigate } from "react-router-dom";
function Admin() {
  const auth = useAuth();
  const user = localStorage.getItem("role");
  if (user !== "admin") {
    console.log(localStorage.getItem("role"), "rol");
    return <Navigate to="/" />;
  }
  return (
    <div>
      <h1 className="text-white text-4xl text-center">adminPanel</h1>
      {auth.user === "omarcode226@gmail.com" ? (
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam ex
          repellendus rem, illum voluptatum facere praesentium, dolores
          obcaecati eaque similique aperiam exercitationem numquam maxime
          aspernatur, quidem nesciunt accusamus non. Laboriosam? Dolorum,
          corrupti? Beatae, quo! Et quis adipisci excepturi reprehenderit
          officiis ullam amet? Eum ut aperiam quibusdam nobis sequi sunt nostrum
          cum omnis perspiciatis atque nesciunt exercitationem, facilis minus
          facere commodi. Fuga placeat
        </p>
      ) : (
        <div> <h1 className="text-white text-2xl text-center">no eres un super user</h1></div>
      )}
    </div>
  );
}

export default Admin;
