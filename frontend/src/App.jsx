import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([]);
  useEffect(()=>{
    axios.get('/api/jokes')
    .then(response => {
      setJokes(response.data);
    })
    .catch(error=>{
      console.error('Error fetching jokes:', error);
    });
  });
  return (
    <>
      <h2>Jokes</h2>
      <h4>Jokes Length: {jokes.length}</h4>
      <ul>
        {
          jokes.map((joke, index) => {
            return (
              <li key={index}>
                <h3>{joke.title}</h3>
                <p>{joke.text}</p>
              </li>
            );
          })
        }
      </ul>
    </>
  )
}

export default App
