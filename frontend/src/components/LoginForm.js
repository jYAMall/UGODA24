
import React, { useState } from 'react';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom'; // Оновлено з useHistory на useNavigate
import { login as loginUser } from '../api/auth';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const auth = useAuth();
  const navigate = useNavigate(); // Оновлення з useHistory

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await loginUser(username, password);
      if (userData) {
        auth.login(userData);
        navigate('/profile'); // Оновлення з history.push на navigate
      } else {
        alert('Невірний логін або пароль');
      }
    } catch (error) {
      alert('Помилка при вході');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Ім'я користувача:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Пароль:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Увійти</button>
    </form>
  );
}

export default LoginForm;
