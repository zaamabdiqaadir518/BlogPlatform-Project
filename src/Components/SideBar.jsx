import React, { useEffect, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom';

function SideBar() {
    const [popularBlogs, setPopularBlogs] = useState([]);

    useEffect(() =>{
        fetch("http://localhost:5000/blogs").then(res => res.json()).then(data => setPopularBlogs(data.slice(0,15)))
    },[])
  return (
    <div>
      <div>
        <h3 className='text-2xl font-semibold px-4 '>Latest Blogs</h3>
        <div>
            {
                popularBlogs.slice(0,5).map(blog => <div key={blog.id} className='my-5 border-b-2'>
                    <h4>{blog.title}</h4>
                    <Link to="/" className=' inline-flex   font-base pb-4 rounded  hover:text-orange-500 items-center py-1
             transition-all duration-200 ease-in '>Read More 
         <FaArrowRight className='mt-1 ml-2'/></Link>
                
                    </div>)
            }
        </div>
      </div>
      {/* POPULAR SECTION */}
      <div>
        <h3 className='text-2xl font-semibold px-4 mt-20'>Popular Blogs</h3>
        <div>
            {
                popularBlogs.slice(6,11).map(blog => <div key={blog.id} className='my-5 border-b-2 border-spacing-2 px-4'>
                    <h4 className='font-medium mb-2'>{blog.title}</h4>
                    <Link to="/" className=' inline-flex   font-base pb-4 rounded  hover:text-orange-500 items-center py-1
              '>Read More 
         <FaArrowRight className='mt-1 ml-2'/></Link>
                
                    </div>)
            }
        </div>
      </div>
    </div>
  )
}

export default SideBar
