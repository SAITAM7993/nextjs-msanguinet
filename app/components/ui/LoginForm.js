import Boton from './Boton';

const LoginForm = () => {
  return (
    <div class='p-6 space-y-4 md:space-y-6 sm:p-8'>
      <div className='max-w-xl w-full mx-auto rounded-3xl shadow-xl bg-white p-12 border-slate-300'>
        <h1 className='title1'>Ingresar a la cuenta</h1>
        <form action=''>
          <div className='mb-4'>
            <label
              className='block text-sm font-semibold mb-2'
              htmlFor=''
            >
              Mail
            </label>
            <input
              className='w-full px-3 py-2 border rounded-lg bg-gray-50'
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
              Contraseña
            </label>
            <input
              className='w-full px-3 py-2 border rounded-lg bg-gray-50 '
              required
              placeholder='********'
              type='password'
            ></input>
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
    </div>
  );
};

export default LoginForm;
