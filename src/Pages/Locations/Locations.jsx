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
    <div className="locationsMain">
      <h1 className="titreLocation">Nos Locations
      </h1>
      <p className='sousTitreLocation'>(Louez nos materiels et équipements. Ils sont entretenues et toujours prés à l'emplois)</p>
      <p></p>
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
