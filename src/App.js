import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  
  const apiUrl = 'https://api.icndb.com/jokes/random';
  const [ joke, setJoke ] = useState({});

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((res) => {
        console.log(res.data.value);
        this.setJoke({ joke: res.data.value });
      })
      .catch((error) => console.log(error));
  });


  return (
    <div className='App'>
      <p>ola</p>
    </div>
  );
};

export default App;
