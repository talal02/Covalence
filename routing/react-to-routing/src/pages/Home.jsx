import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="card shadow p-5">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/265330/logo.png" alt="banner" />
          <a href="https://ghibliapi.herokuapp.com" style={{ 'textDecoration' : 'none' }} className="display-6 mt-3 mb-2 text-warning">Studio Ghibli API</a>
          <p className="card-text mt-2 text-primary">The Studio Ghibli API catalogs the people, places, and things found in the worlds of Ghibli. It was created to help users discover resources, consume them via HTTP requests, and interact with them in whatever way makes sense. Navigation can be found on the left sidebar, and the right sidebar shows examples of returned objects for successful calls.</p>
        </div>
      </div>
    </>
    
  );
}

export default Home;