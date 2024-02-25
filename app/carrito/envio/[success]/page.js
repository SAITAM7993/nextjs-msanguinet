'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
const Sucesss = ({ params }) => {
  const order = useParams(params);
  return (
    <div className='continer m-auto text-center'>
      <p className='title2'>{`orden ${order.success} creada correctamente`}</p>
      <Link
        href={'/productos/todos'}
        className='button-primary-small'
      >
        Volver a tienda
      </Link>
    </div>
  );
};
export default Sucesss;
