'use client';
import { useState } from 'react';
import MenuList from './MenuList';
const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className='md:hidden flex justify-end'>
        <button
          onClick={handleIsOpen}
          id='navBarMenuButton'
        >
          {!isOpen ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18 18 6M6 6l12 12'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
              />
            </svg>
          )}
        </button>
      </div>
      <div className={`${isOpen ? 'hidden' : 'flex justify-end'} md:flex`}>
        <MenuList />
      </div>
    </>
  );
};

export default Menu;
