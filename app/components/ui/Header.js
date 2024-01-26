import Menu from './Menu';
import Image from 'next/image'; //importacion de Image de next
import CartWidget from './CartWidget';
import Profile from './Profile';
const Header = () => {
  return (
    <nav className='shadow-lg flex-no-wrap fixed top-0 md:flex w-full md:items-center lg:justify-between bg-white lg:flex-wrap lg:py-3'>
      <div className='flex items-center'>
        {/* <Image
          src={'/eipi-logo3.png'}
          alt='prueba pokemon'
          width={70}
          height={70}
        /> */}
        <span className='ml-5 font-semibold text-3xl '>EIPI</span>
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
