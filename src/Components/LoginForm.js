import React, { useState } from 'react';
import users from './credentials'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const handleSubmit = (email, password, setLoading) => (e) => {
  e.preventDefault();
  const foundUser = users.find((user) => user.email === email && user.password === password);
  if (foundUser) {
    alert("Login Successful");
    setLoading(true);
    setTimeout(() => {
      window.location.href = '/dash';
    }, 5000);
  } else {
    window.location.href = '/error';
  }
};

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const onSubmit = handleSubmit(email, password, setLoading); 

  return (
    <>
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="border border-1 border-dark rounded-3 shadow p-3" style={{ width: '400px' }}>
          <h2 className="text-center mb-4">Login</h2>
          <form onSubmit={onSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="form-label">Email:</label>
              <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="form-label">Password:</label>
              <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button type="submit" className="btn btn-primary d-block w-100">Submit</button>
          </form>
          {loading && <p className="text-center mt-3">Loading...</p>}
        </div>
      </div>
    </>
  );
};

export default LoginForm;
