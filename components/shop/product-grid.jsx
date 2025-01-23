"use client";

import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { products } from "@/data/products";

const categoryInfo = {
  event: {
    title: "INFLI EVENT",
    description: "인플리 회원들을 위한 특별 할인",
  },
  life: {
    title: "생활 필수품",
    description: "유학 생활 필수템 모음",
  },
  food: {
    title: "식료품 & 밀키트",
    description: "간편하게 즐기는 한국의 맛",
  },
  beauty: {
    title: "건강 & 뷰티",
    description: "K-뷰티 인기 아이템",
  },
  study: {
    title: "학습 도구",
    description: "학업에 필요한 문구류 모음",
  },
};

export function ProductGrid() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "event";

  const handleProductClick = (productId) => {
    router.push(`/shop/${productId}`);
  };

  const categoryProducts = products[category] || [];
  const currentCategory = categoryInfo[category] || {
    title: "",
    description: "",
  };

  return (
    <div className="space-y-4">
      <div className="text-center space-y-1">
        <h2 className="text-xl font-bold pt-6">{currentCategory.title}</h2>
        <p className="text-[0.8125rem] text-[rgba(34,34,34,0.5)]">
          {currentCategory.description}
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {categoryProducts.map((product) => (
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
                  {product.limitedQuantity && (
                    <div className="absolute top-2 left-2 bg-black/70 backdrop-blur px-2 py-1 rounded-full">
                      <p className="text-[10px] font-bold text-white">
                        선착순 {product.remainingQuantity}개
                      </p>
                    </div>
                  )}
                </div>
                <div className="w-full flex justify-between absolute left-0 top-0 flex gap-1 p-2">
                  {product.isNew && (
                    <div className="rounded-xl bg-gray-100 px-2.5 py-1 shadow-sm backdrop-blur">
                      <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-xs font-bold text-transparent">
                        NEW
                      </span>
                    </div>
                  )}
                  {/* {product.discount && (
                    <div className="rounded-full bg-gray-100 px-2.5 py-1 shadow-sm backdrop-blur">
                      <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-xs font-bold text-transparent">
                        {product.discount}
                      </span>
                    </div>
                  )} */}
                </div>
              </div>
              <div className="space-y-2 p-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium tracking-tight text-gray-900">
                    {product.brand}
                  </p>
                </div>
                <h3 className="text-sm tracking-tight text-gray-700 line-clamp-3">
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
