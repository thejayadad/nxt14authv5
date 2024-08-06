import React from 'react'

const layout = ({children}) => {
  return (
    // <div className='min-h-screen bg-gray-100 text-gray-900 flex justify-center'>
    //     <div className='max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1'>
    //       <div className='lg:w-1/2 xl:w-5/12 p-6 sm:p-12'>
    //       <div>
    //             <img src='../logo.png'
    //                 className='w-32 mx-auto'
    //                 alt='logo'
    //                 />
    //         </div>
    //         <div className='mt-12 flex flex-col items-center'>
    //               {children}
    //         </div>
    //       </div>
    //     </div>
    //     <div class="flex-1 bg-indigo-100 text-center hidden lg:flex">
    //     <div
    //           className='m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat'
    //           style={{
    //             backgroundImage: "url('https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
    //           }}
    //         />
    //     </div>
      
    // </div>
    <div className='h-screen flex items-center justify-center'>
      {children}
    </div>
  )
}

export default layout