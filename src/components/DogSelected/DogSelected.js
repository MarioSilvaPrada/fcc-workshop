import React from 'react';
import './DogSelected.css';

const DogSelected = ({ name }) => {
    if(name) {
        return <h1 className='isSelected'>You just selected {name}</h1>
    }
    else {
        return <h1 className='isNotSelected'>Please select your dog</h1>
    }
};

export default DogSelected;
