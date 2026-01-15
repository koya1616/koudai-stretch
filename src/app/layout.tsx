import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/app/ui/header";

export const metadata: Metadata = {
	metadataBase: new URL("https://improve-stretch.jp"),
	title: {
		default: "Improve Stretch | 寝屋川・香里園のストレッチ",
		template: "%s | Improve Stretch",
	},
	description:
		"寝屋川市・香里園駅徒歩5分のパーソナルストレッチ「Improve Stretch」。肩こり腰痛身体の硬さなどでお悩みの方に！揉みほぐしでは届かない深層の筋肉にアプローチし、筋肉の柔軟性アップ・関節可動域の拡大を経験豊富なプロのトレーナーが動かす。",
	keywords: [
		"ストレッチ",
		"寝屋川",
		"香里園",
		"肩こり",
		"腰痛",
		"パーソナルストレッチ",
		"姿勢改善",
		"大阪",
		"香里園駅",
		"ストレッチ専門店",
	],
	authors: [{ name: "金澤航大" }],
	creator: "Improve Stretch",
	publisher: "Improve Stretch",
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	openGraph: {
		type: "website",
		locale: "ja_JP",
		url: "https://improve-stretch.jp",
		siteName: "Improve Stretch",
		title: "寝屋川・香里園のストレッチ | Improve Stretch",
		description:
			"寝屋川市・香里園駅徒歩5分のパーソナルストレッチ。肩こり腰痛身体の硬さなどでお悩みの方に！",
		images: [
			{
				url: "https://x73yjxo4qx7cwsgw.public.blob.vercel-storage.com/top-image-1.jpg",
				width: 1200,
				height: 630,
				alt: "Improve Stretch - 寝屋川香里園のストレッチ施術室",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "寝屋川・香里園のストレッチ | Improve Stretch",
		description:
			"寝屋川市・香里園駅徒歩5分のパーソナルストレッチ。肩こり腰痛身体の硬さなどでお悩みの方に！",
		images: [
			"https://x73yjxo4qx7cwsgw.public.blob.vercel-storage.com/top-image-1.jpg",
		],
	},
	alternates: {
		canonical: "https://improve-stretch.jp",
	},
};

const structuredData = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "LocalBusiness",
			"@id": "https://improve-stretch.jp/#localbusiness",
			name: "Improve Stretch",
			description:
				"寝屋川市・香里園駅徒歩5分のパーソナルストレッチ。肩こり・腰痛・姿勢改善などでお悩みの方に、経験豊富なプロのトレーナーが一人一人に合わせた施術を提供します。",
			image: [
				"https://x73yjxo4qx7cwsgw.public.blob.vercel-storage.com/top-image-1.jpg",
				"https://x73yjxo4qx7cwsgw.public.blob.vercel-storage.com/top-image-2.jpg",
				"https://x73yjxo4qx7cwsgw.public.blob.vercel-storage.com/top-image-3.jpg",
				"https://x73yjxo4qx7cwsgw.public.blob.vercel-storage.com/top-image-4.jpg",
			],
			url: "https://improve-stretch.jp",
			telephone: "+81-90-4234-9046",
			priceRange: "¥5,500 - ¥12,100",
			address: {
				"@type": "PostalAddress",
				streetAddress: "香里南之町32-5 YNレジデンス香里607",
				addressLocality: "寝屋川市",
				addressRegion: "大阪府",
				postalCode: "572-0084",
				addressCountry: "JP",
			},
			geo: {
				"@type": "GeoCoordinates",
				latitude: 34.7832718,
				longitude: 135.6288746,
			},
			openingHoursSpecification: {
				"@type": "OpeningHoursSpecification",
				dayOfWeek: [
					"Monday",
					"Tuesday",
					"Wednesday",
					"Thursday",
					"Friday",
					"Saturday",
					"Sunday",
				],
				opens: "10:00",
				closes: "21:00",
			},
			sameAs: ["https://lin.ee/qzUDHGR"],
		},
		{
			"@type": "Organization",
			"@id": "https://improve-stretch.jp/#organization",
			name: "Improve Stretch",
			url: "https://improve-stretch.jp",
			logo: {
				"@type": "ImageObject",
				url: "https://x73yjxo4qx7cwsgw.public.blob.vercel-storage.com/top-image-1.jpg",
			},
			founder: {
				"@type": "Person",
				name: "金澤航大",
				jobTitle: "代表・トレーナー",
			},
			contactPoint: {
				"@type": "ContactPoint",
				telephone: "+81-90-4234-9046",
				contactType: "customer service",
				availableLanguage: "Japanese",
			},
		},
		{
			"@type": "WebSite",
			"@id": "https://improve-stretch.jp/#website",
			url: "https://improve-stretch.jp",
			name: "Improve Stretch",
			description: "寝屋川・香里園のストレッチ",
			publisher: {
				"@id": "https://improve-stretch.jp/#organization",
			},
			inLanguage: "ja-JP",
		},
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja">
			<body>
				<script
					type="application/ld+json"
					// biome-ignore lint/security/noDangerouslySetInnerHtml: Required for structured data
					dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
				/>
				<Header />
				<main>{children}</main>
			</body>
		</html>
	);
}
