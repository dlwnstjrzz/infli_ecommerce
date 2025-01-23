import Image from "next/image";

export function ProductDescription({ description }) {
  return (
    <div className="relative w-full bg-gray-100">
      <Image
        src={description}
        alt="Product Description"
        width={1080}
        height={3000}
        className="w-full"
      />
    </div>
  );
}
