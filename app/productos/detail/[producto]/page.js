//detalle de producto

// export const metadata = {
//   title: 'EIPI - Detalle de producto',
//   description: 'Detalle de producto',
// };

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
      <ProductDetail slug={producto} />
    </main>
  );
};

export default Detail;
