import React, { useEffect, useState } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import useAuth from '../features/auth/useAuth';

export default function RequireRole({ role, children }) {
    const userRole = useAuth(state => state.role);
    const setRole = useAuth(state => state.setRole);
    const location = useLocation();
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        const storedRole = localStorage.getItem('role');
        if (storedRole) {
            setRole(storedRole);
        }
        setInitialized(true);
    }, [setRole]);

    if (!initialized) {
        return <div className="p-6 text-center">Yükleniyor...</div>;
    }

    if (userRole !== role) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}
