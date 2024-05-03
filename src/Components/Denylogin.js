import React, { useEffect } from 'react';

const Denylogin = () => {
  useEffect(() => {
    alert("Please Login to get access to user data");
    window.location.href="/login";
  }, []);
  
  return null; 
}
export default Denylogin;
