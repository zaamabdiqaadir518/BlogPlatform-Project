import React from 'react'
import {useLoaderData} from 'react-router-dom'
import{FaUser, FaClock} from 'react-icons/fa6'
import SideBar from '../Components/SideBar'

const SingleBlog = ()=> {
    const data = useLoaderData()
    const {title , image , author , puplished_date ,reading_time , content} = data[0]

  return (
    <div>
       
       <div className='py-40 bg-black text-center text-white px-4'>
        <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Single Blog Page</h2>
       </div>
      {/* Blog detail */}

      <div className='max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12'>
        <div  className='lg:w-3/4 mx-auto'>
          <div>
            <img src={image} alt="" className='w-full mx-auto rounded' />
          </div>
          <h2 className='text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer '>{title}</h2>
          <p className='mb-3 text-gray-600'> <FaUser className='inline-flex items-center mr-2 ' / >
           {author} | {puplished_date}</p>
           <p className='mb-3 text-gray-600'> <FaClock className='inline-flex items-center mr-2 ' / >
           {reading_time}</p>
           <p className=' text-base mb-6 text-gray-600'>{content}</p>
           <div className='text-base mb-6 text-gray-600'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora adipisci, a explicabo mollitia unde eveniet asperiores obcaecati? 
              Expedita a esse ad incidunt autem assumenda magnam illum velit! Fugit, asperiores amet?</p> <br />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum nisi libero ipsa numquam, sit ducimus iusto praesentium
                 est illo ullam labore debitis sunt corporis iste eum. Saepe odit velit necessitatibus.</p>

                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora adipisci, a explicabo mollitia unde eveniet asperiores obcaecati? 
              Expedita a esse ad incidunt autem assumenda magnam illum velit! Fugit, asperiores amet?</p> <br />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum nisi libero ipsa numquam, sit ducimus iusto praesentium
                 est illo ullam labore debitis sunt corporis iste eum. Saepe odit velit necessitatibus.</p>

                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora adipisci, a explicabo mollitia unde eveniet asperiores obcaecati? 
              Expedita a esse ad incidunt autem assumenda magnam illum velit! Fugit, asperiores amet?</p> <br />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum nisi libero ipsa numquam, sit ducimus iusto praesentium
                 est illo ullam labore debitis sunt corporis iste eum. Saepe odit velit necessitatibus.</p>

                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora adipisci, a explicabo mollitia unde eveniet asperiores obcaecati? 
              Expedita a esse ad incidunt autem assumenda magnam illum velit! Fugit, asperiores amet?</p> <br />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum nisi libero ipsa numquam, sit ducimus iusto praesentium
                 est illo ullam labore debitis sunt corporis iste eum. Saepe odit velit necessitatibus.</p>
           </div>
        </div>
        <div className='lg:w-1/2'>
   
          <SideBar/>
        </div>
      </div>
    </div>
  )
}

export default SingleBlog
