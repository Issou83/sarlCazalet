import React, { useEffect, useState } from 'react';
import  "./ItemList.css"

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  
  // Fetch items from the API
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = () => {
    fetch('https:////api-cazalet.vercel.app/items')
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => console.error('Error fetching items:', error));
  };

  
const handleUpdate = async () => {
    const token = localStorage.getItem("token");

    const response = await fetch(`https://api-cazalet.vercel.app/items/${currentItem._id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(editedItem)
    });

    const data = await response.json();

    if (data) {
        setIsEditing(false);
        // Refresh the items list to reflect the updated item
        fetchItems();
    }
};


const handleEdit = (item) => {
    setIsEditing(true);
    setCurrentItem(item);
    setEditedItem(item);  // Add this line to also update editedItem
};

  const handleDelete = (id) => {
    
    const token = localStorage.getItem('token');
    fetch(`https://api-cazalet.vercel.app/items/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    
      .then(() => {
        fetchItems();  // Refresh the items list after deletion
      })
      .catch(error => console.error('Error deleting item:', error));
  };
  
  
const [editedItem, setEditedItem] = useState({ title: '', description: '', imageUrl: '' });

const handleEditSubmit = (e) => {
  e.preventDefault();
  // Logic to send the updated item to the API can be added here
  setIsEditing(false);
};

if (isEditing && currentItem) {
  return (
    <div className='locationForm'>
      <p></p>
    <form onSubmit={handleEditSubmit}>
      <input value={editedItem.title} onChange={e => setEditedItem({ ...editedItem, title: e.target.value })} placeholder="Title" />
      <input value={editedItem.description} onChange={e => setEditedItem({ ...editedItem, description: e.target.value })} placeholder="Description" />
      <input value={editedItem.imageUrl} onChange={e => setEditedItem({ ...editedItem, imageUrl: e.target.value })} placeholder="Image URL" />
      <button className='bouttonUpdate' onClick={handleUpdate}>Update</button>
    </form>
    </div>
  );
}

return (
    <div className='locationsMain nobackground'>
      <h3>Matériels à louer</h3>
      <div className='blockListLocations'>
      {items.map(item => (
        <div className='locationsCard parents' key={item._id} >
          <img src={item.imageUrl} alt={item.title} />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <button className='bouttonEditer' onClick={() => handleEdit(item)}>Editer</button> 
          <button className='bouttonSupprimé' onClick={() => handleDelete(item._id)}>Supprimé</button>
        </div>
      ))}
      </div>
    </div>
  );
};

export default ItemList;
