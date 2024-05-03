import React from 'react';
import axios from 'axios';

const Deleteitem = ({ id, onDelete }) => {
  const handleDeleteitem = async () => {
    try {
      await axios.delete('https://jsonplaceholder.typicode.com/users/${id}');
      onDelete(id);
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return <button onClick={handleDeleteitem}>Delete</button>;
};

export default Deleteitem;