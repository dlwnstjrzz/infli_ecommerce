import Link from "next/link";
import { ShoppingBasket } from "lucide-react";
import Logo from "./icons/Logo";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="flex p-3 items-center justify-between px-4">
        <Link href="/" className="font-bold text-xl tracking-tight">
          <Logo />
        </Link>
        <div className="flex items-center gap-4">
          <ShoppingBasket
            className="h-[24px] w-[24px]"
            strokeWidth={2}
            stroke="#9193A1"
          />
        </div>
      </div>
    </header>
  );
}
