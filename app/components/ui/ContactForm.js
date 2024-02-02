'use client';
import { useState } from 'react';
import Boton from './Boton';
import GoBack from './GoBack';
const ContactForm = () => {
  const [values, setValues] = useState({
    name: '',
    phone: '',
    mail: '',
    message: '',
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //para hacer un POST e ingresar los datos, le mandamos values que es lo que llenamos en el form
    await fetch('http://localhost:3000/api/contacto', {
      method: 'POST',
      body: JSON.stringify(values),
    });
  };

  return (
    <div className='max-w-2xl w-full mx-auto rounded-3xl shadow-xl bg-white p-12 border border-slate-200'>
      <h1 className='title1'>Contacto</h1>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label
            className='block text-sm font-semibold mb-2'
            htmlFor=''
          >
            Nombre
          </label>
          <input
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
            htmlFor=''
          >
            Celular
          </label>
          <input
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
            htmlFor=''
          >
            Mail
          </label>
          <input
            name='mail'
            className='w-full px-3 py-2 border rounded-lg bg-gray-50'
            required
            placeholder='mail@mail.com'
            type='email'
            onChange={handleChange}
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
            name='message'
            className='w-full px-3 py-2 border rounded-lg bg-gray-50'
            required
            placeholder='Tu mensaje ...'
            type='text'
            rows='4'
            onChange={handleChange}
          ></textarea>
        </div>
        <div className='mb-4'>
          <Boton
            type='submit'
            className='button-primary w-full'
          >
            Enviar
          </Boton>
          <GoBack className='button-secondary w-full' />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
