import React, { useState } from 'react';
import "./ItemForm.css"

function ItemForm({ onItemAdded }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");  // Renommé image en imageUrl

    const handleSubmit = async (event) => {
        event.preventDefault();

        const itemData = {
            title,
            description,
            imageUrl  // Utilisez imageUrl ici
        };

        const token = localStorage.getItem("token");

        const response = await fetch('http://api-cazalet.vercel.app/items', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json'
            }
        ,
            body: JSON.stringify(itemData)
        });

        const data = await response.json();

        if (data.success) {
            onItemAdded(data.item);
            setTitle("");
            setDescription("");
            setImageUrl("");  // Réinitialisez imageUrl
            fetchItems();  // Refresh the items list after deletion

        } else {

        }
    };

    return (
        <div>
            <h3>Ajout d'une nouvelle location</h3>
        <div className='locationForm'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nom de l'équipement: </label>
                    <input 
                        type="text" 
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Description: </label>
                    <textarea 
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div>
                    <label>Image URL: </label>
                    <input 
                        type="text"
                        value={imageUrl}
                        onChange={e => setImageUrl(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <button type="submit">Add</button>
                </div>
            </form>
        </div>
        </div>
    );
}

export default ItemForm;
