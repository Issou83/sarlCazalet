import React, { useState, useEffect } from "react";
import AdminLogin from "../../composants/Admin/AdminLogin";
import AdminDashboard from "../../composants/Admin/AdminDashboard";
import "./index.css";

function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Vider le localStorage à chaque chargement pour forcer la reconnexion
    localStorage.removeItem("token");

    // Après suppression du token, vérifier s'il existe toujours dans localStorage
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token); // !!token convertit la valeur en booléen, true si token existe, false sinon
  }, []);

  const handleAuthenticationSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className="adminMain">
      {isAuthenticated ? (
        <AdminDashboard />
      ) : (
        <AdminLogin onAuthenticationSuccess={handleAuthenticationSuccess} />
      )}
    </div>
  );
}

export default Admin;
