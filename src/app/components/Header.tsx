import Link from 'next/link';
import Image from 'next/image';

// 共通ヘッダー
export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* ロゴ */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/images/samurai-store-logo.png"
              alt="SAMURAI Store"
              width={250}
              height={55}
              className="object-contain"
            />
          </Link>
        </div>

        {/* ナビゲーション */}
        <nav className="flex-grow text-center">
          <ul className="flex justify-center space-x-8 list-none">
            <li className="border-r border-gray-300 pr-8"><Link href="/">ホーム</Link></li>
            <li className="border-r border-gray-300 pr-8"><Link href="/products">商品一覧</Link></li>
            <li><Link href="/contact">お問い合わせ</Link></li>
          </ul>
        </nav>

        {/* 検索とアイコン */}
        <div className="flex items-center space-x-4 flex-shrink-0">
          <input
            type="text"
            placeholder="検索..."
            className="border border-gray-300 rounded-md py-1 px-3 text-sm focus:ring-2 focus:ring-indigo-500 hidden sm:block"
          />
          <Link href="/account/favorites" aria-label="Favorites">
            <Image src="/icons/heart-icon.svg" alt="Favorites" width={24} height={24} />
          </Link>
          <Link href="/cart" aria-label="Cart">
            <Image src="/icons/cart-icon.svg" alt="Cart" width={24} height={24} />
          </Link>
          <Link href="/account" aria-label="Account">
            <Image src="/icons/account-icon.svg" alt="Account" width={24} height={24} />
          </Link>
        </div>
      </div>
    </header>
  );
}
