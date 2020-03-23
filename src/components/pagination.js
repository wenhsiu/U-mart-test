import React from 'react';
import '../css/pagination.css';

const Pagination = ({ pageNumbers, changePage }) => {
  const pages = pageNumbers.map(number => {
    return (
      <li
        className="number"
        key={number}
        id={number}
        onClick={changePage}
      >
        {number}
      </li>
    );
  });

  return(<div className="page-numbers">{pages}</div>);
}

export default Pagination;