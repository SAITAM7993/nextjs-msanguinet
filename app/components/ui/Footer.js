import Link from 'next/link';
const Footer = () => {
  //con el mt-auto y flex flex-col min-h-screen' en el body en layout dejo el footer abajo
  return (
    <>
      <footer className='bg-white rounded-lg shadow m-4  mt-auto '>
        <div className='w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between'>
          <span className='text-sm text-sky-900 sm:text-center'>
            © 2024 <Link href={`/`}>EIPI</Link>
          </span>
          <ul className='flex flex-wrap items-center mt-3 text-sm text-sky-900 sm:mt-0'>
            <li>
              <Link href={`/contacto`}>CONTACTO</Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
