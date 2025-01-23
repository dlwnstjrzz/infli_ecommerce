"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export function CategoryHeader() {
  const router = useRouter();

  return (
    <div className="sticky top-0 z-40 w-full border-b bg-white">
      <div className="flex h-12 items-center px-4">
        <button
          onClick={() => router.back()}
          className="flex items-center justify-center"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <h1 className="ml-4 text-lg font-medium">카테고리</h1>
      </div>
    </div>
  );
}
