
import React, { useEffect, useState } from 'react';

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  
  // Fetch items from the API
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = () => {
    fetch('http://api-cazalet.vercel.app/items')
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => console.error('Error fetching items:', error));
  };

  const handleEdit = (item) => {
    setIsEditing(true);
    setCurrentItem(item);
  };

  const handleDelete = (id) => {
    
    const token = localStorage.getItem('token');
    fetch(`http://api-cazalet.vercel.app/${id}`, {
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
    <form onSubmit={handleEditSubmit}>
      <input value={editedItem.title} onChange={e => setEditedItem({ ...editedItem, title: e.target.value })} placeholder="Title" />
      <input value={editedItem.description} onChange={e => setEditedItem({ ...editedItem, description: e.target.value })} placeholder="Description" />
      <input value={editedItem.imageUrl} onChange={e => setEditedItem({ ...editedItem, imageUrl: e.target.value })} placeholder="Image URL" />
      <button type="submit">Update</button>
    </form>
  );
}

return (
    <div>
      {items.map(item => (
        <div key={item._id} style={{ border: '1px solid #ccc', margin: '8px', padding: '8px' }}>
          <img src={item.imageUrl} alt={item.title} style={{ maxWidth: '200px' }} />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <button onClick={() => handleEdit(item)}>Edit</button>
          <button onClick={() => handleDelete(item._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
