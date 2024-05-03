import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Pagination({ currentPage, totalPages, prevPage, nextPage }) {
  return (
    <div className='page'>
      <button onClick={prevPage} disabled={currentPage === 1} type='button' className="btn btn-success" >Previous Page</button>
      <span>Page {currentPage} of {totalPages}</span>
      <button onClick={nextPage} disabled={currentPage === totalPages} type="button" className="btn btn-success">Next Page</button>
    </div>
  );
}

export default Pagination;