//detalle de producto
import { Suspense } from 'react';
import Loader from '@/app/components/ui/Loader';
import ProductDetail from '@/app/components/products/ProductDetail';

export async function generateMetadata({ params, searchParams }, parent) {
  const title = `EIPI - ${params.producto}`;
  return {
    title: title,
  };
}
const Detail = ({ params }) => {
  const { producto } = params;

  return (
    <main className='container m-auto'>
      <Suspense fallback={<Loader message='Cargando detalle' />}>
        <ProductDetail slug={producto} />
      </Suspense>
    </main>
  );
};

export default Detail;
