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
            <li
              className=' mx-3 my-2 link'
              key={link.name}
            >
              <a
                className='
               link'
                href={link.link}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MenuList;
