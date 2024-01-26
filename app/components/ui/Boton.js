const Boton = ({ children, className = '', ...args }) => {
  return (
    <button
      className={`${className}`}
      {...args}
    >
      {children}
    </button>
  );
};

export default Boton;
