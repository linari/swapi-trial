import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_DETAILS } from '../graphql/Queries';
import './css/Details.css';
import MovieCard from './MovieCard';
/* Details.js - for a character details page */
/* the character id is in query so we take param from the url query here */
const queryParams = new URLSearchParams(window.location.search);
const characterID = queryParams.get('id');

function Details() {
  /* Getting the details from api with given character id */
  const { loading, error, data } = useQuery(GET_DETAILS, {
    variables: {id: characterID}
  });

  if (loading) return (
    <div className="main-content main-content--align-middle">
      <div className="error-msg">Loading...</div>
    </div>
  )

  if (error) return (
    <div className="main-content main-content--align-middle">
      <div className="error-msg">
        <p>Sorry but I can't get any data about this character...</p>
        <p>Let's try to reload the page or go back to <a href="/">home page</a></p></div>
    </div>
  )

  return (
    <div className='main-content main-content__details'>      
      <h1>{data.person.name}</h1>
      <div className="details__container">        
        {data && (
          <>
            <ul className="details__description">
              <li><strong>Planet:</strong> {data.person.homeworld.name}</li>
              <li><strong>Birth year:</strong> {data.person.birthYear}</li>
              {data.person.gender !== 'n/a' && (
                <li><strong>Gender:</strong> {data.person.gender}</li>
              )}
              {data.person.species && (
                <li><strong>Species:</strong> {data.person.species.name}</li>
              )}
            </ul>
            <h2>The list of the movies where you can see {data.person.name} </h2>
            <div className="details__movies-list">
              {data.person.filmConnection.films.map((movie, id) => (
                <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                releaseDate={movie.releaseDate}
                director={movie.director}
                openingCrawl={movie.openingCrawl}
                episodeID={movie.episodeID}
              />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Details
