import React from 'react'

function Modal({isOpen , onClose}) {
  return (
    <div className={`fixed top-0 lef-0 w-full h-full flex items-center justify-center ${isOpen ? "" : "hidden"}`}>
      <div className='modal-container'>
        <div className='bg-black text-center p-5 h-96 lg:w-[500px] rounded shadow-md'>
            {/* modal content */}
            <h2 className='text-xl font-semibold mt-6 mb-5 uppercase'>PLEASE LOGIN HERE!</h2>
            <form >
           {/* email */}
           <div className='mb-5'>

           <input type="email" name='email'  id='email' placeholder='example@gmail.com' className='w-full rounded-md border
           border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none
           focus:border-[#6a64f1] focus:shadow-md'/>
           </div>

           <div className='mb-5'>

              <input type="password" name='password'  id='password' placeholder=' Enter your password' className='w-full rounded-md border
            border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none
              focus:border-[#6a64f1] focus:shadow-md'/>
             </div>

             <div>
                <button className='hover:shadow-md rounded-md bg-[#6a64f1] hover:bg-orange-500 py-3
                px-8 text-base font-semibold  text-white outline-none '>LOGIN</button>
             </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Modal
