import Image from 'next/image';
import Link from 'next/link';
const ProductCard = ({ item }) => {
  return (
    <article className='card'>
      <Link href={`/productos/detail/${item.slug}`}>
        {/* Link para llevar a la pagina de detalle */}
        <Image
          className='rounded-t-xl'
          alt={item.title}
          src={`/images/products/${item.image}`}
          width={300}
          height={300}
          style={{ objectFit: 'contain' }}
        ></Image>
        <div className='card-body'>
          <h4 className='card-title my-5'>{item.title}</h4>
          <div className='card-badges'>
            <span className='badge-secondary'>{item.type}</span>
            <span className='badge'>stock: {item.inStock}</span>
          </div>

          <p className='card-price'>$ {item.price}</p>
        </div>
      </Link>
    </article>
  );
};
export default ProductCard;
