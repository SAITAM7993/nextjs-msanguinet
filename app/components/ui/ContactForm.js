import Boton from './Boton';

const ContactForm = () => {
  return (
    <div className='max-w-2xl w-full mx-auto rounded-3xl shadow-xl bg-white p-12'>
      <h1 className='title1'>Contacto</h1>
      <form action=''>
        <div className='mb-4'>
          <label
            className='block text-sm font-semibold mb-2'
            htmlFor=''
          >
            Nombre
          </label>
          <input
            className='w-full px-3 py-2 border rounded-lg bh-gray-800 focus:border-blue-500'
            placeholder='Matias Sanguinet'
            required
            type='text'
          ></input>
        </div>
        <div className='mb-4'>
          <label
            className='block text-sm font-semibold mb-2'
            htmlFor=''
          >
            Celular
          </label>
          <input
            className='w-full px-3 py-2 border rounded-lg bh-gray-800 focus:border-blue-500'
            required
            placeholder='099027999'
            type='tel'
          ></input>
        </div>
        <div className='mb-4'>
          <label
            className='block text-sm font-semibold mb-2'
            htmlFor=''
          >
            Mail
          </label>
          <input
            className='w-full px-3 py-2 border rounded-lg bh-gray-800 focus:border-blue-500'
            required
            placeholder='mail@mail.com'
            type='email'
          ></input>
        </div>

        <div className='mb-4'>
          <label
            className='block text-sm font-semibold mb-2'
            htmlFor=''
          >
            Mensaje
          </label>
          <textarea
            className='w-full px-3 py-2 border rounded-lg bh-gray-800 focus:border-blue-500'
            required
            placeholder='Tu mensaje ...'
            type='text'
            rows='4'
          ></textarea>
        </div>
        <div className='mb-4'>
          <Boton
            type='submit'
            className='button-primary w-full'
          >
            Enviar
          </Boton>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
