import { useEffect } from 'react';
import './Home.css'
import { useState } from 'react';
import Actors from '../Actors/Actors';
const Home = () => {
    const [allActors, setAllActors] = useState([]);
    const [selectedActors, setSelectorActors] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/gias-uddin-swe/B8-final-Bpl-team-maker/main/public/data.json')
            .then(res => res.json())
            .then(data => setAllActors(data))
    }, [])
    
    const handleAddToCart = actor => {
        setSelectorActors([...selectedActors, actor]);
    }
    console.log(selectedActors);
    return (
        <>
            <h2 className='text-white'>Welcome from Home Actors: {allActors.length}</h2>
            <div className="flex">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        allActors.map(actor => <Actors
                        actor = {actor}
                        handleAddToCart = {handleAddToCart}
                        key = {actor.id}></Actors>)
                    }
                </div>
                <div className="cart-container">
                    Actor Cart
                </div>
            </div>
        </>
    );
};

export default Home;