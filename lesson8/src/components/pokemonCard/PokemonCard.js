import React, { useEffect, useState } from 'react';
import classes from './PokemonCard.module.scss';
import axios from 'axios';


const PokemonCard = ({ pokemon, handleShow }) => {
    const [ pokemonItem, setPokemonItem ] = useState({});
    const [ loading, setLoading ] = useState(false);

    console.log(pokemonItem, 'pokemonpokemonpokemon');

    const getPokemon = async() => {
        setLoading(true);
        try {
            const response = await axios(pokemon.url);
            return response.data;
        } catch(e) {
            console.log(e.message);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        getPokemon().then(pokemonOne => setPokemonItem(pokemonOne));
    }, []);

    return (
        <li className={classes.pokemonItem}>
            {
                loading ? 'loading' : <>
                    <div className={classes.imgBox}>
                        <img src={pokemonItem?.sprites?.other?.dream_world?.front_default} alt="pokemon img"/>
                    </div>
                    <p>{pokemon.name}</p>
                    <button onClick={handleShow}>подробнее</button>
                </>}
        </li>
    );
};

export default PokemonCard;