import EditForm from '@/app/components/admin/EditForm';
const EditPage = async ({ params }) => {
  const { slug } = params;
  const item = await fetch(`http://localhost:3000/api/producto/${slug}`, {
    cache: 'no-store',
    next: { tags: ['productos'] },
  }).then((res) => res.json());
  return (
    <div>
      <EditForm item={item} />
    </div>
  );
};
export default EditPage;
