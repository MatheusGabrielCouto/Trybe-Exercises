import React from 'react';

import './style.css'

export default function Cards(props) {

  const { name, type, image, weight, nextEvolution } = props.data

  return (
    <div className='container'>
      <div>
        <h3>{name}</h3>
        <p>Type: {type}</p>
        <p>weight: {weight} Kg</p>
        <p>Next Evolution: {nextEvolution}</p>
      </div>
      <div className='image'>
        <img src={image} alt=""/>
      </div>
    </div>
  );
}
