import Boton from '../Boton';

const InsertProduct = () => {
  return (
    <div className='max-w-2xl w-full mx-auto rounded-3xl shadow-xl bg-white p-12'>
      <h1 className='title1'>Nuevo producto</h1>
      <form action=''>
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
          ></input>
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
          ></textarea>
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
          ></input>
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
          ></input>
        </div>

        <div className='mb-4'>
          <label
            className='block text-sm font-semibold mb-2'
            htmlFor=''
          >
            Tipo
          </label>
          <textarea
            className='w-full px-3 py-2 border rounded-lg bh-gray-800 focus:border-blue-500'
            required
            placeholder='phone'
            type='text'
          ></textarea>
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
          ></input>
        </div>
        <div className='mb-4'>
          <Boton
            type='submit'
            className='button-primary w-full'
          >
            Guardar
          </Boton>
        </div>
      </form>
    </div>
  );
};

export default InsertProduct;
