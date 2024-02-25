import CreateForm from '@/app/components/admin/CreateForm';
export const metadata = {
  title: 'EIPI - Admim crear producto',
  description: 'página de creación de producto',
};
const CreatePage = async () => {
  return (
    <>
      <main className='container m-auto'>
        <section className=''>
          <CreateForm />
        </section>
      </main>
    </>
  );
};

export default CreatePage;
