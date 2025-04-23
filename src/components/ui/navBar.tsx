import Logo from '@/icons/Logo'
import { Button } from 'antd'
import Link from 'next/link'
import React from 'react'


function Navbar() {
    return (
      <nav className='w-full flex justify-between py-[10px] px-4 sm:px-6 lg:px-16 backdrop-blur-lg fixed top-0 z-50 border-b border-white/10'>
        <div className='flex items-center justify-center text-md text-primary gap-3 '>
          <div><Logo /></div>
          <div>
            <Link href='/' className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 font-extrabold text-xl'>
              Second Brain
            </Link>
          </div>
        </div>
        <div className='flex gap-4'>
          <Button type='primary'>
            <Link href='/sign-in'>Log in</Link>
          </Button>
          <Button type='primary'>
            <Link href='/sign-up'>Sign up</Link>
          </Button>
        </div>
      </nav>
    )
  }
  
  export default Navbar