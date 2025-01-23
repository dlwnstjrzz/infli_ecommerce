import { ProductHeader } from "@/components/shop/product-detail/product-header";
import { ProductInfo } from "@/components/shop/product-detail/product-info";
import { ProductDescription } from "@/components/shop/product-detail/product-description";
import { PurchaseButton } from "@/components/shop/product-detail/purchase-button";
import { getProductById } from "@/data/products";
import { notFound } from "next/navigation";

export default function ProductDetailPage({ params }) {
  const product = getProductById(params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white pb-[calc(4rem+env(safe-area-inset-bottom))]">
      <ProductHeader />
      <main>
        <ProductInfo product={product} />
        <div className="h-2 bg-gray-50" />
        <div className="py-6">
          <h2 className="px-4 text-lg font-bold mb-4">상세정보</h2>
          <ProductDescription description={product.description} />
        </div>
      </main>
      <div className="fixed bottom-0 left-0 right-0 bg-white max-w-[480px] mx-auto">
        <PurchaseButton price={product.price} />
      </div>
    </div>
  );
}
