//muestra el listado de los productos
import CategoriesMenu from '@/app//components/products/CategoriesMenu';
import ProductsList from '@/app/components/products/ProductsList';

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
          <ProductsList categoria={categoria} />
        </div>
      </main>
    </>
  );
};

export default Productos;
