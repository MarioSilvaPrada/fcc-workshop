import React from 'react';
import './DogCards.css';

// import data from 'data' folder
import dogs from '../../data/dogs';


const DogCards = (props) => {
  return (
    <div className='all-dogs'>
      {dogs.map((dog, i) => (
        <div key={i} onClick={() => props.selectDog(dog.name)} className='dog-card'>
          <h1>Name: {dog.name}</h1>
          <p>Breed: {dog.breed}</p>
          <p>Age: {dog.age}</p>
        </div>
      ))}
    </div>
  );
};

export default DogCards;
