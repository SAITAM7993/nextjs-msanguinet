'use client';
import { useState, useContext } from 'react';
import Boton from '../ui/Boton';
import GoBack from '../ui/GoBack';
import { db } from '@/app/firebase/config';
import { doc, deleteDoc } from 'firebase/firestore';
import Image from 'next/image';

import Notification from '../ui/Notification';
import NotificationContext from '../context/NotificationContext';
import { useRouter } from 'next/navigation';
const deleteProduct = async (slug) => {
  return await deleteDoc(doc(db, 'productos', slug));
};
const DeleteForm = ({ item }) => {
  const router = useRouter();
  const { notificationHandler } = useContext(NotificationContext);
  function handlerNotificationOK() {
    notificationHandler({
      type: 'success',
      message: 'Producto eliminado correctamente',
    });
  }
  const { title, description, inStock, price, type, image, slug } = item;
  const [values, setValues] = useState({
    title,
    description,
    inStock,
    price,
    type,
    image,
    slug,
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await deleteProduct(item.slug).then(
      handlerNotificationOK(),
      setTimeout(() => {
        router.push('/admin');
      }, 3000)
    );
  };

  return (
    <>
      <Notification />
      <div className='max-w-2xl w-full mx-auto rounded-3xl shadow-xl bg-white p-12'>
        <h1 className='title1'>Eliminar producto</h1>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label
              className='block text-sm font-semibold'
              htmlFor='slugForm'
            >
              Slug
            </label>
            <input
              className='w-full px-3 py-2 border rounded-lg bh-gray-800 focus:border-blue-500'
              disabled
              placeholder='apple-phone-12356'
              type='text'
              name='slug'
              autoComplete='off'
              onChange={handleChange}
              value={values.slug}
              id='slugForm'
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-sm font-semibold'
              htmlFor='titleForm'
            >
              Título
            </label>
            <input
              className='w-full px-3 py-2 border rounded-lg bh-gray-800 focus:border-blue-500'
              placeholder='Celular samsung 123'
              disabled
              type='text'
              value={values.title}
              name='title'
              onChange={handleChange}
              id='titleForm'
            />
          </div>

          <div className='mb-4'>
            <label
              className='block text-sm font-semibold'
              htmlFor='priceForm'
            >
              Precio
            </label>
            <input
              className='w-full px-3 py-2 border rounded-lg bh-gray-800 focus:border-blue-500'
              disabled
              placeholder='599.00'
              type='number'
              name='price'
              onChange={handleChange}
              value={values.price}
              id='priceForm'
            />
          </div>

          <div className='mb-4'>
            <label
              className='block text-sm font-semibold'
              htmlFor='imgForm'
            >
              Imagen
            </label>
            <div className='flex gap-5'>
              <Image
                className='rounded-t-xl'
                alt={item.title}
                src={item.image}
                width={150}
                height={150}
                style={{ objectFit: 'contain' }}
              ></Image>
            </div>
          </div>
          <div className='mb-4'>
            <Boton
              type='submit'
              className='button-primary w-full'
            >
              Eliminar producto
            </Boton>
          </div>
        </form>
        <GoBack className='button-secondary w-full' />
      </div>
    </>
  );
};

export default DeleteForm;
