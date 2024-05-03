import React from 'react';

const Logout = ({ onConfirm, onCancel }) => {
  return (
    <div style={{position: 'fixed',top: 0,left: 0,width: '100%',height: '100%',backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
    <div style={{backgroundColor:'white',padding: '20px',marginRight:40, borderRadius: '5px'}}>
      <p>Are you sure you want to logout?</p>
      <button style={{marginRight:20}} onClick={onConfirm}>Yes</button>
      <button onClick={onCancel}>No</button>
    </div>
    </div>
  );
};

export default Logout;
