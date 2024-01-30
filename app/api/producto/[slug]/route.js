//route handler de productos
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/app/firebase/config';
import { NextResponse } from 'next/server';

export async function GET(_, { params }) {
  const { slug } = params;
  const docRef = doc(db, 'productos', slug);

  const docSnapshot = await getDoc(docRef);

  return NextResponse.json(docSnapshot.data());
}
