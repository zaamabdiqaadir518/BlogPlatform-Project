import React from 'react'
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function BlogCards({blogs , currentPage ,selectCategory , pageSize}) {
    const filterBlogs = blogs
    .filter((blogs)=> !selectCategory || blogs.category === selectCategory)
    .slice((currentPage -1) *pageSize , currentPage *pageSize);
    console.log(filterBlogs)
  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
      {
        filterBlogs.map((blog)=>  <Link to={`/blogs/${blog.id}`} key={blog.id} className='p-5 shadow-lg'>
            <div>
                <img src={blog.image}alt="" className='w-full' />
            </div>
            <h3 className='mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer'>{blog.title}</h3>
            <p className='mb-2 text-gray-600 '> <FaUser className='inline-flex items-center mr-2 '/>{blog.author} </p>
             <p className='text-sm text-gray-500 '> Puplished:{blog.published_date}</p>
             
             </Link>)
      }
    </div>
  )
}

export default BlogCards
