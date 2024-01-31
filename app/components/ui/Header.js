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
        <Profile />
      </div>
    </nav>
  );
};
export default Header;
