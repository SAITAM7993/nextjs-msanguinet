import EditForm from '@/app/components/admin/EditForm';
export const metadata = {
  title: 'EIPI - Admim editar producto',
  description: 'página de edición de producto',
};
const EditPage = async ({ params }) => {
  const { slug } = params;
  const item = await fetch(
    `https://nextjs-msanguinet.vercel.app/api/producto/${slug}`,
    {
      cache: 'no-store',
      next: { tags: ['productos'] },
    }
  ).then((res) => res.json());
  return (
    <div>
      <EditForm item={item} />
    </div>
  );
};
export default EditPage;
