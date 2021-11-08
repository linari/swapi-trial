import React, { useState } from 'react'
/* Movie Card information is requested in Details page to show the info of the film */
function MovieCard(props) {
  /* This part is for showing/hiding opening crawl */
  const [showOpening, setShowOpening] = useState(false);
  const handleClick = () => setShowOpening(!showOpening);

  return (
    <div className="movie-card">
      <h3>{props.title}</h3>
      <div className="movie-card__wrapper">
        <div className="movie-card__date"><label>release date:</label>{props.releaseDate}</div>
        <div className="movie-card__director"><label>Director:</label>{props.director}</div>
      </div>      
      <button className="movie_card__toggle" onClick={handleClick}>See the opening</button>
      <div className={showOpening ? 'movie-card__opening--visible' : 'movie-card__opening--hidden'}>
        <div className="movie-card__opening-wrapper">
          <div className="movie-card__opening-close" onClick={handleClick}>x</div>
          <div className="movie-card__opening-crawl">
            <h3>Episode {props.episodeID}: {props.title}</h3>
            {props.openingCrawl}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieCard
