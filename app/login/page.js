import LoginForm from '../components/auth/LoginForm';
export const metadata = {
  title: 'Login',
  description: 'Página dpara hacer login inicial',
};
const Contacto = () => {
  return (
    <>
      <main className='container m-auto'>
        <section className=''>
          <LoginForm />
        </section>
      </main>
    </>
  );
};

export default Contacto;
