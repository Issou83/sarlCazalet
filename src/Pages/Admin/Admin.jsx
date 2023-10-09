import React, { useState, useEffect } from 'react';
import AdminLogin from '../../composants/Admin/AdminLogin';
import AdminDashboard from '../../composants/Admin/AdminDashboard';
import  "./index.css"

function Admin() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);

    const handleAuthenticationSuccess = () => {
        setIsAuthenticated(true);
    };

    return (
        <div className='adminMain'>
            {isAuthenticated ? (
                <AdminDashboard />
            ) : (
                <AdminLogin onAuthenticationSuccess={handleAuthenticationSuccess} />
            )}
        </div>
    );
}

export default Admin;
