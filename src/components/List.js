import React from 'react';
import './css/List.css';
import ListItem from './ListItem';
import { useQuery } from '@apollo/client';
import { ALL_PEOPLE } from '../graphql/Queries';
/* List for film characters  */
/* The api query ALL_PEOPLE takes the data to get all characters we have */
function List() {
  const { loading, error, data } = useQuery(ALL_PEOPLE);

  if (loading) return (
    <div className="main-content main-content--align-middle">
      <div className="error-msg">Loading...</div>
    </div>
  )
  
  if (error) return (
    <div className="main-content main-content--align-middle">
      <div className="error-msg">Hm... Something is wrong.</div>
    </div>
  )

  return (
    <div className="characters">
      <div className="characters__container">
        <div className="characters__wrapper">
          <div className="character__items">
            {data.allPeople.people.map((people, id) => (
              <ListItem
                key={people.id}
                id={people.id}
                name={people.name}
                birth={people.birthYear}
                gender={people.gender}
                species={people.species}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default List

