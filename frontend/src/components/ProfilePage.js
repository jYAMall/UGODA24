// src/components/ProfilePage.js

import React from 'react';
import { useAuth } from '../AuthContext';



function ProfilePage() {
    const { user } = useAuth(); // Використання контексту для отримання даних користувача

    console.log(user);

    const { logout } = useAuth(); 

    return (
        <div>
            <h1>Профіль користувача</h1>
            <p>Ласкаво просимо, {user?.username}!</p> {}
            <button onClick={logout}>Log Out</button>
        </div>
    );
}

export default ProfilePage;
