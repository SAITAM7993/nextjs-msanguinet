import EditForm from '@/componentes/admin/EditForm';
const EditPage = async ({ params }) => {
  const { slug } = params;
  const item = await fetch(`http://localhost:300/api/producto/${slug}`, {
    cache: 'no-store',
  }).then((res) => res.json());
  return (
    <div>
      <EditForm item={item} />
    </div>
  );
};
export default EditPage;
