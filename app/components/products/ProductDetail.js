'use client';
//detalle de UN producto
// import { mockData } from '../../data/products';
import Image from 'next/image';
import QtySelector from './QtySelector';
import GoBack from '../ui/GoBack';

const ProductDetail = async ({ slug }) => {
  const item = await fetch(`http://localhost:3000/api/producto/${slug}`, {
    cache: 'no-store',
    next: { revalidate: 0 }, //para que no se cachee una la respuesta y siempre este actualizada por si varia el stock
  }).then((res) => res.json());

  return (
    <div className='max-w-6xl m-auto bg-white p-20 w-full rounded-3xl border border-slate-300'>
      <section className='flex gap-20'>
        <div className='relative basis-1/2'>
          <Image
            src={`/images/products/${item.image}`}
            alt={item.title}
            width={640}
            height={640}
          />
        </div>
        <div className='basis-1/2'>
          <h2 className='title1'>{item.title}</h2>
          <section className='my-5'>
            <p className='text-black text-lg'>{item.description}</p>
          </section>
          <p className='text-4xl'>$ {item.price}</p>
          <QtySelector item={item} />
          <GoBack className='button-secondary w-full' />
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
