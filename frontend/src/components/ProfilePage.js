// src/components/ProfilePage.js

import React from 'react';
import { useAuth } from '../AuthContext';
import RoleSelectionForm from '../components/RoleSelectionForm';



function ProfilePage() {
    const { user, setUserRole } = useAuth(); // Використання контексту для отримання даних користувача

    console.log(user);

    const { logout } = useAuth(); 

    const handleRoleSubmit = async (role) => {
        // Відправка запиту на API для оновлення ролі
        // Це приклад і може вимагати адаптації до вашого API
        const response = await fetch('http://localhost:8000/api/update-role/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`, // Припустимо, що ви зберігаєте токен доступу
          },
          body: JSON.stringify({ role }),
        });
    
        if (response.ok) {
          const data = await response.json();
          setUserRole(data.role); // Оновлення ролі у контексті
          alert('Роль успішно оновлено!');
        } else {
          alert('Помилка при оновленні ролі');
        }
      };

    return (
        <div>
            <h1>Профіль користувача</h1>
            <p>Ласкаво просимо, {user?.username}!</p> {}
            <button onClick={logout}>Log Out</button>
            <RoleSelectionForm onSubmit={handleRoleSubmit} />
        </div>
    );
}

export default ProfilePage;
