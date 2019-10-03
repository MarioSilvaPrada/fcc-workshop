import React from 'react';
import './App.css';
import dogs from './data/dogs';

//Component
import DogSelected from './components/DogSelected/DogSelected';

class App extends React.Component {
  // const [ dog, selectDog ] = useState('');
  state = {
    dog: ''
  }
  
  render() {
    return (
      <div className='App'>
        <div className='all-dogs'>
          {dogs.map((dog, i) => (
            <div key={i} onClick={() => this.setState({dog: dog.name})} className='dog-card'>
              <h1>Name: {dog.name}</h1>
              <p>Breed: {dog.breed}</p>
              <p>Age: {dog.age}</p>
            </div>
          ))}
        </div>
        
        <DogSelected name={this.state.dog}/> 
  
      </div>
    );
  }
  
};

export default App;



