import { useEffect } from 'react';
import './Home.css'
import { useState } from 'react';
const Home = () => {
    const [allActors, setAllActors] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/gias-uddin-swe/B8-final-Bpl-team-maker/main/public/data.json')
            .then(res => res.json())
            .then(data => setAllActors(data))
    }, [])
    return (
        <>
            <h2>Welcome from Home Actors: {allActors.length}</h2>
            <div className="actors-container">
                <div className="card-container">
                    <div className="card-img">
                        <img className='card-img' src="https://i.ibb.co/YQgHzvL/Stan-Lee-610719480.jpg" alt="" />
                    </div>
                    <h2>Mohammad Mohiuddin</h2>
                    <p><small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia eos a eaque animi nobis eveniet sapiente adipisci rem doloribus saepe.</small></p>
                    <div className="info">
                        <p>salary: 200</p>
                        <p>Writer</p>
                    </div>
                    <button className='card-btn'>Select</button>
                </div>
                <div className="cart-container">
                    Actor Cart
                </div>
            </div>
        </>
    );
};

export default Home;