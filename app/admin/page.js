import ProductsTable from '@/app/components/admin/ProductsTable';
const Admin = () => {
  return (
    <div className='container w-full'>
      <h2 className='title1'>Panel de administración</h2>
      <ProductsTable />
    </div>
  );
};

export default Admin;
