'use client'
import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import Avatar from '../Avatar'
import { FaRegUser } from 'react-icons/fa'

const UserMenu = () => {
  return (
    <div className='relative'>
      <div className='flex flex-row items-center gap-3'>
        <div className='hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer' onClick={() => { }}>
          Reserve It your home
        </div>

        <div onClick={() => { }} className='p-4 md:py-2 md: px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'>
          <AiOutlineMenu />
          <div className="hidden md:block">
            <FaRegUser />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserMenu