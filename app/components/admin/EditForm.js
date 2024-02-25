'use client';
import { useState, useContext } from 'react';
import Boton from '../ui/Boton';
import GoBack from '../ui/GoBack';
import { db, storage } from '@/app/firebase/config';
import { doc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import Image from 'next/image';
import Notification from '../ui/Notification';
import NotificationContext from '../context/NotificationContext';
import { useRouter } from 'next/navigation';
const updateProduct = async (slug, values, file) => {
  let fileUrl = values.image;
  if (file) {
    const storageRef = ref(storage, values.slug);
    const fileSnapshot = await uploadBytes(storageRef, file);
    fileUrl = await getDownloadURL(fileSnapshot.ref);
  }

  const docRef = doc(db, 'productos', slug);

  return updateDoc(docRef, {
    title: values.title,
    description: values.description,
    inStock: Number(values.inStock),
    price: Number(values.price),
    type: values.type,
    image: fileUrl,
  });
};
const EditForm = ({ item }) => {
  const router = useRouter();
  const { notificationHandler } = useContext(NotificationContext);
  function handlerNotificationOK() {
    notificationHandler({
      type: 'success',
      message: 'Producto modificado correctamente',
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
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
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
    await updateProduct(item.slug, values, file).then(
      () => handlerNotificationOK(),
      setTimeout(() => {
        router.push('/admin');
      }, 3000)
    );
  };

  return (
    <>
      <Notification />
      <div className='max-w-2xl w-full mx-auto rounded-3xl shadow-xl bg-white p-12'>
        <h1 className='title1'>Editar producto</h1>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label
              className=' text-sm font-semibold'
              htmlFor='slugForm'
            >
              Slug
            </label>
            <input
              className='w-full px-3 py-2 border rounded-lg bh-gray-800 focus:border-blue-500'
              required
              placeholder='apple-phone-12356'
              type='text'
              name='slug'
              autoComplete='off'
              onChange={handleChange}
              value={values.slug}
              id='slugForm'
            />
          </div>
          <div className='mb-2'>
            <label
              className='block text-sm font-semibold'
              htmlFor='typeForm'
            >
              Tipo
            </label>
            <input
              className='w-full px-3 py-2 border rounded-lg bh-gray-800 focus:border-blue-500'
              required
              placeholder='phone'
              type='text'
              autoComplete='off'
              name='type'
              onChange={handleChange}
              value={values.type}
              id='typeForm'
            />
          </div>
          <div className='mb-2'>
            <label
              className='block text-sm font-semibold'
              htmlFor='titleForm'
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
              id='titleForm'
            />
          </div>
          <div className='mb-2'>
            <label
              className='block text-sm font-semibold mb-2'
              htmlFor='descriptionForm'
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
              id='descriptionForm'
            />
          </div>
          <div className='mb-2'>
            <label
              className='block text-sm font-semibold'
              htmlFor='stockFrom'
            >
              Stock
            </label>
            <input
              className='w-full px-3 py-2 border rounded-lg bh-gray-800 focus:border-blue-500'
              value={values.inStock}
              required
              placeholder='120'
              type='number'
              name='inStock'
              onChange={handleChangeNumeric}
              id='stockFrom'
            />
          </div>
          <div className='mb-2'>
            <label
              className='block text-sm font-semibold'
              htmlFor='priceForm'
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
              value={values.price}
              id='priceForm'
            />
          </div>

          <label
            class='block text-sm font-medium text-gray-900 dark:text-white'
            for='file_input'
          >
            Upload file
          </label>

          <div className='mb-2'>
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
              <input
                className='w-full px-3 py-2 border rounded-lg bh-gray-800 focus:border-blue-500'
                type='file'
                accept='.png, .jpg, .webp'
                name='image'
                onChange={(e) => setFile(e.target.files[0])}
                id='imgForm'
              />
            </div>
          </div>
          <div className='mb-2'>
            <Boton
              type='submit'
              className='button-primary w-full'
            >
              Guardar
            </Boton>
          </div>
        </form>
        <GoBack className='button-secondary w-full' />
      </div>
    </>
  );
};

export default EditForm;
