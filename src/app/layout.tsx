import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Improve stretch | 初回限定価格 | 寝屋川 | 香里園 | ストレッチ",
  description: "肩こり腰痛身体の硬さなどでお悩みの方に！初回ご来店だと全身ストレッチが特別価格に！揉みほぐしでは届かない深層の筋肉にアプローチし、筋肉の柔軟性アップ・関節可動域の拡大を経験豊富なプロのトレーナーが動かす。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
