'use client';
import { useContext, useState } from 'react';
import Boton from '../ui/Boton';
import GoBack from '../ui/GoBack';
import { useCartContext } from '../context/CartContext';
import { db } from '@/app/firebase/config';
import { setDoc, doc, Timestamp, getDoc, writeBatch } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import Notification from '../ui/Notification';
import NotificationContext from '../context/NotificationContext';
const createOrder = async (values, items) => {
  const docsPromises = items.map((item) => {
    const docRef = doc(db, 'productos', item.slug);
    return getDoc(docRef);
  });

  const docs = await Promise.all(docsPromises);
  const batch = writeBatch(db);
  const outOfStock = [];

  console.log('DOCUMENTO ABAJO');

  docs.forEach((doc) => {
    const { inStock } = doc.data(); //cantidad de stock de la colecc de firebase
    const { slug } = doc.data(); //slug de colecc de firebase
    const itemInCart = items.find((item) => item.slug === slug);
    if (itemInCart.quantity <= inStock) {
      batch.update(doc.ref, { inStock: Number(inStock - itemInCart.quantity) });
    } else {
      outOfStock.push(itemInCart);
    }
  });

  if (outOfStock.length > 0) return outOfStock;

  const order = {
    client: values,
    items: items.map((item) => ({
      title: item.title,
      price: item.price,
      slug: item.slug,
      quantity: item.quantity,
    })),
    date: new Date().toISOString(),
  };

  const docId = Timestamp.fromDate(new Date()).toMillis();

  const orderRef = doc(db, 'orders', String(docId));
  await batch.commit(); //para el control de stock, no funciona
  await setDoc(orderRef, order);
  return docId;
};

const ClientForm = () => {
  const { notificationHandler } = useContext(NotificationContext);
  const router = useRouter();
  const { cart, totalQty, emptyCart } = useCartContext();
  const [values, setValues] = useState({
    name: '',
    phone: '',
    address: '',
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await createOrder(values, cart);
    if (typeof result === 'number') {
      router.push(`/carrito/envio/${result}`);
      emptyCart();
    } else {
      handlerNotificationERROR();
    }
    function handlerNotificationERROR() {
      notificationHandler({
        type: 'error',
        message: 'Uno o más productos no tienen stock',
      });
    }
  };

  return (
    <>
      {totalQty() == 0 ? (
        <div className='text-center'>
          <h2 className='title1'>Carrito sin items</h2>
          <GoBack className='button-primary ' />
        </div>
      ) : (
        <>
          <Notification />
          <div className='max-w-2xl w-full mx-auto rounded-3xl shadow-xl bg-white p-12 border border-slate-200'>
            <h1 className='title1'>Datos para la orden</h1>
            <form onSubmit={handleSubmit}>
              <div className='mb-4'>
                <label
                  className='block text-sm font-semibold mb-2'
                  htmlFor='nameForm'
                >
                  Nombre
                </label>
                <input
                  id='nameForm'
                  name='name'
                  className='w-full px-3 py-2 border rounded-lg bg-gray-50'
                  placeholder='Matias Sanguinet'
                  required
                  type='text'
                  onChange={handleChange}
                ></input>
              </div>
              <div className='mb-4'>
                <label
                  className='block text-sm font-semibold mb-2'
                  htmlFor='phoneForm'
                >
                  Celular
                </label>
                <input
                  id='phoneForm'
                  name='phone'
                  className='w-full px-3 py-2 border rounded-lg bg-gray-50'
                  required
                  placeholder='099027999'
                  type='tel'
                  onChange={handleChange}
                ></input>
              </div>
              <div className='mb-4'>
                <label
                  className='block text-sm font-semibold mb-2'
                  htmlFor='adressForm'
                >
                  Dirección
                </label>
                <input
                  id='adressForm'
                  name='address'
                  className='w-full px-3 py-2 border rounded-lg bg-gray-50'
                  required
                  placeholder='Avenida italia 123'
                  type='text'
                  onChange={handleChange}
                ></input>
              </div>

              <div className='mb-4'>
                <Boton
                  type='submit'
                  className='button-primary w-full'
                >
                  Finalizar compra
                </Boton>
              </div>
            </form>
            <GoBack className='button-secondary w-full' />
          </div>
        </>
      )}
    </>
  );
};

export default ClientForm;
