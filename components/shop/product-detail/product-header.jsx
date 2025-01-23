"use client";

import { ArrowLeft, Share } from "lucide-react";
import { useRouter } from "next/navigation";

export function ProductHeader() {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="flex h-12 items-center justify-between px-4">
        <button onClick={() => router.back()}>
          <ArrowLeft className="h-6 w-6" />
        </button>
        <button>
          <Share className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
