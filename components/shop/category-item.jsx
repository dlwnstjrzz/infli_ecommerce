import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function CategoryItem({ category }) {
  return (
    <Link
      href={`/shop/${category.id}`}
      className="flex items-center justify-between p-4 hover:bg-gray-50"
    >
      <div className="space-y-1">
        <h3 className="font-medium">{category.name}</h3>
        <p className="text-sm text-gray-500">{category.description}</p>
        <div className="flex flex-wrap gap-2">
          {category.subCategories.map((sub) => (
            <span key={sub.id} className="text-xs text-gray-500">
              {sub.name}
            </span>
          ))}
        </div>
      </div>
      <ChevronRight className="h-5 w-5 text-gray-400" />
    </Link>
  );
}
