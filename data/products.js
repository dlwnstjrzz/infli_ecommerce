export const TEMP_IMAGE =
  "https://kream-phinf.pstatic.net/MjAyNDAzMTFfMjc4/MDAxNzEwMTM3Nzk2NDMw.YeYr9ZuJ40Z2G3uDVJ-8EbYg5IJ7W1-DGuYOuUEZ7KMg.eOwCeF5_FGoGdbvR2VKXG6asIVwHcmcHFWXL9FHGbjUg.PNG/a_d493ddd50e144437b1e83be8ebc4eebd.png?type=m_webp";

export const products = {
  event: [
    {
      id: "event-1",
      name: "농심 신라면 5봉지",
      price: "22.9",
      image: TEMP_IMAGE,
      brand: "농심",
      isNew: false,
      discount: "10%",
      description: TEMP_IMAGE, // 상세 설명 이미지
      category: "event",
      limitedQuantity: 50,
      remainingQuantity: 23,
    },
    {
      id: "event-1",
      name: "농심 신라면 5봉지",
      price: "22.9",
      image: TEMP_IMAGE,
      brand: "농심",
      isNew: false,
      discount: "10%",
      description: TEMP_IMAGE, // 상세 설명 이미지
      category: "event",
      limitedQuantity: 50,
      remainingQuantity: 23,
    },
    {
      id: "event-1",
      name: "농심 신라면 5봉지",
      price: "22.9",
      image: TEMP_IMAGE,
      brand: "농심",
      isNew: false,
      discount: "10%",
      description: TEMP_IMAGE, // 상세 설명 이미지
      category: "event",
      limitedQuantity: 50,
      remainingQuantity: 23,
    },
    // ... 다른 상품들
  ],
  life: [
    {
      id: "life-1",
      name: "LG 생활건강 페리오 치약 2개입",
      price: "19.9",
      image:
        "https://kream-phinf.pstatic.net/MjAyMjAyMDRfMjE1/MDAxNjQzOTQ3OTcwNDU3.Z5q_SKgBRvCWF17yUn2wOFraMrUnYUos8_DDv0J-U_gg.dDzwVnbHdYR5wdMRbyFgTfbeD_2gcFscXDoAsB4feBgg.PNG/a_4c45b1d00d3c4f97a28c40ecb106e566.png?type=m_webp",
      brand: "LG",
      description:
        "https://kream-phinf.pstatic.net/MjAyMjAyMDRfMjE1/MDAxNjQzOTQ3OTcwNDU3.Z5q_SKgBRvCWF17yUn2wOFraMrUnYUos8_DDv0J-U_gg.dDzwVnbHdYR5wdMRbyFgTfbeD_2gcFscXDoAsB4feBgg.PNG/a_4c45b1d00d3c4f97a28c40ecb106e566.png?type=m_webp",
      category: "life",
    },
    // ... 다른 상품들
  ],
  food: [
    {
      id: "food-1",
      name: "햇반 컵반",
      price: "15.9",
      image:
        "https://kream-phinf.pstatic.net/MjAyMTEwMTRfNTIg/MDAxNjM0MjA1NzQ2NTYw.1QdEB-0rYUmxNkt8JD4XsIVknAaHUhQfM2nkMfPRw6Ig.1SUHYGfZc0S-K7_ls_OYEiWVKfeZVe6qgsuugyI2Clcg.PNG/a_39b383a25b8a4ab1aef1b18d3326f6e7.png?type=m_webp",
      brand: "햇반",
      description:
        "https://kream-phinf.pstatic.net/MjAyMTEwMTRfNTIg/MDAxNjM0MjA1NzQ2NTYw.1QdEB-0rYUmxNkt8JD4XsIVknAaHUhQfM2nkMfPRw6Ig.1SUHYGfZc0S-K7_ls_OYEiWVKfeZVe6qgsuugyI2Clcg.PNG/a_39b383a25b8a4ab1aef1b18d3326f6e7.png?type=m_webp",
      category: "food",
    },
    // ... 다른 상품들
  ],
  beauty: [
    {
      id: "beauty-1",
      name: "이니스프리 세럼",
      price: "29.9",
      image:
        "https://kream-phinf.pstatic.net/MjAyMzA4MDhfMjAy/MDAxNjkxNDcwNjQxMDQ4.AmEVIH2yp7zQpAWw7fVEZCBL-PcvXF-4cb24hCEOAWsg.72zihLHJ5YK_99RnDqWpwAiLmf8jOH4wdx3Q7KQXhLwg.PNG/a_6a22d7564b2f48b3903db3b9841aac24.png?type=m_webp",
      brand: "이니스프리",
      description:
        "https://kream-phinf.pstatic.net/MjAyMzA4MDhfMjAy/MDAxNjkxNDcwNjQxMDQ4.AmEVIH2yp7zQpAWw7fVEZCBL-PcvXF-4cb24hCEOAWsg.72zihLHJ5YK_99RnDqWpwAiLmf8jOH4wdx3Q7KQXhLwg.PNG/a_6a22d7564b2f48b3903db3b9841aac24.png?type=m_webp",
      category: "beauty",
    },
    // ... 다른 상품들
  ],
  // ... 다른 카테고리
};

export const popularProducts = [
  products.event[0],
  products.life[0],
  products.food[0],
  products.beauty[0],
  // ... 인기 상품 목록
];

export function getProductById(id) {
  for (const category of Object.values(products)) {
    const product = category.find((p) => p.id === id);
    if (product) return product;
  }
  return null;
}
