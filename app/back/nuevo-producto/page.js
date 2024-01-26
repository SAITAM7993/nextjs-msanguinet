import InsertProduct from '../../components/ui/back/InsertProduct';
export const metadata = {
  title: 'Login',
  description: 'Página dpara hacer login inicial',
};
const NuevoProducto = () => {
  return (
    <>
      <main className='container m-auto'>
        <section className=''>
          <InsertProduct />
        </section>
      </main>
    </>
  );
};

export default NuevoProducto;
