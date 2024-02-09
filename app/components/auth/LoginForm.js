'use client';
import { useState } from 'react';
import Boton from '../ui/Boton';
import { useAuthContext } from '../context/AuthContext';

const LoginForm = () => {
  const { registerUser, loginUser, googleLogin } = useAuthContext();
  const [values, setValues] = useState({ email: '', password: '' });
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <div className='fixed w-screen h-screen inset-0 z-10 flex justify-center items-center bg-slate-700 bg-opacity-25'>
      <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
        <div className='max-w-md w-full mx-auto rounded-3xl shadow-xl bg-white p-12 border-slate-300'>
          <h1 className='title1'>Ingresar a la cuenta</h1>
          <form
            action=''
            onSubmit={handleSubmit}
          >
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
                value={values.email}
                name='email'
                onChange={handleChange}
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
                value={values.password}
                name='password'
                onChange={handleChange}
              ></input>
            </div>

            <div className='m-12'>
              <Boton
                onClick={() => loginUser(values)}
                className='button-primary-small w-full mb-2'
              >
                Ingresar
              </Boton>
              <Boton
                onClick={googleLogin}
                className='button-primary-small w-full  mb-2'
              >
                Ingresar con Google
              </Boton>
              <Boton
                onClick={() => registerUser(values)}
                className='button-secondary-small w-full'
              >
                Registrarse
              </Boton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
