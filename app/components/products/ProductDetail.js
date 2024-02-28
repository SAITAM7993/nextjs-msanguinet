'use client';
//detalle de UN producto

import Image from 'next/image';
import QtySelector from './QtySelector';
import GoBack from '../ui/GoBack';

const getProductDetail = async (slug) => {
  const item = await fetch(
    // `${process.env.VERCEL_URL}/api/producto/${slug}`,
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/producto/${slug}`,
    {
      cache: 'no-store',
      //para que no se cachee una la respuesta y siempre este actualizada por si varia el stock
    }
  );
  if (!item.ok) {
    throw new Error('Fallo en la petición de producto');
  }
  return item.json();
};

const ProductDetail = async ({ slug }) => {
  const producto = await getProductDetail(slug);

  return (
    <div className='max-w-6xl m-auto bg-white p-20 w-full rounded-3xl border border-slate-300'>
      <section className='flex gap-20'>
        <div className='basis-1/2'>
          <Image
            src={producto.image}
            alt={producto.title}
            width={640}
            height={640}
          />
        </div>
        <div className='basis-1/2'>
          <h2 className='title1'>{producto.title}</h2>
          <section className='my-5'>
            <p className='text-black text-lg'>{producto.description}</p>
          </section>
          <p className='text-4xl'>$ {producto.price}</p>
          <QtySelector item={producto} />
          <GoBack className='button-secondary w-full' />
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
