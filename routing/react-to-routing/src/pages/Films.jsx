import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Films = () => {

  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch('https://ghibliapi.herokuapp.com/films')
    .then(res => res.json())
    .then(allFilms => setFilms(allFilms))
    .catch(err => alert(err));
  },[]);

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        {
          films.map(film => {
            return(
              <div className="card mb-3 shadow p-5" key={film.id}>
                <img src={film.movie_banner} alt="banner" />
                <Link to={`/films/${film.id}`} style={{ 'textDecoration' : 'none' }} className="display-6 mt-3 mb-2 text-warning">{film.title} | <span style={{ 'fontSize' : 'x-large' }}>{film.original_title}</span></Link>
                <p className="card-text mt-2 text-primary">{film.description}</p>
                <p className="h6">Directed By {film.director} & Produced By {film.producer} In {film.release_date}</p>
              </div>
            );
          })
        }
      </div>
    </>
  );
}

export default Films;