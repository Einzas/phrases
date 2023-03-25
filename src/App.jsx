import { useEffect, useState } from "react";
import "./App.css";
import Phrase from "./components/Phrase";
import db from "./db/db.json";
import 'boxicons';
const images =["bg-1", "bg-2", "bg-3", "bg-4"]

function App() {
  
  const handleGetPhrase = (data) => {
    let randomNumber = Math.floor(Math.random() * data.length);
    let phrase = data[randomNumber];
    return phrase;
  };
  const [background, setBackground] = useState(handleGetPhrase(images));
  const [phrase, setPhrase] = useState(handleGetPhrase(db));
  const handleSetPhrase = () => {
    setPhrase(handleGetPhrase(db));
    setBackground(handleGetPhrase(images));
  };


  return (
    <div className={`App ${background}`}>
    <Phrase phrase={phrase}  handleSetPhrase={handleSetPhrase} ></Phrase>
    </div>
  );
}

export default App;
