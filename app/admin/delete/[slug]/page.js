import DeleteForm from '@/app/components/admin/DeleteForm';
export const metadata = {
  title: 'EIPI - Admim eliminar producto',
  description: 'página de eliminación de producto',
};
const DeletePage = async ({ params }) => {
  const { slug } = params;
  const item = await fetch(`http://localhost:3000/api/producto/${slug}`, {
    cache: 'no-store',
    next: { tags: ['productos'] },
  }).then((res) => res.json());
  return (
    <div>
      <DeleteForm item={item} />
    </div>
  );
};
export default DeletePage;
