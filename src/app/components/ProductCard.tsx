// ユーザーからの操作がある場合に書いておいてクライアント側で実行できるようにする
'use client'

import Image from "next/image"
import Link from "next/link"

interface ProductCardProps {
  id: string;
  title: string;
  price: number;

  imageUrl: string;
  imageSize?: 300 | 400;

  rating?: number;
  reviewCount?: number;

  showCartButton?: boolean;
  className?: string;
}

export default function ProductCard({
  id,
  title,
  price,
  imageUrl,
  imageSize = 300,
  rating,
  reviewCount,
  showCartButton = false,
  className = ''
}: ProductCardProps) {

  const finalImageUrl = imageUrl || '/images/no-image.png';

  return (
    <div className={`
      flex flex-col bg-white max-w-sm w-full p-2
      ${className}
    `}>
      <Link href={`/products/${id}`}>
        <Image
          src={finalImageUrl}
          alt={title}
          width={imageSize}
          height={imageSize}
          className="w-full object-contain aspect-square"
        />
        </Link>
        <div className="flex flex-col">
      <h3 className="text-sm font-semibold leading-tight mb-1">{title}</h3>
      {rating !== undefined && reviewCount !== undefined && (
        <p>☆☆☆☆☆（-件）</p>
      )}
      <div className="flex justify-between items-center w-full mt-2"></div>
      <p className="text-lg font-bold">¥{price.toLocaleString()}</p>
      {showCartButton && <button className="
                border border-indigo-500 hover:bg-indigo-400
                text-indigo-500 hover:text-white
                py-2 px-4 rounded-sm">カートへ</button>}
        </div>
      </div>
  )
}
