import { Header } from "@/components/header";
import { CategoryMenu } from "@/components/category-menu";
import { ProductGrid } from "@/components/shop/product-grid";
import { Suspense } from "react";

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="px-4">
        <div className="border-b">
          <CategoryMenu />
        </div>
        <Suspense fallback={<ProductGridSkeleton />}>
          <ProductGrid />
        </Suspense>
      </main>
    </div>
  );
}

function ProductGridSkeleton() {
  return (
    <div className="space-y-4">
      <div className="text-center space-y-1">
        <div className="h-6 w-32 bg-gray-200 rounded mx-auto" />
        <div className="h-4 w-48 bg-gray-200 rounded mx-auto" />
      </div>
      <div className="grid grid-cols-2 gap-4 px-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="rounded-2xl bg-gray-100 overflow-hidden">
            <div className="aspect-square bg-gray-200" />
            <div className="p-3 space-y-2">
              <div className="h-4 w-16 bg-gray-200 rounded" />
              <div className="h-4 w-32 bg-gray-200 rounded" />
              <div className="h-4 w-20 bg-gray-200 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
