// import { mockData } from '../../data/products';
import ProductCard from './ProductCard';

const getProdByCategory = async (categoria) => {
  const items = await fetch(
    `http://${process.env.VERCEL_URL}/api/productos/${categoria}`,

    {
      cache: 'no-store',
      next: { tags: ['productos'] }, //esta peticion se va a catchear con el tag productos
    }
  );
  if (!items.ok) {
    throw new Error('Fallo en la petición de categoría');
  }
  return items.json();
};

const ProductsList = async ({ categoria }) => {
  //hago fetch dinamico
  const prouctos = await getProdByCategory(categoria);

  return (
    <section className='container flex justify-between items-center gap-10 flex-wrap'>
      {prouctos.map((item) => (
        <ProductCard
          key={item.slug}
          item={item}
        />
      ))}
    </section>
  );
};

export default ProductsList;
