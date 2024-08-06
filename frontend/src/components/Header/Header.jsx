import React from 'react'
import AmazonMainLogo from '../../images/AmazonMainLogo'
import Searchbar from '../Searchbar'
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';

function Header() {

  const cartItemCount = useSelector((state) => state.cartItem.noOfItems)

  return (
    <div className='h-16 py-2 px-6 bg-header'>
      <div className='h-full flex items-center justify-between gap-2'>
        {/* logo */}
        <div className=''>
          <NavLink to='/'>
            <AmazonMainLogo />
          </NavLink>
        </div>
        {/* search */}
        <div className='w-[70%]'>
          <Searchbar />
        </div>
        {/* username/login */}
        <div>
          <div className='flex flex-col text-white text-sm'>
            <div className=''>
              Hello
            </div>
            <div>
              Sign In
            </div>
          </div>
        </div>
        {/* returns and orders */}
        <div className='flex flex-col text-white text-sm'>
          <div className=''>
            returns
          </div>
          <div>
            & Orders
          </div>
        </div>
        {/* cart logo + the cart item value */}
        <div>
          <div className='flex gap-2'>
            <div className='font-extrabold text-white'> {cartItemCount}</div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
              className="size-6 text-white">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Header
