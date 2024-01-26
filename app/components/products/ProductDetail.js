'use client';
//detalle de UN producto
import { mockData } from '../../data/products';
import Image from 'next/image';
import QtySelector from './QtySelector';
import GoBack from '../ui/GoBack';

const ProductDetail = ({ slug }) => {
  const item = mockData.find((p) => p.slug === slug); //fitrlo el producto por el id slug

  return (
    <div className='max-w-6xl m-auto bg-white p-20 w-full rounded-3xl'>
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
