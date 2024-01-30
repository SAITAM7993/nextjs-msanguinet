export const metadata = {
  title: 'Carrito',
  description: 'Página para ver carrito y proceder a finalizar compra',
};
const Carrito = () => {
  return (
    <>
      <div className='h-screen py-8'>
        <div className='container mx-auto px-4'>
          <h1 className='title1'>Carrito</h1>
          <div className='flex flex-col md:flex-row gap-4'>
            <div className='md:w-3/4'>
              <div className='bg-white rounded-lg shadow-md p-6 mb-4    border border-slate-300'>
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
                    <tr>
                      <td className='py-4'>
                        <div className='flex items-center'>
                          <img
                            className='h-16 w-16 mr-4'
                            src='https://via.placeholder.com/150'
                            alt='Product image'
                          />
                          <span className='font-semibold'>
                            Ejemplo producto
                          </span>
                        </div>
                      </td>
                      <td className='py-4'>$19.99</td>
                      {/* en caso de manejar cantidad{' '} */}
                      <td className='py-4'>
                        <div className='flex items-center'>
                          {/* <button className='border rounded-md py-2 px-4 mr-2'>
                            -
                          </button> */}
                          <span className='text-center w-8'>1</span>
                          {/* <button className='border rounded-md py-2 px-4 ml-2'>
                            +
                          </button> */}
                        </div>
                      </td>
                      <td className='py-4'>$19.99</td>
                    </tr>
                    {/* <!-- mas rows de prod luego --> */}
                  </tbody>
                </table>
              </div>
            </div>
            <div className='md:w-1/4    border border-slate-300'>
              <div className='bg-white rounded-lg shadow-md p-6'>
                <h2 className='text-lg font-semibold mb-4'>Resumen</h2>
                <div className='flex justify-between mb-2'>
                  <span>Subtotal</span>
                  <span>$19.99</span>
                </div>
                <div className='flex justify-between mb-2'>
                  <span>Iva</span>
                  <span>$1.99</span>
                </div>
                <div className='flex justify-between mb-2'>
                  <span>Envío</span>
                  <span>$0.00</span>
                </div>
                <hr className='my-2' />
                <div className='flex justify-between mb-2'>
                  <span className='font-semibold'>Total</span>
                  <span className='font-semibold'>$21.98</span>
                </div>
                <button className='button-primary w-full'>
                  Finalizar compra
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Carrito;
