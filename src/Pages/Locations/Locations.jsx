import React, { useEffect, useState } from 'react';
import "./index.css";

const Locations = () => {

  const [items, setItems] = useState([]);

  const fetchItems = () => {
    fetch('https://api-cazalet.vercel.app/items')
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => console.error('Error fetching items:', error));
  };
  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="lcoationsMain">
      <h1 className="titreEnAttente">Nous préparons la liste de tout le materiel que vous aurez besoin.<br/>
      Revenez vite...
      </h1>
      <div className='blockCard'>    
      {items.map(item => (
        <div className='locationsCard' key={item._id} style={{ border: '1px solid #ccc', margin: '8px', padding: '8px' }}>
          <img src={item.imageUrl} alt={item.title}  />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Locations;
