import ProductsTable from '@/app/components/admin/ProductsTable';
import { Suspense } from 'react';
import Loader from '@/app/components/ui/Loader';
const Admin = () => {
  return (
    <div className='container w-full'>
      <h2 className='title1'>Panel de administración</h2>
      <Suspense fallback={<Loader message='Cargando productos' />}>
        <ProductsTable />
      </Suspense>
    </div>
  );
};

export default Admin;
