//menu lateral que meustra todas las categorias disponibles

'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; //para remarcar la categoria en donde estemos parados

//array con enlaces ver de cargar dinamicamente
const links = [
  { label: 'Todos', href: '/productos/todos' },
  { label: 'Smartwaches', href: '/productos/smartwatch' },
  { label: 'Laptops', href: '/productos/laptop' },
  { label: 'Teléfonos', href: '/productos/phone' },
  { label: 'Tablets', href: '/productos/tablet' },
];

const CategoriesMenu = () => {
  const pathname = usePathname();

  return (
    <aside className='flex flex-col gap-3'>
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className={`${
            pathname === link.href ? 'selected' : ''
          } py-2 rounded-full px-5 bg-white hover:scale-110 `}
        >
          {link.label}
        </Link>
      ))}
    </aside>
  );
};

export default CategoriesMenu;
