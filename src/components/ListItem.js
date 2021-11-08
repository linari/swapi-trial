import React from 'react'
// import { Link } from 'react-router-dom';
/* This part is for rendering a Character card in the list of film characters */
/* it is requested in List.js file */
function ListItem(props) {

  return (
    <div className="character-item">
      <h3 className="character-item__name character-item--full-width">{props.name}</h3>
      <div>
        <div className="character-item__birth character-item--full-width">
        <label>Birth Year:</label>
          {props.birth}
        </div>
        {props.species &&
          <div className="character-item__species character-item--full-width">
            <label>Species:</label>
            <span className="character-item__species__name">{props.species['name']}</span>
        </div>
        }
      </div>
      <a className="link" href={'/details?id=' + props.id}>Find out more!</a>
      {/* <Link className="link" to={'/details?id=' + props.id}>Find out more!</Link> */}
    </div>
  )
}

export default ListItem
