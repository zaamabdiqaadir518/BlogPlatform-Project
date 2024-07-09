import React, { useEffect, useState } from 'react'
import BlogCards from './BlogCards';
import Blogs from '../pages/Blogs';
import Paginnation from './Paginnation';
import CategorySelection from './CategorySelection';
import SideBar from './SideBar';

function BlogPage() {
    const [blogs , setBlogs] = useState([])
    const [currentPage, setCurrentPage ] = useState (1);
    const pageSize = 12 //blogs per page
    const [selectCategory , setSelectCategory] = useState(null)
    const [activeCategory ,setActiveCategory] = useState(null)

    useEffect(()=>{
        async function fetchBlogs(){
            let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`;

            //filter by categories
            if(selectCategory){
                url +=`&category=${selectCategory}`
            }

            const response = await fetch(url);
            const data = await response.json();
            setBlogs(data)
        }
        fetchBlogs();

    },[currentPage,pageSize,selectCategory])
//page changing btn
const handlePageChange =(pageNumber)=>{
    setCurrentPage(pageNumber)
}
//category change btn
const handleCategortChange =(category)=>{
    setSelectCategory(category)
    setCurrentPage(1)
    setActiveCategory(category)
}


  return (
    <div>
      {/* category section */}
      <div>
      <CategorySelection OnSelectCategory={handleCategortChange} selectCategory={selectCategory} activeCategory={activeCategory}/>
      </div>
      {/* blogCards section */}
      <div className='flex flex-col lg:flex-row gap-12'>
        <BlogCards blogs={blogs} currentPage={currentPage} selectCategory={selectCategory} pageSize={pageSize}/>
        {/* SideBaR component */}
        <div>
          <SideBar/>
        </div>
      </div>
      {/* pagination section */}
      <div>
        <Paginnation onPageChange={handlePageChange} blogs={blogs} currentPage={currentPage} selectCategory={selectCategory} pageSize={pageSize} />
      </div>
    </div>
  )
}

export default BlogPage
