
const Cart = ({selectedActors, totalSpend, remaining}) => {
    return (
        <div className="">
            <h2>Selected Actors: {selectedActors.length}</h2>
            <h3>Total Spend: {totalSpend}</h3>
            <h4>Remaining Budget: {remaining}</h4>
           {
            selectedActors.map(selectedActor => <li className="text-left">{selectedActor.name}</li>)
           } 
        </div>
    );
};

export default Cart;