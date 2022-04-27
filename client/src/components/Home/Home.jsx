import React from 'react'
import './Home.css';
import Fridge from '../Fridge/Fridge';
import Pantry from '../Pantry/Pantry';

const Home = () => {
    return (
        <div>
            <div className='container'>
                <div className='component'>
                    <Fridge />
                </div>
                <div className='component'>
                    <Pantry />
                </div>
            </div>
        </div>
    )
}

export default Home