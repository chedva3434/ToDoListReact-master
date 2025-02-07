import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

axios.defaults.baseURL = apiUrl;

axios.interceptors.response.use(
  response => response,  
  error => {
    console.error('API Error:', error.response ? error.response.data : error.message);
    return Promise.reject(error);  
  }
);

export default {
  getTasks: async () => {
    try {
      const result = await axios.get('/items');
      return result.data;
    } catch (error) {
      console.error('Error fetching tasks:', error);
      return []; 
    }
  },

  addTask: async (name) => {
    try {
      console.log('addTask', name);
      const result = await axios.post('/items', { name });
      return result.data;
    } catch (error) {
      console.error('Error adding task:', error);
      return {};  
    }
  },

  setCompleted: async (id, isComplete) => {
    try {
      console.log('setCompleted', { id, isComplete });
      const result = await axios.put(`/items/${id}`, { isComplete });
      return result.data;
    } catch (error) {
      console.error('Error updating task:', error);
      return {};  
    }
  },

  deleteTask: async (id) => {
    try {
      console.log('deleteTask', id);
      const result = await axios.delete(`/items/${id}`);
      return result.data;
    } catch (error) {
      console.error('Error deleting task:', error);
      return {};  
    }
  }
};