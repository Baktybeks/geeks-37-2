import React, { useEffect, useState } from 'react';
import classes from './PokemonPage.module.scss';
import PokemonList from '../../components/pokemonList/PokemonList';
import axios from 'axios';


const PokemonPage = () => {
    const [pokemonList, setPokemonList] = useState([])
    const [loading, setLoading] = useState(false)
    console.log(pokemonList);
    const limit= 12
    const offset = 0

    const getPokemon = async() => {
        setLoading(true)
        try {
            const response = await axios(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`);
            return response.data.results;
        } catch(e) {
            console.log(e.message)
        } finally {
            setLoading(false)
        }
    };

    const handleShow = () => {
        console.log('handleShow');
    }
    useEffect(()=>{
        getPokemon().then(pokemons=> setPokemonList(pokemons))
    },[])

    return (
        <div className={classes.wrapper}>
            <p className={classes.title}>Pokemon</p>
            {
                loading ? 'loading' : <PokemonList pokemonList={pokemonList} handleShow={handleShow}/>
            }

        </div>
    );
};

export default PokemonPage;