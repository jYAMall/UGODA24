// src/AuthContext.js

import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        const savedUserData = localStorage.getItem('user');
        return savedUserData ? JSON.parse(savedUserData) : null;
    });

    const login = (userData) => {
        localStorage.setItem('user', JSON.stringify(userData));
        setUser(userData);
    };

    const logout = () => {
        localStorage.removeItem('user'); // Видаліть збережені дані користувача
        localStorage.removeItem('accessToken'); // Припускаючи, що ви також зберігаєте токен доступу
        setUser(null); // Очистіть стан користувача
    };
    

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
