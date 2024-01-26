import ContactForm from '../components/ui/ContactForm';
export const metadata = {
  title: 'Contacto',
  description: 'Página de contacto',
};
const Contacto = () => {
  return (
    <>
      <main className='container m-auto'>
        <section className=''>
          <ContactForm />
        </section>
      </main>
    </>
  );
};

export default Contacto;
