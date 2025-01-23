"use client";

import Image from "next/image";

const categories = [
  {
    id: "draw",
    name: "INFLI\nEVENT",
    icon: "/assets/images/eventIcon.svg",
  },
  {
    id: "men",
    name: "생활 필수품",
    icon: "/assets/images/lifeIcon.svg",
  },
  {
    id: "식료픔 & \n밀키트",
    name: "식료픔 & \n밀키트",
    icon: "/assets/images/IcecreamSvg.svg",
  },
  {
    id: "beauty",
    name: "건강 & \n뷰티",
    icon: "/assets/images/beautyIcon.svg",
  },
  {
    id: "sale",
    name: "학습 도구",
    icon: "/assets/images/studyIcon2.svg",
  },
];

export function CategoryMenu() {
  return (
    <div className="py-6">
      <div className="grid grid-cols-5 gap-4">
        {categories.map((category) => (
          <button
            key={category.id}
            className="flex flex-col items-center gap-2"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-100">
              {typeof category.icon === "string" &&
              category.icon.startsWith("/") ? (
                <Image
                  src={category.icon}
                  alt={category.name}
                  width={32}
                  height={32}
                />
              ) : (
                <span className="text-2xl">{category.icon}</span>
              )}
            </div>
            <span className="text-xs font-medium tracking-tight whitespace-pre-line">
              {category.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
