
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Deleteitem from './Deleteitem';
import Edititem from './Edititem';
import Pagination from './Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logout from './Logout';
     
     const Dashboard = () => {
       const [data, setData] = useState([]);
       const [currentPage, setCurrentPage] = useState(1);
       const [totalPages, setTotalPages] = useState(2);
       const [itemsPerPage] = useState(5);
       const [showConfirmation, setShowConfirmation] = useState(false);
     
       const handleDelete = (id) => {
         setData(prevData => prevData.filter(item => item.id !== id));
       };
     
       const handleUpdate = (id, newName) => {
         setData(prevData => prevData.map(item => (item.id === id ? { ...item, name: newName } : item)));
       };
     
       const nextPage = () => {
         setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
       };
     
       const prevPage = () => {
         setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
       };
     
       const handleLogout = () => {
         setShowConfirmation(true);
       };
     
       const confirmLogout = () => {
         setShowConfirmation(false);
         window.location.href = '/login';
       };
     
       useEffect(() => {
         const fetchData = async () => {
           try {
             const response = await axios.get('https://jsonplaceholder.typicode.com/users');
             setData(response.data);
             setTotalPages(Math.ceil(response.data.length / itemsPerPage));
           } catch (error) {
             console.error('Error fetching data:', error);
           }
         };
         fetchData();
       }, []);
     
       return (
         <div className="container">
           <div className="row justify-content-end">
             <div className="col-auto">
               <button className="btn btn-danger mt-3" onClick={handleLogout}>Logout</button>
             </div>
           </div>
           <div className="row">
             <div className="col-12">
               <h1 className="text-center mt-4">User Data Store</h1>
             </div>
           </div>
           <div className="row">
             <div className="col-12">
               <table className="table table-bordered text-center">
                 <thead className="thead-dark">
                   <tr>
                     <th className="d-none d-md-table-cell">ID</th>
                     <th>Name</th>
                     <th>Email</th>
                     <th>Username</th>
                     <th>Edit</th>
                     <th>Delete</th>
                   </tr>
                 </thead>
                 <tbody className="table-responsive">
                   {data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map(item => (
                     <tr key={item.id}>
                       <td>{item.id}</td>
                       <td>{item.name}</td>
                       <td>{item.email}</td>
                       <td>{item.username}</td>
                       <td>
                         <Edititem
                           id={item.id}
                           initialName={item.name}
                           onUpdate={handleUpdate}
                         />
                       </td>
                       <td>
                         <Deleteitem id={item.id} onDelete={handleDelete} />
                       </td>
                     </tr>
                   ))}
                 </tbody>
               </table>
             </div>
           </div>
           <div className="row">
             <div className="col-12 d-flex justify-content-center">
               <Pagination currentPage={currentPage} totalPages={totalPages} prevPage={prevPage} nextPage={nextPage} />
             </div>
           </div>
           {showConfirmation && (
             <Logout
               onConfirm={confirmLogout} 
               onCancel={() => setShowConfirmation(false)} 
             />
           )}
         </div>
       );
     };
     
     export default Dashboard;
     