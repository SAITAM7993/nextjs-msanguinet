//muestra el listado de los productos
import CategoriesMenu from '@/app//components/products/CategoriesMenu';
import ProductsList from '@/app/components/products/ProductsList';
import { Suspense } from 'react';
import Loader from '@/app/components/ui/Loader';
export async function generateMetadata({ params, searchParams, parent }) {
  return {
    title: `EIPI - ${params.categoria}`,
  };
}

const Productos = ({ params }) => {
  const { categoria } = params;
  return (
    <>
      <main className='container m-auto'>
        <div className='flex gap-10'>
          <CategoriesMenu /> {/*menu lateral */}
          <div className='w-screen'>
            {/*para centrar el loader */}
            <Suspense fallback={<Loader message='Cargando productos' />}>
              <ProductsList categoria={categoria} />
            </Suspense>
          </div>
        </div>
      </main>
    </>
  );
};

export default Productos;
