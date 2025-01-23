import Image from "next/image";

const products = [
  {
    id: 1,
    name: "농심 신라면 5개입 + 짜파게티 5개입 + 너구리 5개입 세트",
    price: "168",
    image:
      "https://kream-phinf.pstatic.net/MjAyNDAzMTFfMjc4/MDAxNzEwMTM3Nzk2NDMw.YeYr9ZuJ40Z2G3uDVJ-8EbYg5IJ7W1-DGuYOuUEZ7KMg.eOwCeF5_FGoGdbvR2VKXG6asIVwHcmcHFWXL9FHGbjUg.PNG/a_d493ddd50e144437b1e83be8ebc4eebd.png?type=m_webp",
    brand: "농심",
    isNew: true,
    discount: "10%",
  },
  {
    id: 2,
    name: "종가집 포기김치 5kg 국내산 100% 배추김치",
    price: "98",
    image:
      "https://kream-phinf.pstatic.net/MjAyMjAyMDRfMjE1/MDAxNjQzOTQ3OTcwNDU3.Z5q_SKgBRvCWF17yUn2wOFraMrUnYUos8_DDv0J-U_gg.dDzwVnbHdYR5wdMRbyFgTfbeD_2gcFscXDoAsB4feBgg.PNG/a_4c45b1d00d3c4f97a28c40ecb106e566.png?type=m_webp",
    brand: "종가집",
    isNew: false,
    discount: null,
  },
  {
    id: 3,
    name: "메디힐 N.M.F 아쿠아링 앰플 마스크 10매입 수분 보습 마스크팩",
    price: "78",
    image:
      "https://kream-phinf.pstatic.net/MjAyMTEwMTRfNTIg/MDAxNjM0MjA1NzQ2NTYw.1QdEB-0rYUmxNkt8JD4XsIVknAaHUhQfM2nkMfPRw6Ig.1SUHYGfZc0S-K7_ls_OYEiWVKfeZVe6qgsuugyI2Clcg.PNG/a_39b383a25b8a4ab1aef1b18d3326f6e7.png?type=m_webp",
    brand: "메디힐",
  },
  {
    id: 4,
    name: "농심 신라면 건면 멀티팩 6개입 + 건면 스프 추가 증정",
    price: "48",
    image:
      "https://kream-phinf.pstatic.net/MjAyMzA4MDhfMjAy/MDAxNjkxNDcwNjQxMDQ4.AmEVIH2yp7zQpAWw7fVEZCBL-PcvXF-4cb24hCEOAWsg.72zihLHJ5YK_99RnDqWpwAiLmf8jOH4wdx3Q7KQXhLwg.PNG/a_6a22d7564b2f48b3903db3b9841aac24.png?type=m_webp",
    brand: "농심",
  },
];

export function PopularProducts() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold tracking-tight">인기 상품</h2>
        <button className="text-sm font-medium text-gray-500 hover:text-gray-700">
          더보기
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="group cursor-pointer overflow-hidden rounded-2xl bg-white transition-all hover:shadow-lg"
          >
            <div>
              <div className="relative">
                <div className="relative aspect-square w-full bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="w-full flex justify-between absolute left-0 top-0 flex gap-1 p-2">
                  {product.isNew && (
                    <div className="rounded-xl bg-gray-100 px-2.5 py-1 shadow-sm backdrop-blur">
                      <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-xs font-bold text-transparent">
                        NEW
                      </span>
                    </div>
                  )}
                  {product.discount && (
                    <div className="rounded-full bg-gray-100 px-2.5 py-1 shadow-sm backdrop-blur">
                      <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-xs font-bold text-transparent">
                        {product.discount}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <div className="space-y-2 p-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium tracking-tight text-gray-900">
                    {product.brand}
                  </p>
                </div>
                <h3 className="text-sm tracking-tight text-gray-700 truncate">
                  {product.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-xs font-medium text-gray-500">¥</span>
                  <p className="font-bold tracking-tight">{product.price}</p>
                  {product.discount && (
                    <span className="text-xs font-medium text-red-500">
                      {product.discount} OFF
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
