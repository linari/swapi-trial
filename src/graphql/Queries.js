import {gql} from '@apollo/client';
/* All queries for swapi in one place */
/* This query is used in a List page to get all film charaters */
export const ALL_PEOPLE = gql`
{
  allPeople {
    people {id, name, birthYear, gender,
      homeworld{
        name
      },
      species {
        name, classification
      },
      filmConnection {
        films {title}
      }
    }
  }
}`
/* This query is used in a Details page to get info about character and its movies list */
export const GET_DETAILS = gql`
  query person ($id: ID!) {
    person(id: $id) {
      id
      name
      birthYear
      gender
      homeworld {
        name
      }
      species {
        name
        classification
      }
      filmConnection {
        films {
          id
          title
          episodeID
          openingCrawl
          director
          releaseDate
        }
      }
    }
  }`