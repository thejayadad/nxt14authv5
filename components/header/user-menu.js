'use client'
'use client'
import React, { useState } from 'react';
import { Button } from '@nextui-org/react';
import { FiMenu, FiUser } from "react-icons/fi";
import Link from 'next/link';

const UserMenu = ({user}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className="relative">
      <Button
        variant='light'
        className='flex items-center space-x-1 border'
        onClick={toggleDropdown}
      >
        <FiMenu className='h-4 w-4' />
        <FiUser className='h-4 w-4' />
      </Button>
        {user ?
        <>
            {isOpen && (
             <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200">
             <div className="flex flex-col p-2">
               <Link href="/signin"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                 LogOut
               </Link>
           
             </div>
           </div>
      )}
        </>
        :
        <>
              {isOpen && (
             <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200">
             <div className="flex flex-col p-2">
               <Link href="/signin"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                  Sign In
               </Link>
               <Link href="/register"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Sign Up
               </Link>
             </div>
           </div>
      )}
        </>    
    
    }
    </div>
  );
};

export default UserMenu;
