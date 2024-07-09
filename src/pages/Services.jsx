import React from 'react'

import { FaReact } from "react-icons/fa";


function Services() {
  return (
    <div>
       <div className='px-4 py-32 bg-black mx-auto'>
    <div className='text-white text-center'>
      <h1 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Service Page</h1>
    </div>
    </div>






    <div className="isku-heyso" >
        <div className="Header">
            <h1 >Our Service</h1>
            <p >*These Are The Most Common Use Cases.</p>
        </div>
        <div className="box-parent  md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
            <div className="boxes">
            <i class="fa-solid fa-square-share-nodes text-5xl font-bold text-orange-500 p-4"></i>
                <h2 className=' text-3xl p-2' >Social Media</h2>
                <p>Lorem, ipsum dolor.</p>
            </div>
            <div className="boxes">
            <i class="fa-solid fa-code text-5xl font-bold text-orange-500 p-4"></i>
                <h2 className=' text-3xl p-2'  >Devlopment</h2>
                <p>Lorem, ipsum dolor.</p>
            </div>
            <div className="boxes">
            <i class="fa-brands fa-wordpress text-5xl font-bold text-orange-500 p-4 "></i>
                <h2 className=' text-3xl p-2'  >News</h2>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="boxes">
            <i class="fa-solid fa-laptop text-5xl font-bold text-orange-500 p-4"></i>
                <h2 className=' text-3xl p-2' >Technology</h2>
                <p>Lorem, ipsum dolor.</p>
            </div>
            <div className="boxes">
            <i class="fa-solid fa-palette text-5xl font-bold text-orange-500 p-4"></i>
                <h2 className=' text-3xl p-2'  >Web Design</h2>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="boxes">
            <i class="fa-solid fa-hourglass-end  text-5xl font-bold text-orange-500 p-4"></i>
                <h2 className=' text-3xl p-2' >Degital Marketing</h2>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
    </div>



    </div>
  )
}

export default Services
