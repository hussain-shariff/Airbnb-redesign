import React from 'react'
import { 
    MagnifyingGlassIcon, 
    GlobeAltIcon, 
    Bars4Icon, 
    UserCircleIcon 
    } from '@heroicons/react/24/solid'

function Header() {
  return (
    <div className="grid grid-cols-3 bg-white shadow-md p-2 sticky top-0 z-50 md:p-5">
        <div className="cursor-pointer">
            <img src='/images/Vector.png' alt='logo'/>
        </div>
        <div className='flex items-center px-2 py-1 rounded-full shadow-md  md:border-2'>
            {/* search bar */}
            <input type="text" placeholder='start your search' className="flex-grow outline-none"/>
            <MagnifyingGlassIcon className="h-6 w-6 text-white bg-red-400 rounded-full p-1 cursor-pointer hidden md:block"/>
        </div>
        <div className='flex items-center justify-end space-x-4 text-gray-500'>
            <p className='hidden md:block'>Become a host</p>
            <GlobeAltIcon className='h-5 cursor-pointer'/>
            <div className='flex items-center border-2 rounded-full p-1 gap-2'>
                <Bars4Icon className='h-5 cursor-pointer'/>
                <UserCircleIcon className='h-5 cursor-pointer'/>
            </div>
        </div>
    </div>
  )
}

export default Header