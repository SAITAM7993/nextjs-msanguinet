import Link from 'next/link';
import Image from 'next/image';
import GoBack from '../ui/GoBack';
import LogoutButton from './LogoutButton';

const ProductsTable = async () => {
  const items = await fetch(`http://localhost:3000/api/productos/todos`, {
    cache: 'no-store',
    next: { tags: ['productos'] }, //esta peticion se va a catchear con el tag productos
  }).then((r) => r.json());

  return (
    <div className='w-full p-5 bg-white rounded-3xl shadow-xl border border-slate-200'>
      <div className='text-right my-8'>
        <GoBack className='button-secondary-small mx-3' />
        <LogoutButton className='' />

        <Link
          href={'/admin/create'}
          className='button-primary'
        >
          Nuevo producto +
        </Link>
      </div>
      <table className='w-full text-sm text-left'>
        <thead className='uppercase border-b'>
          <tr>
            <th
              sctope='col'
              className='px-2 py-2'
            >
              IMAGEN
            </th>
            <th
              sctope='col'
              className='px-2 py-2'
            >
              NOMBRE
            </th>
            <th
              sctope='col'
              className='px-2 py-2'
            >
              PRECIO
            </th>
            <th
              sctope='col'
              className='px-2 py-2'
            >
              STOCK
            </th>
            <th
              sctope='col'
              className='px-2 py-2'
            >
              TIPO
            </th>
            <th
              sctope='col'
              className='px-2 py-2'
            >
              SLUG
            </th>
            <th
              sctope='col'
              className='px-2 py-2 hidden'
            >
              DESCRIPCIÓN
            </th>
            <th
              sctope='col'
              className='px-2 py-2'
            >
              ACCIONES
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr
              key={item.slug}
              className='border-b'
            >
              <td className='p-2 '>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={100}
                  height={100}
                ></Image>
              </td>
              <td className='p-2 truncate max-w-prose'>{item.title}</td>
              <td className='p-2'>{item.price}</td>
              <td
                className={`${
                  item.inStock == 0 ? 'text-red-500' : 'text-green-500'
                } font-semibold`}
              >
                {item.inStock}
              </td>
              <td className='p-2'>{item.type}</td>

              <td className='p-2 truncate max-w-prose hidden'>{item.slug}</td>
              <td className='p-2 truncate max-w-prose '>{item.description}</td>
              <td className='p-2'>
                <Link
                  className='button-primary-small'
                  href={`/admin/edit/${item.slug}`}
                >
                  Editar
                </Link>
              </td>
              <td className=''>
                <Link
                  className='button-primary-small bg-red-600'
                  href={`/admin/delete/${item.slug}`}
                >
                  Eliminar
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='text-right my-8'>
        <GoBack className='button-secondary-small mx-3' />
        <Link
          href={'/admin/create'}
          className='button-primary-small'
        >
          Nuevo producto +
        </Link>
      </div>
    </div>
  );
};

export default ProductsTable;
