import { Header } from "@/components/header";
import { Banner } from "@/components/banner";
import { CategoryMenu } from "@/components/category-menu";
import { PopularProducts } from "@/components/popular-products";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-4">
        <Banner />
        <div className="px-4">
          <CategoryMenu />
          <PopularProducts />
        </div>
      </main>
    </>
  );
}
