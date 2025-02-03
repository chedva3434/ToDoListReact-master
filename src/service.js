import axios from 'axios';

const apiUrl = "http://localhost:5239"

export default {
  getTasks: async () => {
    const result = await axios.get(`${apiUrl}/items`)    
    return result.data;
  },

  addTask: async(name)=>{
    try {
      console.log('addTask', name);
      const result = await axios.post(`${apiUrl}/items`, { name });
      return result.data; 
    } catch (error) {
      console.error('Error adding task:', error);
      return {}; 
    }
  },

  setCompleted: async (id, isComplete) => {
    try {
      console.log('setCompleted', { id, isComplete });
      const result = await axios.put(`${apiUrl}/items/${id}`, { isComplete });
      return result.data; 
    } catch (error) {
      console.error('Error updating task:', error);
      return {}; 
    }
  },

  deleteTask: async (id) => {
    try {
      console.log('deleteTask', id);
      const result = await axios.delete(`${apiUrl}/items/${id}`);
      return result.data; 
    } catch (error) {
      console.error('Error deleting task:', error);
      return {}; 
    }
  }
};
