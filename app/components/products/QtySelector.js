'use client';
//selector de cantidades
import { useState } from 'react';
import Counter from '../ui/Counter';
import Boton from '../ui/Boton';

const QtySelector = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  const handleAdd = () => {
    console.log({
      ...item,
      quantity,
    });
  };
  return (
    <div className='flex flex-col gap-5 mt-6'>
      <Counter
        max={item.inStock}
        counter={quantity}
        setCounter={setQuantity}
      />
      <Boton
        className='button-primary'
        onClick={handleAdd}
      >
        Agregar al carrito
      </Boton>
    </div>
  );
};
export default QtySelector;
