
const Cart = ({selectedActors}) => {
    return (
        <div className="">
            <h2>Selected Actors: {selectedActors.length}</h2>
           {
            selectedActors.map(selectedActor => <li className="text-left">{selectedActor.name}</li>)
           } 
        </div>
    );
};

export default Cart;