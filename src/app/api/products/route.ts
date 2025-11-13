import { NextResponse } from 'next/server';

const products = [
  { id: 1, name: 'アロマキャンドル', price: 1980 },
  { id: 2, name: 'ドライフラワー', price: 2580 },
  { id: 3, name: 'ガラス花瓶', price: 1200 },
  { id: 4, name: 'ルームスプレー', price: 980 }
];

export async function GET() {
  return NextResponse.json(products);
}

