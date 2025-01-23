"use client";

import Link from "next/link";
import { useSearchParams, usePathname } from "next/navigation";
import { Suspense } from "react";
import Image from "next/image";

const categories = [
  {
    id: "event",
    name: "INFLI\nEVENT",
    icon: "/assets/images/eventIcon.svg",
  },
  {
    id: "life",
    name: "생활 필수품",
    icon: "/assets/images/lifeIcon.svg",
  },
  {
    id: "food",
    name: "식료픔 & \n밀키트",
    icon: "/assets/images/IcecreamSvg.svg",
  },
  {
    id: "beauty",
    name: "건강 & \n뷰티",
    icon: "/assets/images/beautyIcon.svg",
  },
  {
    id: "study",
    name: "학습 도구",
    icon: "/assets/images/studyIcon2.svg",
  },
];

function CategoryMenuContent() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const isShopPage = pathname === "/shop";
  const currentCategory = isShopPage
    ? searchParams.get("category") || "event"
    : null;

  const handleCategoryClick = (categoryId) => {
    if (searchParams.get("category") === categoryId) {
      // Assuming you want to navigate to /shop?category=categoryId
      // You might want to use Link instead of button
      // For now, we'll use Link
      // You might want to implement this logic differently based on your requirements
    }
  };

  return (
    <div className="grid grid-cols-5 gap-4">
      {categories.map((category) => {
        const isActive = isShopPage && currentCategory === category.id;
        return (
          <Link
            key={category.id}
            href={`/shop?category=${category.id}`}
            className="flex flex-col items-center gap-2"
          >
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 transition-all ${
                isActive ? "ring-2 ring-blue-500 bg-blue-50" : ""
              }`}
            >
              {typeof category.icon === "string" &&
              category.icon.startsWith("/") ? (
                <object
                  data={category.icon}
                  type="image/svg+xml"
                  className="w-8 h-8 pointer-events-none"
                >
                  <Image
                    src={category.icon}
                    alt={category.name}
                    width={32}
                    height={32}
                  />
                </object>
              ) : (
                <span className="text-2xl">{category.icon}</span>
              )}
            </div>
            <span
              className={`text-xs tracking-tight whitespace-pre-line transition-all ${
                isShopPage
                  ? isActive
                    ? "font-bold text-blue-500"
                    : "font-medium text-gray-500"
                  : "font-medium text-gray-900"
              }`}
            >
              {category.name}
            </span>
          </Link>
        );
      })}
    </div>
  );
}

function CategoryMenuSkeleton() {
  return (
    <div className="grid grid-cols-5 gap-4">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="flex flex-col items-center gap-2">
          <div className="h-14 w-14 rounded-full bg-gray-200" />
          <div className="h-4 w-12 bg-gray-200 rounded" />
        </div>
      ))}
    </div>
  );
}

export function CategoryMenu() {
  return (
    <div className="py-6">
      <Suspense fallback={<CategoryMenuSkeleton />}>
        <CategoryMenuContent />
      </Suspense>
    </div>
  );
}
