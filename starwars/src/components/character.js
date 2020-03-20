import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';

const Character = (props) => {
const species = props.character.species[0]
let whatSpecies;
if (species === "https://swapi.co/api/species/1/") {
  whatSpecies = "Human"
} else if (species === "https://swapi.co/api/species/2/") {
  whatSpecies = "Droid"
} else if (species === "https://swapi.co/api/species/3/") {
  whatSpecies = "Wookie"
} else if (species === "https://swapi.co/api/species/4/") {
  whatSpecies = "Rodian"
} else if (species === "https://swapi.co/api/species/5/") {
  whatSpecies = "Hutt"
} else {
  whatSpecies = "Other/Undisclosed"
}



  return (
    <div>
      <div>
      <h1>Name: ${props.character.name}</h1>
      </div>
      <div>
        <ul>

        <li>Gender: {props.character.gender}</li>
        <li>Species: ${whatSpecies}</li>
        <li>Home: {props.character.homeworld}</li>
        </ul>
      </div>
    </div>
  );
}

export default Character;
