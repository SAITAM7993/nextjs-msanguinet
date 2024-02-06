'use client';
import { useState } from 'react';
import Boton from '../ui/Boton';
import { db, storage } from '@/app/firebase/config';
import { doc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import Notification from '../ui/Notification';
const updateProduct = async (slug, values, file) => {
  let fileUrl = values.image;
  if (file) {
    const storageRef = ref(storage, values.slug);
    const fileSnapshot = await uploadBytes(storageRef, file);
    fileUrl = await getDownloadUrl(fileSnapshot.ref);
  }

  const docRef = doc(db, 'productos', slug);
  return updateDoc(docRef, {
    title: values.title,
    description: values.description,
    inStock: Number(values.inStock),
    price: Number(values.price),
    type: values.type,
    image: fileUrl,
  }).then(() => alert('actualizado'));

  const EditForm = ({ item }) => {
    const { title, description, inStock, price, type, image } = item;
    const [values, setValues] = useState({
      title,
      description,
      inStock,
      price,
      type,
      image,
    });
    const [file, setFile] = useState(null);

    const handleChange = (e) => {
      setValues({ ...values, [e.taget.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
      await updateProduct(item.slug, values, file);
    };

    return;
    <>
      <Notification />
      <div className='max-w-2xl w-full mx-auto rounded-3xl shadow-xl bg-white p-12'>
        <h1 className='title1'>Nuevo producto</h1>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label
              className='block text-sm font-semibold mb-2'
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
              className='block text-sm font-semibold mb-2'
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
              className='block text-sm font-semibold mb-2'
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
              onChange={handleChange}
              values={values.inStock}
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-sm font-semibold mb-2'
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
              onChange={handleChange}
              values={values.price}
            />
          </div>

          <div className='mb-4'>
            <label
              className='block text-sm font-semibold mb-2'
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
              className='block text-sm font-semibold mb-2'
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
              className='block text-sm font-semibold mb-2'
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
              Guardar
            </Boton>
            <GoBack className='button-secondary w-full' />
          </div>
        </form>
      </div>
    </>;
  };
};
export default EditForm;
