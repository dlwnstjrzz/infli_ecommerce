import { Header } from "@/components/header";
import { CategoryMenu } from "@/components/category-menu";
import { ProductGrid } from "@/components/shop/product-grid";

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="px-4">
        <div className="border-b">
          <CategoryMenu />
        </div>
        <ProductGrid />
      </main>
    </div>
  );
}
