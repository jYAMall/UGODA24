// src/components/RoleSelectionForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RoleSelectionForm({ onSubmit }) {
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await onSubmit(role); // Припустимо, onSubmit повертає проміс

    // Перенаправлення відповідно до обраної ролі
    if (role === 'customer') {
      navigate('/as_customer');
    } else if (role === 'provider') {
      navigate('/as_provider');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Виберіть вашу роль:
        <select value={role} onChange={handleChange}>
          <option value="">Виберіть...</option>
          <option value="customer">Customer</option>
          <option value="provider">Provider</option>
        </select>
      </label>
      <button type="submit">Підтвердити</button>
    </form>
  );
}

export default RoleSelectionForm;
