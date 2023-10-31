import { useEffect } from 'react';
import './Home.css'
import { useState } from 'react';
import Actors from '../Actors/Actors';
import SelectedActors from '../SelectedActors/SelectedActors';
import Cart from '../Cart/Cart';
const Home = () => {
    const [allActors, setAllActors] = useState([]);
    const [totalSpend, setTotalSpand] = useState(0);
    const [reamining, setRemaining] = useState(0);
    const [selectedActors, setSelectorActors] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/gias-uddin-swe/B8-final-Bpl-team-maker/main/public/data.json')
            .then(res => res.json())
            .then(data => setAllActors(data))
    }, [])

    const handleAddToCart = actor => {
        const isExist = selectedActors.find(selectedActor => selectedActor.id == actor.id);
        let count = actor.salary;
        if (isExist) {
            return alert('Already booked')
        }
        else {
            selectedActors.map(item => {
                count += item.salary;
            })
            setSelectorActors([...selectedActors, actor]);
        }
        console.log(count);
    }

        return (
            <>
                <h2 className='text-white'>Welcome from Home Actors: {allActors.length}</h2>
                <div className="flex">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-3/4">
                        {
                            allActors.map(actor => <Actors
                                actor={actor}
                                handleAddToCart={handleAddToCart}
                                key={actor.id}></Actors>)
                        }
                    </div>
                    <Cart selectedActors={selectedActors}></Cart>
                </div>
            </>
        );
    };

    export default Home;