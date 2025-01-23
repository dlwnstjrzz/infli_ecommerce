"use client";

import Image from "next/image";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

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

export function CategoryMenu() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category") || "event";
  const isShopPage = pathname === "/shop";

  const handleCategoryClick = (categoryId) => {
    if (isShopPage) {
      router.push(`/shop?category=${categoryId}`);
    } else {
      router.push(`/shop?category=${categoryId}`);
    }
  };

  return (
    <div className="py-6">
      <div className="grid grid-cols-5 gap-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className="flex flex-col items-center gap-2"
          >
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 transition-all ${
                isShopPage && currentCategory === category.id
                  ? "ring-2 ring-blue-500 bg-blue-50"
                  : ""
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
                  ? currentCategory === category.id
                    ? "font-bold text-blue-500"
                    : "font-medium text-gray-500"
                  : "font-medium"
              }`}
            >
              {category.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
