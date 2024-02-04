// src/api/auth.js

/**
 * Функція для виконання входу користувача.
 * Відправляє ім'я користувача та пароль на сервер і отримує токени доступу та оновлення.
 *
 * @param {string} username Ім'я користувача
 * @param {string} password Пароль
 * @returns {Promise<Object>} Об'єкт, який містить токени або помилку
 */
// src/api/auth.js

async function login(username, password) {
    try {
        const response = await fetch('http://localhost:8000/api/token/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
    if (data.access) {
        // Припустимо, що токен зберігається в data.access
        localStorage.setItem('accessToken', data.access);
        // Також збережіть username для подальшого використання
        localStorage.setItem('username', username);
    }
    return data;
    
    } catch (error) {
        console.error("Error during login:", error);
        return { success: false, error: error.message };
    }
}
  
  export { login };
  