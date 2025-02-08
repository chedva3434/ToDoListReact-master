import axios from 'axios';

//const apiUrl = process.env.REACT_APP_API_URL;
const apiUrl="https://localhost:7199";
//const apiUrl=
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
      console.log(apiUrl);
      
      const result = await axios.get(`${apiUrl}/items`);
      return result.data;
    } catch (error) {
      console.error('Error fetching tasks:', error);
      return []; 
    }
  },

  getTasksById: async (id) => {
    try {
      const result = await axios.get(`/items/${id}`);
      return result.data;
    } catch (error) {
      console.log(
        "eroor in getItemsById",
        error.response ? error.response.data : error.message
      );
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

  setCompleted: async (Id, isCompleted) => {
    try {
      console.log('setCompleted', { Id, isCompleted });  // הדפסת הערכים שנשלחים
      const result = await axios.put(`/Items/${Id}`, { isCompleted });
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