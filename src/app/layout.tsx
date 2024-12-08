import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/app/ui/header";

export const metadata: Metadata = {
	title: "Improve stretch | 初回限定価格 | 寝屋川 | 香里園 | ストレッチ",
	description:
		"肩こり腰痛身体の硬さなどでお悩みの方に！初回ご来店だと全身ストレッチが特別価格に！揉みほぐしでは届かない深層の筋肉にアプローチし、筋肉の柔軟性アップ・関節可動域の拡大を経験豊富なプロのトレーナーが動かす。",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="max-w-md mx-auto">
				<Header />
				<main>{children}</main>
			</body>
		</html>
	);
}
