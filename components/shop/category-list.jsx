import { CategoryItem } from "./category-item";

const categories = [
  {
    id: "food",
    name: "식품",
    description: "라면, 과자, 음료 등",
    subCategories: [
      { id: "ramen", name: "라면" },
      { id: "snacks", name: "과자/간식" },
      { id: "drinks", name: "음료" },
      { id: "instant", name: "즉석식품" },
    ],
  },
  {
    id: "daily",
    name: "생활용품",
    description: "욕실, 청소, 주방용품",
    subCategories: [
      { id: "bathroom", name: "욕실용품" },
      { id: "cleaning", name: "청소용품" },
      { id: "kitchen", name: "주방용품" },
    ],
  },
  {
    id: "beauty",
    name: "뷰티",
    description: "스킨케어, 메이크업",
    subCategories: [
      { id: "skincare", name: "스킨케어" },
      { id: "makeup", name: "메이크업" },
      { id: "mask", name: "마스크팩" },
    ],
  },
  {
    id: "study",
    name: "학습",
    description: "문구, 사무용품",
    subCategories: [
      { id: "stationery", name: "문구류" },
      { id: "books", name: "도서" },
      { id: "office", name: "사무용품" },
    ],
  },
];

export function CategoryList() {
  return (
    <div className="divide-y">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}
