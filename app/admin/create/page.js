import CreateForm from '@/app/components/ui/admin/CreateForm';

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
