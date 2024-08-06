import React from 'react'
import Box from '../box'
import Logo from '../logo'
import Search from './search'
import UserMenu from './user-menu'

const Header = async () => {
    const user = false
  return (
    <header className='w-full z-10 shadow-sm'>
    <div className='py-4 border-b-[1px]'>
    <Box>
        <nav className='flex flex-row items-center justify-between gap-3 md:gap-8'>
        <Logo />
        <Search />
        {user ?
        <>
        <UserMenu user={user} />
        </>
        :
        <>
        <UserMenu user={user} />
        </>
    
        }
        </nav>  
    </Box>  
    </div> 
   
    </header>
  )
}

export default Header