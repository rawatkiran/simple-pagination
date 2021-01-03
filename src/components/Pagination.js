import React from "react";

const Pagination=({totalPosts,postsPerPage,paginate})=>{
  const pageNumbers=[];
  for(let i=1;i<= totalPosts/postsPerPage;i++){
    pageNumbers.push(i);
  }
  return(
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(page => (
          <li key={page} className='page-item'>
            <a onClick={()=> paginate(page)}  href='!#' className='page-link'>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
export default Pagination;