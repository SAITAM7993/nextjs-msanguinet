import Menu from './Menu';

import Link from 'next/link';
// import Image from 'next/image'; //importacion de Image de next
import CartWidget from './CartWidget';
import Profile from './Profile';
const Header = () => {
  return (
    <nav className='shadow-lg flex-no-wrap fixed top-0 md:flex w-full md:items-center lg:justify-between bg-white lg:flex-wrap lg:py-3 border border-slate-300'>
      <div className='flex items-center'>
        <Link href={`/`}>
          <span className='ml-5 font-extrabold  text-3xl '>EIPI</span>
        </Link>
      </div>
      <Menu />
      <div className='flex mx-5'>
        <CartWidget />
        {/* <Profile /> */}
        <Link
          className='mx-5'
          href={'/admin'}
        >
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
              d='M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125'
            />
          </svg>
        </Link>
      </div>
    </nav>
  );
};
export default Header;
