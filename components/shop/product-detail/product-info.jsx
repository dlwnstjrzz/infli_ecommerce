import Image from "next/image";

export function ProductInfo({ product }) {
  return (
    <div>
      <div className="relative aspect-square w-full bg-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          priority
        />
        {product.limitedQuantity && (
          <div className="absolute top-3 left-3 bg-black/70 backdrop-blur px-3 py-1.5 rounded-full">
            <p className="text-xs font-bold text-white">
              선착순 {product.limitedQuantity}개 중 {product.remainingQuantity}
              개 남음
            </p>
          </div>
        )}
      </div>
      <div className="p-4 space-y-2">
        {product.limitedQuantity && product.remainingQuantity < 10 && (
          <div className="flex items-center gap-1 text-red-500">
            <span className="inline-block w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <p className="text-sm font-bold">
              매진 임박! {product.remainingQuantity}개 남음
            </p>
          </div>
        )}
        <p className="text-sm font-medium text-gray-500">{product.brand}</p>
        <div className="flex items-baseline gap-1">
          <span className="text-sm font-medium text-gray-500">¥</span>
          <p className="text-2xl font-bold">{product.price}</p>
          {product.discount && (
            <span className="ml-2 text-sm font-medium text-red-500 bg-red-50 px-2 py-1 rounded">
              {product.discount} OFF
            </span>
          )}
        </div>
        <div className="space-y-1">
          <h1 className="text-base text-gray-900">{product.name}</h1>
        </div>
        {product.isNew && (
          <div className="inline-block">
            <span className="text-xs font-bold text-indigo-500 bg-indigo-50 px-2 py-1 rounded">
              NEW
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
