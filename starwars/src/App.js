import React, {useState, useEffect} from 'react';
import Character from "./components/character"
import './App.css';
import axios from "axios";
import PageButtons from "./components/pageButtons"

const App = () => {

  const [data, setData] = useState()
  const [url, setUrl] = useState("https://swapi.co/api/people/")

  const handleNext = e => setUrl(data.next)
  const handlePrevious = e => setUrl(data.previous)

  useEffect(
    () => {
     axios.get(url) 
        .then(response => {
          setData(response.data)
        } )
        .catch(console.log)
    }, [url]
  )
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
if (!data) return <h2>Loading</h2>
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {data.results.map(currentCharacter => <Character character={currentCharacter} />)}
    <PageButtons handleNext={handleNext} handlePrevious={handlePrevious} data={data} />
    </div>
  );
}

export default App;