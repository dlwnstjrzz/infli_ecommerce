import { Inter } from "next/font/google";
import "../styles/globals.css";
import { Navigator } from "@/components/navigator";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "유학생마켓 - 중국 유학생을 위한 쇼핑몰",
  description: "중국에서 유학하는 한국 학생들을 위한 온라인 쇼핑몰입니다.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <main className="min-h-screen max-w-[480px] mx-auto bg-white pb-20">
          {children}
          <Navigator />
        </main>
      </body>
    </html>
  );
}
