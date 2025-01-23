"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GalleryHorizontalEnd, LayoutGrid, Scan } from "lucide-react";

const navigation = [
  {
    name: "홈",
    href: "/",
    icon: GalleryHorizontalEnd,
  },
  {
    name: "카테고리",
    href: "/shop",
    icon: LayoutGrid,
  },
  {
    name: "검색",
    href: "/search",
    icon: Scan,
  },
];

export function Navigator() {
  const pathname = usePathname();

  // 제품 상세 페이지인 경우 Navigator를 숨김
  if (pathname.startsWith("/shop/") && pathname !== "/shop") {
    return null;
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 mx-auto max-w-[480px] border-t bg-white">
      <div className="flex py-[6px]">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className="flex flex-1 flex-col items-center justify-center"
            >
              <item.icon
                className={`h-6 w-6 ${
                  isActive ? "text-gray-900" : "text-gray-500"
                }`}
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span
                className={`text-[10px] ${
                  isActive ? "text-gray-900" : "text-gray-400"
                }`}
              >
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
