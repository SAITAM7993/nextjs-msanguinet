'use client';
//boton para volver atras, uso useRouter para guardar la ultima ruta y poder volver
import Boton from './Boton';
import { useRouter } from 'next/navigation';
const GoBack = ({ ...args }) => {
  const router = useRouter();

  return (
    <Boton
      onClick={() => router.back()}
      {...args}
    >
      Volver
    </Boton>
  );
};
export default GoBack;
