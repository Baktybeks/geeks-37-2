import React from 'react';
import classes from './PokemonList.module.scss';
import PokemonCard from '../pokemonCard/PokemonCard';


const PokemonList = ({pokemonList, handleShow}) => {
    return (
        <ul className={classes.list}>
            {
                pokemonList.map(pokemon=> <PokemonCard key={pokemon.name} pokemon={pokemon} handleShow={handleShow}/> )
            }
        </ul>
    );
};

export default PokemonList;