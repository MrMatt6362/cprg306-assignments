"use client"
import { useState } from "react";

export default function ShoppingForm() {

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

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

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Item: 
                <input type="text" placeholder="Enter item name" value={name} onChange={handleNameChange}/>
            </label>
            <label>
                Quantity: 
                <input type="number" min="1" max="99" value={quantity} onChange={handleQuantityChange}/>
            </label>
            <label>
                Category: 
            </label>
            <input type="submit" value="[ + ]" />
        </form>
    );
}