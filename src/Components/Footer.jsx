import React from 'react'
import { FaFacebookF, FaTwitter,FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className='bg-gray-900'>
      <div className='px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-4'>
        <div className='grid mb-8 lg:grid-cols-6'>

        <div className='grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-5'>
       
        <div>
                
                <div>
                    <p className='font-medium tracking-wide text-gray-300'>Category</p>
                    <ul className='mt-2 space-y-2'>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>News</a>
                        </li>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>World</a>
                        </li>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Games</a>
                        </li>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Refrences</a>
                        </li>
                    </ul>
                </div>
                
            </div>
            {/* Category 2 */}
            <div>
                
                <div>
                    <p className='font-medium tracking-wide text-gray-300'>Apples</p>
                    <ul className='mt-2 space-y-2'>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Web</a>
                        </li>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>eCommerce</a>
                        </li>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Business</a>
                        </li>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Entertaiment</a>
                        </li>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>portfolio</a>
                        </li>
                    </ul>
                </div>
                
            </div>
            {/* Category 3 */}
            <div>
                
                <div>
                    <p className='font-medium tracking-wide text-gray-300'>Cherry</p>
                    <ul className='mt-2 space-y-2'>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Media</a>
                        </li>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Brochure</a>
                        </li>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>NonProfit</a>
                        </li>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Education</a>
                        </li>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Projects</a>
                        </li>
                    </ul>
                </div>
                
            </div>
            {/* Category 4 */}
            <div>
                
                <div>
                    <p className='font-medium tracking-wide text-gray-300'>Business</p>
                    <ul className='mt-2 space-y-2'>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Infopreneur</a>
                        </li>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Persnal</a>
                        </li>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Wiki</a>
                        </li>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Forum</a>
                        </li>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Projects</a>
                        </li>
                    </ul>
                </div>
                
            </div>
        {/* subscription */}
            <div className=''>
                
              
                    <p className='font-medium tracking-wide text-gray-300'>Subscribe for updates</p>
                    <form className='mt-4 flex flex-col md:flex-row '>
                        <input type="email" name='email' id='email' className='flex-grow h-12 px-4 mb-3 transition duration-200
                        bg-white border border-gray-300 rounded shadow-sm aspect-auto md:mr-2 md:mb-0 focus:border-purple-400 focus:outline-none' />
                          <button type='submit' className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition
                           duration-200 rounded shadow-md hover:bg-orange-500 focus:outline-none border'>Subscribe</button>
                   
                    </form>
                    <p className=' mt-4 text-sm text-gray-500'>Loremipsumdolorsitametconsectetuadipisicingelit.!</p>
              
                
            </div>
            </div>
        </div>
        <div className='flex flex-col justify-between pt-5 pb-10 border-t border-gray-500 sm:flex-row'>

        <p className='text-sm text-gray-500'> ©CopyRight 2024 | All right deserved Zaam. </p>
        <div className='flex items-center mt-4 space-x-4 sm:mt-0'>
            <a href="" className='text-gray-500 transition-all duration-300 hover:text-orange-500'> 
                <FaTwitter className='h-6 w-6'  /></a>
            <a href="" className='text-gray-500 transition-all duration-300 hover:text-orange-500'> 
                <FaInstagram className='h-6 w-6'  /></a>
       
        
            <a href="" className='text-gray-500 transition-all duration-300 hover:text-orange-500'> 
                <FaFacebookF className='h-6 w-6'  /></a>
       
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
