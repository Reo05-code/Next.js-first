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
    <div className={className}>
      <Link href={`/products/${id}`}>
        <Image
          src={finalImageUrl}
          alt={title}
          width={imageSize}
          height={imageSize}
        />
        </Link>
      <h3>{title}</h3>
      {rating !== undefined && reviewCount !== undefined && (
        <p>☆☆☆☆☆（-件）</p>
      )}
      <p>¥{price.toLocaleString()}</p>
      {showCartButton && <button>カートへ</button>}
    </div>
  )
}
