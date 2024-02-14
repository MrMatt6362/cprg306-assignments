"use client"
import { useState } from "react";

export default function ShoppingForm() {

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleSubmit = (event) => {
      event.preventDefault();
      alert("Added item: " + name + ", quantity: " + quantity + ", category: " + category);
    }

    const handleChange = () => {

    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Item:
                <input type="text" placeholder="Enter item name" value={name} onChange={handleChange}/>
            </label>
            <input type="submit" value="[ + ]" />
        </form>
    );
}