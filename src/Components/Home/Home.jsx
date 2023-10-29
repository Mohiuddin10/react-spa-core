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
            <h2>Welcome from Home Actors: {allActors.length}</h2>
            <div className="actors-container">
                <div className="card-container">
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