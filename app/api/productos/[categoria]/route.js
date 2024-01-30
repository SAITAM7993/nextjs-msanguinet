//route handler de productos
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '@/app/firebase/config';
import { NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';
// import { revalidatePath } from 'next/cache';

export async function GET(request, { params }) {
  //const { categoria } = 'todos';  params;
  const categoria = 'laptop';
  const productosRef = collection(db, 'productos'); //coleccion de firebase

  const q =
    categoria === 'todos'
      ? productosRef
      : query(productosRef, where('type', '==', categoria)); //query que estamos haciendo

  const querySnapshot = await getDocs(q);

  const docs = querySnapshot.docs.map((doc) => doc.data());
  revalidateTag('productos'); //es el mismo tag que creamos en ProductsList, revalida segun un TAG
  return NextResponse.json(docs);
}
