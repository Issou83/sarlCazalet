import React, { useState, useEffect } from 'react';
import './index.css';

const NouveauLocations = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showPromotion, setShowPromotion] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const fetchItems = () => {
    fetch('https://api-cazalet.vercel.app/items')
      .then(response => response.json())
      .then(data => {
        setItems(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching items:', error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchItems();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => {
        let newIndex = Math.floor(Math.random() * items.length);
        while (newIndex === prevIndex && items.length > 1) {
          newIndex = Math.floor(Math.random() * items.length);
        }
        return newIndex;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [items]);

  return (
    <div className='newContent'>
      <button className='btnNews' onClick={() => setShowPromotion(!showPromotion)}>
        <h3>NOUVEAU !</h3>
      </button>
      <div className={`itemsPromotion ${showPromotion ? 'show' : 'hide'}`}>
        <h3>Louez tout, <br />tout de suite</h3>
        {isLoading ? (
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
          <div className='locationsCard1 fade-in' key={items[currentIndex]?._id}>
            <img src={items[currentIndex]?.imageUrl} alt={items[currentIndex]?.title} />
            <h3>{items[currentIndex]?.title}</h3>
            <p>{items[currentIndex]?.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NouveauLocations;
