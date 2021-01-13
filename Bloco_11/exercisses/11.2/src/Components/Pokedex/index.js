import React from 'react';

import Pokemon from '../Pokemon';

import './style.css'

export default function Pokedex(props) {

  const { pokemons } = props.list

  return (
    <div>
      <div className='list'>
        {pokemons.map(pokemon => <Pokemon data={pokemon} />)}
      </div>
    </div>
  );
}
