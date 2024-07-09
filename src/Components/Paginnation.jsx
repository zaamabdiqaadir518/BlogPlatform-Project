import React from 'react'

function Paginnation({onPageChange, currentPage, blogs, pageSize}) {
    const totalPages = Math.ceil(blogs.lenth / pageSize)
    // console.log(totalPages)
    const renderPaginationLinks = () =>{
        return Array.from({length:totalPages} , (_, i) => i + 1).map((pageNumber) =>(
            <li className={pageNumber === currentPage ? "activePagination" : ""} key={pageNumber}>
                <a href="#" onClick={() => onPageChange(pageNumber)}> {pageNumber}</a>
            </li>
        ))
    }
  return (
   <ul className='pagination my-8 flex-wrap gap-4'>
    <li>
        <button className='p-2 bg-orange-500 text-black rounded' onClick={() => onPageChange(currentPage - 1)} disabled={currentPage ===1}>Previous</button>
    </li>
    <div className='fllex gap-2'>{renderPaginationLinks()}</div>
    <li>
        <button className=' p-2 px-4 bg-orange-500 text-black rounded' onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
    </li>
   
   </ul>
  )
}

export default Paginnation
