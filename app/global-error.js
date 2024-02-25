'use client'; //los errors siempre son client porque deberian tener interactividad
import Boton from '@/app/components/ui/Boton';

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <div className='continer m-auto text-center'>
          <p className='title2'> Algo no salio bien</p>
          <Boton
            className='button-primary'
            onClick={() => reset()}
          >
            Intentar nuevamente
          </Boton>
        </div>
      </body>
    </html>
  );
}
