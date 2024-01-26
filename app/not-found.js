import GoBack from './components/ui/GoBack';
export const metadata = {
  title: 'EIPI - Página no encontrada',
  description: 'Página no encontrada',
};
const NotFound = () => {
  return (
    <>
      <main className='container my-40  text-center'>
        <h1 className='text-4xl my-4'>Página no encontrada</h1>
        <p className='text-base mt-4'>La ruta que desea acceder no existe</p>
        <GoBack className='button-primary my-8' />
      </main>
    </>
  );
};
export default NotFound;
