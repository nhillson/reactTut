import { useState } from "react";


function SearchBar(props) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [type, setType] = useState("");
    const [brand, setBrand] = useState("");
    return (
        <div>
            <h2>Search for an item</h2>
            <form>
                <label for="name-field">Name: </label>
                <input 
                    id="name-field" 
                    type="text" 
                    value={name} 
                    onChange={ (event) => setName(event.target.value)}
                />
                <label for="price-field">Max Price: </label>
                <input 
                    id="price-field" 
                    type="number" 
                    value={price} 
                    onChange={ (event) => setPrice(event.target.value)}
                />
                <label for="type-field">Type: </label>
                <input 
                    id="type-field" 
                    type="text" 
                    value={type} 
                    onChange={ (event) => setType(event.target.value)}
                />
                <label for="brand-field">Brand: </label>
                <input 
                    id="brand-field" 
                    type="text" 
                    value={brand} 
                    onChange={ (event) => setBrand(event.target.value)}
                />
                <button type="button">Search</button>
            </form>
        </div>
    );
}
export default SearchBar;