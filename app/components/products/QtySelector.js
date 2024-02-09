'use client';
//selector de cantidades
import { useState } from 'react';
import Counter from '../ui/Counter';
import Boton from '../ui/Boton';
import Link from 'next/link';
import { useCartContext } from '../context/CartContext';
import Notification from '../ui/Notification';
import { useContext } from 'react';
import NotificationContext from '../context/NotificationContext';

const QtySelector = ({ item }) => {
  const { notificationHandler } = useContext(NotificationContext);
  function handlerNotificationOK() {
    notificationHandler({
      type: 'success',
      message: 'Producto agregado correctamente',
    });
  }
  function handlerNotificationERROR() {
    notificationHandler({ type: 'error', message: 'Producto ya fue agregado' });
  }

  const { addToCart } = useCartContext();
  const [quantity, setQuantity] = useState(1);
  const handleAdd = () => {
    {
      addToCart({ ...item, quantity }) == false
        ? handlerNotificationOK()
        : handlerNotificationERROR();
    }
  };
  return (
    <>
      <Notification />
      <div className='flex flex-row gap-3 mt-2 py-5'>
        <Counter
          max={item.inStock}
          counter={quantity}
          setCounter={setQuantity}
        />

        <Boton
          className='button-primary w-full px-3'
          onClick={handleAdd}
        >
          Agregar
        </Boton>
        <Link href={'/carrito'}>
          <Boton
            className='button-primary w-full px-3'
            onClick={handleAdd}
          >
            Comprar
          </Boton>
        </Link>
      </div>
    </>
  );
};
export default QtySelector;
