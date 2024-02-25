'use client'; //los errors siempre son client porque deberian tener interactividad
import Boton from '@/app/components/ui/Boton';
import { useEffect } from 'react';

export default function GlobalError({ error, reset }) {
  //el parm reset es para volver a intentar
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className='continer m-auto text-center'>
      <p className='title2'> Algo no salió bien</p>
      <Boton
        className='button-primary'
        onClick={() => reset()}
      >
        Intentar nuevamente
      </Boton>
    </div>
  );
}
