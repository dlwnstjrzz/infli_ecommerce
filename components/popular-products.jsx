"use client";
import Image from "next/image";
import { popularProducts } from "@/data/products";
import { useRouter } from "next/navigation";

export function PopularProducts() {
  const router = useRouter();
  const handleProductClick = (productId) => {
    router.push(`/shop/${productId}`);
  };
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold tracking-tight">인기 상품</h2>
        <button
          onClick={() => router.push("/shop")}
          className="text-sm font-medium text-gray-500 hover:text-gray-700"
        >
          더보기
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {popularProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => handleProductClick(product.id)}
            className="group cursor-pointer overflow-hidden rounded-2xl bg-white transition-all hover:shadow-lg"
          >
            <div>
              <div className="relative">
                <div className="relative aspect-square w-full bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="w-full flex justify-between absolute left-0 top-0 flex gap-1 p-2">
                  {product.isNew && (
                    <div className="rounded-xl bg-gray-100 px-2.5 py-1 shadow-sm backdrop-blur">
                      <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-xs font-bold text-transparent">
                        NEW
                      </span>
                    </div>
                  )}
                  {product.discount && (
                    <div className="rounded-full bg-gray-100 px-2.5 py-1 shadow-sm backdrop-blur">
                      <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-xs font-bold text-transparent">
                        {product.discount}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <div className="space-y-2 p-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium tracking-tight text-gray-900">
                    {product.brand}
                  </p>
                </div>
                <h3 className="text-sm tracking-tight text-gray-700 truncate">
                  {product.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-xs font-medium text-gray-500">¥</span>
                  <p className="font-bold tracking-tight">{product.price}</p>
                  {product.discount && (
                    <span className="text-xs font-medium text-red-500">
                      {product.discount} OFF
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
