import React from 'react';
import Image from '../img/cardBackground.jpg'
import { Card, Col, CardTitle, CardText } from 'reactstrap';
import Styled from "styled-components"



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

const world = props.character.homeworld
let whatWorld;
if (world === "https://swapi.co/api/planets/1/") {
  whatWorld = "Tatooine"
} else if (world === "https://swapi.co/api/planets/26/") {
  whatWorld = "Eriadu"
} else if (world === "https://swapi.co/api/planets/28/") {
  whatWorld = "Unknown"
} else if (world === "https://swapi.co/api/planets/21/") {
  whatWorld = "Naboo"
} else {
  whatWorld = "Other/Undisclosed"
}

  return (
    <Col sm="2">
      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333', width: "15rem", margin: "5%", boxShadow: "10px 10px 8px 10px ##808080" }}>
        <CardTitle>Name: {props.character.name}</CardTitle>
        <CardText>Gender: {props.character.gender}</CardText>
        <CardText>Species: {whatSpecies}</CardText>
        <CardText>Home: {whatWorld}</CardText>
      </Card>
    </Col>
  );
}

export default Character;
