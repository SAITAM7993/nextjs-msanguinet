'use client';
import { useAuthContext } from '../context/AuthContext';
import Boton from '../ui/Boton';

const LogoutButton = () => {
  const { logout } = useAuthContext();
  return (
    <>
      <Boton
        className='mx-3 text-white border rounded-2xl py-2 px-2 bg-red-500 hover:bg-red-700 active:bg-red-900 hover:text-white font-semibold text-xs;'
        onClick={logout}
      >
        Cerrar sesión
      </Boton>
    </>
  );
};
export default LogoutButton;
