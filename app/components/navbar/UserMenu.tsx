'use client'

import React, { useCallback, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import Avatar from '../Avatar'
import { FaRegUser } from 'react-icons/fa'
import MenuItem from './MenuItem'

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value)
  }, [])

  return (
    <div className='relative'>
      <div className='flex flex-row items-center gap-3'>
        <div className='hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer' onClick={() => { }}>
          Reserve It your home
        </div>

        <div onClick={toggleOpen} className='p-4 md:py-2 md: px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'>
          <AiOutlineMenu />
          <div className="hidden md:block">
            <FaRegUser />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm'>
          <div className="flex flex-col cursor-pointer">
            <>
              <MenuItem label='Listing' onClick={() => { }} />
            </>
          </div>
        </div>
      )}
    </div>
  )
}

export default UserMenu