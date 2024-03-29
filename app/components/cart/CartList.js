// import CartItem from '@/components/carrito/CartItem'
'use client';
import { useCartContext } from '@/app/components/context/CartContext';
import GoBack from '../ui/GoBack';
import Link from 'next/link';

import Image from 'next/image';
// export const metadata = {
//   title: 'Carrito',
//   description: 'Página para ver carrito y proceder a finalizar compra',
// };
const CartList = () => {
  const { cart } = useCartContext();
  const { totalPrice, removeItem, emptyCart, totalQty } = useCartContext();

  return (
    <>
      <div className='h-screen py-8'>
        {totalQty() == 0 ? (
          <div className='text-center'>
            <h2 className='title1'>Carrito sin items</h2>
            <GoBack className='button-primary ' />
          </div>
        ) : (
          <div className='container mx-auto px-4'>
            <h2 className='title1'>Carrito</h2>
            <div className='flex flex-col md:flex-row gap-4'>
              <div className='md:w-3/4'>
                <div className='bg-white rounded-lg shadow-md p-6 mb-4 border border-slate-300'>
                  <table className='w-full'>
                    <thead>
                      <tr>
                        <th className='text-left font-semibold'>Producto</th>
                        <th className='text-left font-semibold'>Precio</th>
                        <th className='text-left font-semibold'>Cantidad</th>
                        <th className='text-left font-semibold'>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map((item) => (
                        <tr
                          className='border-b'
                          key={`${item.slug}`}
                        >
                          <td className='py-2'>
                            <div className='flex items-center'>
                              <Image
                                className='rounded-t-xl mr-6'
                                alt={item.title}
                                src={item.image}
                                width={100}
                                height={100}
                                style={{ objectFit: 'contain' }}
                              ></Image>
                              <span className='font-semibold'>
                                {item.title}
                              </span>
                            </div>
                          </td>
                          <td className='py-4'>${item.price}</td>
                          {/* en caso de manejar cantidad{' '} */}
                          <td className='py-4'>
                            <div className='flex items-center'>
                              {/* <button className='border rounded-md py-2 px-4 mr-2'>
                              -
                            </button> */}
                              <span className='text-center w-8'>
                                {item.quantity}
                              </span>
                              {/* <button className='border rounded-md py-2 px-4 ml-2'>
                              +
                            </button> */}
                            </div>
                          </td>
                          <td className='py-4'>
                            $ {item.quantity * item.price}
                          </td>
                          <td className='py-4'>
                            <button
                              className='border rounded-md py-2 px-4 ml-2 data-tooltip-target="tooltip"'
                              onClick={() => removeItem(item.slug)}
                            >
                              Quitar
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className='md:w-1/4'>
                <div className='bg-white rounded-lg shadow-md p-6'>
                  <h2 className='text-lg font-semibold mb-4'>Resumen</h2>
                  <div className='flex justify-between mb-2'>
                    <span>Subtotal</span>
                    <span>${Number(totalPrice())}</span>
                  </div>
                  <div className='flex justify-between mb-2'>
                    <span>Iva</span>
                    <span>${totalPrice() * 0.22}</span>
                  </div>

                  <hr className='my-2' />
                  <div className='flex justify-between mb-2'>
                    <span className='font-semibold'>Total</span>
                    <span className='font-semibold'>
                      ${totalPrice() + totalPrice() * 0.22}
                    </span>
                  </div>
                  <button className='button-primary w-full'>
                    <Link href={`/carrito/envio`}>Checkout</Link>
                  </button>
                  <button
                    className='button-secondary-small w-full'
                    onClick={() => emptyCart()}
                  >
                    Borrar carrito
                  </button>
                  <GoBack className='button-secondary-small w-full my-2 ' />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default CartList;
