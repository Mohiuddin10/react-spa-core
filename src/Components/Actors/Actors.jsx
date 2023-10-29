import './Actors.css'
const Actors = ({ actor, handleAddToCart }) => {
    const { age, country, image, name, role, salary } = actor;
    return (
        <>
            <div className="actor-section">
                <div className="card-img">
                    <img className='card-img' src={image} alt="" />
                </div>
                <h2>{name}</h2>
                <p><small>Age: {age}</small></p>
                <p><small>Country: {country}</small></p>
                <p><small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia eos a eaque animi nobis eveniet sapiente adipisci rem doloribus saepe.</small></p>
                <div className="info">
                    <p>salary: {salary}</p>
                    <p>{role}</p>
                </div>
                <button onClick={() => handleAddToCart(actor)} className='card-btn'>Select</button>
            </div>

        </>
    );
};

export default Actors;