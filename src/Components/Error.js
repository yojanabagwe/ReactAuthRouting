import React from 'react';
import { Link } from 'react-router-dom';


const Error = () => {
  return (
    <div style={{display: 'flex',justifyContent: 'center',alignItems: 'center',height: '100vh'}}>
      <div style={{border: '0.5px solid #ccc',padding: '30px' 
      }}>
        <h2 style={{color:'red', fontSize:'35px'}}>Login Unsuccessful !</h2>
        <p style={{fontWeight: '700'}}>There was an error with your login attempt.</p>
        <Link to="/login"><button type="button" class="btn btn-success">Home</button></Link>
      </div>
    </div>
  );
}

export default Error;
