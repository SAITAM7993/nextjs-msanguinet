import Link from 'next/link';
const MenuList = () => {
  let links = [
    { name: 'Inicio', link: '/' },
    { name: 'Tienda', link: '/productos/todos' },
    { name: 'Nosotros', link: '/nosotros' },
    { name: 'Contacto', link: '/contacto' },
  ];

  return (
    <>
      <div>
        <ul className='md:flex md:items-center'>
          {links.map((link) => (
            <Link
              href={link.link}
              className=' mx-3 my-2 link'
              key={link.name}
            >
              {link.name}
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MenuList;
