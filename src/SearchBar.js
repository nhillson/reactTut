import { useState } from "react";


function SearchBar(props) {
    const [state, setState] = useState({
        name: "",
        price: 0,
        type: "",
        brand: "",
    })
    return (
        <div>
            <h2>Search for an item</h2>
            <form>
                <label for="name-field">Name: </label>
                <input id="name-field" type="text" value={state.name} onChange = { (event) => setState({
                    ...state,
                    name: event.target.value
                })}></input>
                <label for="price-field">Max Price: </label>
                <input id="price-field" type="number" value={state.price} onChange = { (event) => setState({
                    ...state,
                    price: event.target.value
                })}></input>
                <label for="type-field">Type: </label>
                <input id="type-field" type="text" value={state.type} onChange = { (event) => setState({
                    ...state,
                    type: event.target.value
                })}></input>
                <label for="brand-field">Brand: </label>
                <input id="brand-field" type="text" value={state.brand} onChange = { (event) => setState({
                    ...state,
                    brand: event.target.value
                })}></input>
                <button type="button">Search</button>
            </form>
        </div>
    );
}
export default SearchBar;