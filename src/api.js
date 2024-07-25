// import axios from 'axios';

// const API_URL = 'http://localhost:5002/api';

// // Authentication
// export const register = (data) => axios.post(`${API_URL}/users/register`, data);
// export const login = (data) => axios.post(`${API_URL}/users/login`, data);

// // User
// export const getUser = () => {
//     const token = localStorage.getItem('token');
//     return axios.get(`${API_URL}/users/me`, { headers: { Authorization: token } });
// };

// // Tasks
// export const getTasks = () => {
//     const token = localStorage.getItem('token');
//     return axios.get(`${API_URL}/tasks`, { headers: { Authorization: token } });
// };
// export const createTask = (data) => {
//     const token = localStorage.getItem('token');
//     return axios.post(`${API_URL}/tasks`, data, { headers: { Authorization: token } });
// };
// export const updateTask = (id, data) => {
//     const token = localStorage.getItem('token');
//     return axios.put(`${API_URL}/tasks/${id}`, data, { headers: { Authorization: token } });
// };
// export const deleteTask = (id) => {
//     const token = localStorage.getItem('token');
//     return axios.delete(`${API_URL}/tasks/${id}`, { headers: { Authorization: token } });
// };

// src/api.js

import axios from 'axios';

const API_URL = 'https://authtask-backend-1.onrender.com/api/tasks';
const AUTH_URL = 'https://authtask-backend-1.onrender.com/api/users/login';

const getToken = () => localStorage.getItem('token');

export const fetchTasks = async () => {
    const token = getToken();
    const response = await axios.get(API_URL, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
};

export const createTask = async (task) => {
    const token = getToken();
    const response = await axios.post(API_URL, task, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
};

export const updateTask = async (id, task) => {
  const token = getToken();
  try {
      const response = await axios.put(`${API_URL}/${id}`, task, {
          headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
  } catch (error) {
      console.error('Error updating task:', error);
      throw error;
  }
};

export const deleteTask = async (id) => {
    const token = getToken();
    const response = await axios.delete(`${API_URL}/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
};

export const register = async (credentials) => {
    const response = await axios.post('https://authtask-backend-1.onrender.com/api/users/register', credentials);
    return response.data;
};

export const login = async (credentials) => {
    const response = await axios.post('https://authtask-backend-1.onrender.com/api/users/login', credentials);
    const { token } = response.data;
    localStorage.setItem('token', token);
    return token;
};

