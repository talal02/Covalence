import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Film = () => {
  
  const [film, setFilm] = useState({});

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/films/${id}`)
    .then(res => res.json())
    .then(Film => setFilm(Film))
    .catch(err => alert(err));
  },[id]);

  return(
    <>
    <Navbar />
    <div className="fluid-container text-center m-5">
      <div className="card mb-3 shadow p-5" key={film.id}>
        <img src={film.image} alt="banner" />
        <h1 style={{ 'textDecoration' : 'none' }} className="display-6 mt-3 mb-2 text-warning">{film.title} | <span style={{ 'fontSize' : 'x-large' }}>{film.original_title}</span></h1>
        <p className="card-text mt-2 text-primary">{film.description}</p>
        <p  style={{ 'fontSize':'x-large', 'fontStyle':'italic' }} className="h6 display-6 mt-2 mb-4 text-success">This Movie has Running Time of around {film.running_time} & with rating of {film.rt_score}</p>
        <p className="h6">Directed By {film.director} & Produced By {film.producer} In {film.release_date}</p>
      </div>
    </div>
  </>
  );
}

export default Film;