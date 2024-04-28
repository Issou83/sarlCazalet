import React, { useState, useEffect } from "react";
import ItemForm from "./ItemForm";
import ItemList from "./ItemList";
import "./AdminDashboard.css";

function AdminDashboard() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await fetch("http://api-cazalet.vercel.app/items");
    const data = await response.json();
    setItems(data);
  };

  const addItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <div className="adminMain">
      <h2 className="titleItems">Gestion des locations</h2>
      <div className="blockAjout">
        <ItemForm onItemAdded={addItem} />
      </div>

      <ItemList items={items} />
    </div>
  );
}

export default AdminDashboard;
