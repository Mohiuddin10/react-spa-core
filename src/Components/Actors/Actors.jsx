import './Actors.css'
const Actors = ({ actor, handleAddToCart }) => {
    const { age, country, image, name, role, salary } = actor;
    return (
        <>
            <div className="actor-section border-2 rounded-xl m-4 p-4">
                <div className="card-img">
                    <img className='card-img rounded-full mx-auto' src={image} alt="" />
                </div>
                <h2 className='text-white'>{name}</h2>
                <p><small className='text-white'>Age: {age}</small></p>
                <p><small className='text-white'>Country: {country}</small></p>
                <p><small className='text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia eos a eaque animi nobis eveniet sapiente adipisci rem doloribus saepe.</small></p>
                <div className="flex justify-between text-white">
                    <p className='text-xm'>salary: {salary}</p>
                    <p className='text-xm'>{role}</p>
                </div>
                <button onClick={() => handleAddToCart(actor)} className='btn btn-primary card-btn'>Select</button>
            </div>

        </>
    );
};

export default Actors;