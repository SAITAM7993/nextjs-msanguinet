// import { mockData } from '../../data/products';
import ProductCard from './ProductCard';

const ProductsList = async ({ categoria }) => {
  //hago fetch dinamico
  const items = await fetch(
    `http://localhost:3000/api/productos/${categoria}`,
    {
      cache: 'no-store',
      next: { tags: ['productos'] }, //esta peticion se va a catchear con el tag productos
    }
  ).then((r) => r.json());

  return (
    <section className='container m-auto flex justify-center items-center gap-12 flex-wrap'>
      {items.map((item) => (
        <ProductCard
          key={item.slug}
          item={item}
        />
      ))}
    </section>
  );
};

export default ProductsList;
