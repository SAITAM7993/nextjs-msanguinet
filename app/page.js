export const metadata = {
  title: 'EIPI - Inicio',
  description: 'Home, inicio de web EIPI',
};
import Image from 'next/image';
import Link from 'next/link';
import Boton from './components/ui/Boton';

const Home = () => {
  return (
    <>
      <main className='container'>
        <section className='bg-white rounded-3xl shadow-3xl  '>
          <div className='grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12'>
            <div className='mr-auto place-self-center lg:col-span-7'>
              <h1 className='max-w-3xl mb-4 text-3xl font-extrabold md:text-5xl xl:text-6xl text-black'>
                EIPI
              </h1>
              <p className='mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-gray-900'>
                La mejor tienda de tecnología
              </p>
              <Link href={`/productos/todos`}>
                <Boton className='button-primary w-full text-xl rounded-full py-5'>
                  IR A TIENDA
                </Boton>
              </Link>
            </div>
            <div className='hidden lg:mt-0 lg:col-span-5 lg:flex'>
              <Image
                alt={'banner'}
                src={
                  'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png'
                }
                width={454}
                height={340}
                style={{ objectFit: 'contain' }}
              />
              {/* <img
                src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png'
                alt='mockup'
              /> */}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;

/*siempre se necesita width y height para Image de next a no ser que coloquemos la propiedad fill, lo que hace que se adapte al contenedor*/
