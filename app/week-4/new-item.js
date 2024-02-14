"use client"
import { useState } from "react";

export default function ShoppingForm() {

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");

    const handleSubmit = (event) => {
      event.preventDefault();
      let item = {name, quantity, category};
      console.log(item);
      alert("Added item: " + item.name + ", quantity: " + item.quantity + ", category: " + item.category);
      setName("");
      setQuantity(1);
      setCategory("produce");
    }

    const handleNameChange = (event) => {
        setName(event.target.value.toString());
    };

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    return (
        <div className="w-full max-w-md bg-slate-700 rounded-lg">
        <form onSubmit={handleSubmit}>
            <label className="block mb-3">
                Item:   
                <input required type="text" className="text-black" placeholder="Enter item name" value={name} onChange={handleNameChange}/>
            </label>
            <label className="block mb-3">
                Quantity: 
                <input required type="number" className="text-black" min="1" max="99" value={quantity} onChange={handleQuantityChange}/>
            </label>
            <label className="block mb-3">
                Category: 
                <select
                    value={category}
                    onChange={handleCategoryChange}
                    className="text-black"
                >
                    <option value="Produce">Produce</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Bakery">Bakery</option>
                    <option value="Meat">Meat</option>
                    <option value="Frozen Foods">Frozen Food</option>
                    <option value="Canned Goods">Canned Goods</option>
                    <option value="Dry Goods">Dry Goods</option>
                    <option value="Beverages">Beverages</option>
                    <option value="Snacks">Snacks</option>
                    <option value="Household">Household</option>
                    <option value="Other">Other</option>
                </select>
            </label>
            <button type="submit" className="bg-green-300 text-white">Submit</button>
        </form>
        </div>
    );
}