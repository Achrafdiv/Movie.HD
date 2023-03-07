import React from 'react';
import {Pagination} from "react-bootstrap";
import ReactPaginate from 'react-paginate';
import "bootstrap"


const PageNumber = ({getPage, pageCount}) => {
  const handlePageClick =(data) =>{
    getPage(data.selected +1);
  }
  return (
    <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="< prev"
        containerClassName={"Paginations"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
  )
}

export default PageNumber
