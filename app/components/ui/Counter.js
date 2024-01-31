'use client';
import Boton from './Boton';
const Counter = ({ counter, setCounter, max }) => {
  const increase = () => counter < max && setCounter(counter + 1);
  const decrease = () => counter > 1 && setCounter(counter - 1);

  return (
    <div className='flex items-center gap-2'>
      <Boton
        onClick={decrease}
        className='button-secondary'
      >
        -
      </Boton>
      <p>{counter}</p>
      <Boton
        onClick={increase}
        className='button-secondary'
      >
        +
      </Boton>
    </div>
  );
};

export default Counter;
