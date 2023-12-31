import React, { useEffect, useState } from 'react';
import "./index.css";

const Locations = () => {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);  // 1. Add new state for loading

  const fetchItems = () => {
    fetch('https://api-cazalet.vercel.app/items')
      .then(response => response.json())
      .then(data => {
        setItems(data);
        setIsLoading(false);  // 2. Set loading to false when data is fetched
      })
      .catch(error => {
        console.error('Error fetching items:', error);
        setIsLoading(false);  // Set loading to false even on error
      });
  };
  
  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="locationsMain">
      <h1 className="titreLocations">Nos locations</h1>
      <p className='sousTitreLocation'>(Louez nos materiels et équipements. Ils sont entretenues et toujours prés à l'emplois)</p>
      {
        isLoading ? (  // 3. Conditional rendering based on loading state
        <div className="spinner center">
        <div className="spinner-blade"></div>
        <div className="spinner-blade"></div>
        <div className="spinner-blade"></div>
        <div className="spinner-blade"></div>
        <div className="spinner-blade"></div>
        <div className="spinner-blade"></div>
        <div className="spinner-blade"></div>
        <div className="spinner-blade"></div>
        <div className="spinner-blade"></div>
        <div className="spinner-blade"></div>
        <div className="spinner-blade"></div>
        <div className="spinner-blade"></div>
    </div>
        ) : (
            <div className='blockCard'>    
            {items.map(item => (
              <div className='locationsCard' key={item._id} style={{ border: '1px solid #ccc', margin: '8px', padding: '8px' }}>
                <img src={item.imageUrl} alt={item.title}  />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
            </div>
          )
      }
    </div>
  );
};

export default Locations;
