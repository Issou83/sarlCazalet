import React, { useState, useEffect } from 'react';
import ItemForm from './ItemForm';
import ItemList from './ItemList';

function AdminDashboard() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        const response = await fetch('http://localhost:3001/items');
        const data = await response.json();
        setItems(data);
    };

    const addItem = (item) => {
        setItems([...items, item]);
    };

    return (
        <div className='adminMain'>
            <h2 className='titleItems'>Gestion des locations</h2>
            <div>
                <ItemForm onItemAdded={addItem} />
            </div>
            <div>
                <ItemList items={items} />
            </div>
        </div>
    );
}

export default AdminDashboard;
