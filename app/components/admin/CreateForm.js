'use client';
import { useState } from 'react';
import Boton from '../ui/Boton';
import GoBack from '../ui/GoBack';
//para crear producto en firebase
import { setDoc, doc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '@/app/firebase/config';

import { useContext } from 'react';
import NotificationContext from '../context/NotificationContext';
import Notification from '../ui/Notification';
import { useRouter } from 'next/navigation';
const CreateForm = () => {
  const router = useRouter();
  const { notificationHandler } = useContext(NotificationContext);
  function handlerNotificationOK() {
    notificationHandler({
      type: 'success',
      message: 'Producto agregado correctamente',
    });
  }
  const createProcduct = async (values, file) => {
    //para img, subimos un doc a firestore, es una url a un archivo.
    //subimos una img, obtenemos la url y luego guardamos esa url en el atr image de productos
    const storageRef = ref(storage, values.slug);

    const fileSnapshot = await uploadBytes(storageRef, file);
    const fileURL = await getDownloadURL(fileSnapshot.ref);
    //fin para img

    const docRef = doc(db, 'productos', values.slug);
    return await setDoc(docRef, { ...values, image: fileURL })
      .then(
        () => handlerNotificationOK(),
        setTimeout(() => {
          router.push('/admin');
        }, 3000)
      )

      .catch((err) => {
        console.log('Error: ', err);
      });
  };

  const [values, setValues] = useState({
    title: '',
    description: '',
    inStock: 0,
    price: 0,
    type: '',
    slug: '',
  });

  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  //esto porque sino lo guardaba como string en firebase
  const handleChangeNumeric = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.valueAsNumber,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createProcduct(values, file);
  };
  return (
    <>
      <Notification />
      <div className='max-w-2xl w-full mx-auto rounded-3xl shadow-xl bg-white p-12'>
        <h1 className='title1'>Nuevo producto</h1>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label
              className='block text-sm font-semibold mb-4'
              htmlFor=''
            >
              Slug
            </label>
            <input
              className='w-full px-3 py-2 border rounded-lg bh-gray-800 focus:border-blue-500'
              required
              placeholder='apple-phone-12356'
              type='text'
              name='slug'
              onChange={handleChange}
              values={values.slug}
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-sm font-semibold mb-4'
              htmlFor=''
            >
              Tipo
            </label>
            <input
              className='w-full px-3 py-2 border rounded-lg bh-gray-800 focus:border-blue-500'
              required
              placeholder='phone'
              type='text'
              name='type'
              onChange={handleChange}
              values={values.type}
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-sm font-semibold mb-4'
              htmlFor=''
            >
              Título
            </label>
            <input
              className='w-full px-3 py-2 border rounded-lg bh-gray-800 focus:border-blue-500'
              placeholder='Celular samsung 123'
              required
              type='text'
              value={values.title}
              name='title'
              onChange={handleChange}
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-sm font-semibold mb-4'
              htmlFor=''
            >
              Descripción
            </label>
            <textarea
              className='w-full px-3 py-2 border rounded-lg bh-gray-800 focus:border-blue-500'
              placeholder='Color blanco, grande'
              required
              type='text'
              rows='4'
              value={values.description}
              name='description'
              onChange={handleChange}
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-sm font-semibold mb-4'
              htmlFor=''
            >
              Stock
            </label>
            <input
              className='w-full px-3 py-2 border rounded-lg bh-gray-800 focus:border-blue-500'
              required
              placeholder='120'
              type='number'
              name='inStock'
              onChange={handleChangeNumeric}
              values={values.inStock}
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-sm font-semibold mb-4'
              htmlFor=''
            >
              Precio
            </label>
            <input
              className='w-full px-3 py-2 border rounded-lg bh-gray-800 focus:border-blue-500'
              required
              placeholder='599.00'
              type='number'
              name='price'
              onChange={handleChangeNumeric}
              values={values.price}
            />
          </div>

          <div className='mb-4'>
            <label
              className='block text-sm font-semibold mb-4'
              htmlFor=''
            >
              Imagen
            </label>
            <input
              className='w-full px-3 py-2 border rounded-lg bh-gray-800 focus:border-blue-500'
              required
              type='file'
              accept='.png, .jpg, .webp'
              name='image'
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <div className='mb-4'>
            <Boton
              type='submit'
              className='button-primary w-full'
            >
              Crear producto
            </Boton>
          </div>
        </form>
        <GoBack className='button-secondary w-full' />
      </div>
    </>
  );
};

export default CreateForm;
