"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";

const TEMP_IMAGE =
  "https://kream-phinf.pstatic.net/MjAyNDAzMTFfMjc4/MDAxNzEwMTM3Nzk2NDMw.YeYr9ZuJ40Z2G3uDVJ-8EbYg5IJ7W1-DGuYOuUEZ7KMg.eOwCeF5_FGoGdbvR2VKXG6asIVwHcmcHFWXL9FHGbjUg.PNG/a_d493ddd50e144437b1e83be8ebc4eebd.png?type=m_webp";

const products = {
  event: [
    {
      id: 1,
      name: "농심 신라면 5봉지",
      price: "22.9",
      image: TEMP_IMAGE,
      brand: "농심",
      isNew: true,
      discount: "10%",
    },
    {
      id: 2,
      name: "CJ 비비고 왕교자 만두 (600g)",
      price: "35.8",
      image: TEMP_IMAGE,
      brand: "CJ",
    },
    {
      id: 3,
      name: "삼양 불닭볶음면 5봉지",
      price: "25.9",
      image: TEMP_IMAGE,
      brand: "삼양",
    },
  ],
  life: [
    {
      id: 4,
      name: "LG 생활건강 페리오 치약 2개입",
      price: "19.9",
      image: TEMP_IMAGE,
      brand: "LG",
    },
    {
      id: 5,
      name: "코멧 일회용 마스크 50매",
      price: "29.9",
      image: TEMP_IMAGE,
      brand: "코멧",
    },
    {
      id: 6,
      name: "LG 수려한 샴푸 500ml",
      price: "45.8",
      image: TEMP_IMAGE,
      brand: "LG",
    },
  ],
  food: [
    {
      id: 7,
      name: "CJ 햇반 컵반 불고기 덮밥",
      price: "15.9",
      image: TEMP_IMAGE,
      brand: "CJ",
    },
    {
      id: 8,
      name: "오뚜기 진라면 컵라면 6개입",
      price: "32.8",
      image: TEMP_IMAGE,
      brand: "오뚜기",
    },
    {
      id: 9,
      name: "동원 양반김 도시락김 32봉",
      price: "28.9",
      image: TEMP_IMAGE,
      brand: "동원",
    },
  ],
  beauty: [
    {
      id: 10,
      name: "이니스프리 그린티 세럼 50ml",
      price: "89.9",
      image: TEMP_IMAGE,
      brand: "이니스프리",
    },
    {
      id: 11,
      name: "메디힐 마스크팩 10매입",
      price: "49.9",
      image: TEMP_IMAGE,
      brand: "메디힐",
    },
    {
      id: 12,
      name: "닥터자르트 세라마이딘 크림",
      price: "158.0",
      image: TEMP_IMAGE,
      brand: "닥터자르트",
    },
  ],
  study: [
    {
      id: 13,
      name: "모나미 153 볼펜 12개입",
      price: "19.9",
      image: TEMP_IMAGE,
      brand: "모나미",
    },
    {
      id: 14,
      name: "카카오프렌즈 노트북 파우치 13인치",
      price: "89.9",
      image: TEMP_IMAGE,
      brand: "카카오프렌즈",
    },
    {
      id: 15,
      name: "제브라 마일드라이너 형광펜 5색",
      price: "25.8",
      image: TEMP_IMAGE,
      brand: "제브라",
    },
  ],
};

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
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "event";

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
