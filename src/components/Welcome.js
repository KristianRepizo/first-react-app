import React from 'react';
import { Link } from 'react-router-dom';
import imgWelcome from '../img/log-5.png';
import '../styles/welcome.css';

const Welcome = () => {

    return(
        <div className='container-welcome'>
            <label>Welcome To PokeCollection</label>

            <div className='img-welcome'>
                <img className="image-welcome" src={imgWelcome} alt='' />
            </div>

            <div className='button'>
                <Link to='/Games'>
                    <a href="#!">See Pokemons</a>
                </Link>
            </div>
        </div>
    )
}

export default Welcome;