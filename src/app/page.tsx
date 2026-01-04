import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
	title: "初回限定価格 | 寝屋川・香里園のストレッチ専門店",
	description:
		"肩こり腰痛身体の硬さなどでお悩みの方に！初回ご来店だと全身ストレッチが特別価格に！揉みほぐしでは届かない深層の筋肉にアプローチし、筋肉の柔軟性アップ・関節可動域の拡大を経験豊富なプロのトレーナーが動かす。",
	openGraph: {
		title: "Improve Stretch | 初回限定価格 | 寝屋川・香里園",
		description:
			"肩こり腰痛身体の硬さなどでお悩みの方に！全身ストレッチが特別価格に！",
		url: "https://improve-stretch.jp",
	},
	alternates: {
		canonical: "https://improve-stretch.jp",
	},
};

const bodyFont = Noto_Sans_JP({
	weight: ["300", "400", "500", "600", "700"],
	subsets: ["latin"],
	display: "swap",
});

const headingFont = Noto_Serif_JP({
	weight: ["400", "600", "700"],
	subsets: ["latin"],
	display: "swap",
});

export default function Home() {
	return (
		<div
			className={`${bodyFont.className} min-h-screen bg-[#f7f4ef] text-slate-900`}
		>
			<div className="relative overflow-hidden">
				<div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(14,116,144,0.22),transparent_70%)] blur-2xl" />
				<div className="pointer-events-none absolute left-0 top-40 h-80 w-80 -translate-x-1/3 rounded-full bg-[radial-gradient(circle_at_center,rgba(244,114,182,0.18),transparent_70%)] blur-3xl" />
				<div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 translate-x-1/4 rounded-full bg-[radial-gradient(circle_at_center,rgba(253,224,71,0.18),transparent_70%)] blur-3xl" />

				<section className="relative mx-auto max-w-6xl px-4 pb-8 pt-12 sm:px-6 sm:pt-20 md:pt-24">
					<div className="grid gap-10 md:grid-cols-[1.1fr,0.9fr] md:items-center">
						<div className="animate-fade-in">
							<h1
								className={`${headingFont.className} mt-4 text-2xl leading-relaxed sm:text-3xl md:text-4xl`}
							>
								<span className="block">幸福感を決める</span>
								<span className="block">最も重要な項目は</span>
								<span className="mt-3 block text-3xl font-semibold text-teal-700 sm:text-4xl md:text-5xl">
									身体が健康であること。
								</span>
							</h1>
						</div>

						<div className="animate-fade-in-delay-1">
							<div className="rounded-[28px] border border-white/70 bg-white/70 p-4 shadow-[0_25px_80px_-45px_rgba(15,23,42,0.6)] backdrop-blur">
								<div className="grid grid-cols-2 gap-3">
									<Image
										className="h-full w-full rounded-2xl object-cover"
										src="https://x73yjxo4qx7cwsgw.public.blob.vercel-storage.com/top-image-1.jpg"
										alt="Improve Stretch施術室の内観 - リラックスできる空間"
										width={400}
										height={240}
										priority
									/>
									<Image
										className="h-full w-full rounded-2xl object-cover"
										src="https://x73yjxo4qx7cwsgw.public.blob.vercel-storage.com/top-image-2.jpg"
										alt="Improve Stretch施術ベッド - プロ仕様のストレッチ設備"
										width={400}
										height={240}
									/>
									<Image
										className="h-full w-full rounded-2xl object-cover"
										src="https://x73yjxo4qx7cwsgw.public.blob.vercel-storage.com/top-image-3.jpg"
										alt="Improve Stretch施術室全景 - 清潔で広々とした空間"
										width={400}
										height={240}
									/>
									<Image
										className="h-full w-full rounded-2xl object-cover"
										src="https://x73yjxo4qx7cwsgw.public.blob.vercel-storage.com/top-image-4.jpg"
										alt="Improve Stretch待合スペース - 落ち着いた雰囲気"
										width={400}
										height={240}
									/>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 sm:pb-16">
					<div className="animate-fade-in-delay-2">
						<div className="rounded-[28px] bg-white/80 px-6 py-8 shadow-[0_25px_80px_-55px_rgba(15,23,42,0.5)] backdrop-blur sm:px-10 sm:py-10">
							<p className="text-sm leading-relaxed text-slate-700 sm:text-base">
								かがむと腰が痛い・肩が痛くて腕が上がらない・歩くと股関節が痛いなど、
								Improve
								Stretchでは、そんな人の人生の幸福度を高めるサポートをさせていただきます。
							</p>
							<div className="mt-6 space-y-3 text-sm text-slate-600 sm:mt-8 sm:space-y-4 sm:text-base">
								<p>
									<span className="font-semibold text-teal-700 sm:text-lg">
										Improve
									</span>
									とは「向上」
								</p>
								<p>
									その場しのぎではなく、その後の身体機能をImprove（向上）し本来の動きを取り戻して年齢関係なく人生でできる幅を広げて欲しい！
								</p>
								<p>そんな想いが込められています。</p>
								<p className="text-base font-semibold text-slate-900 sm:text-lg">
									ストレッチで身体が動く楽しさを知って欲しい
								</p>
								<p>
									Improve
									Stretchではお客様の「こうなりたい！」に全力でサポート致します。
								</p>
							</div>
						</div>
					</div>
				</section>

				<section className="mx-auto max-w-6xl px-4 pb-14 sm:px-6 sm:pb-20">
					<div className="animate-fade-in-delay-3">
						<div className="text-center">
							<h2
								className={`${headingFont.className} text-3xl font-semibold text-slate-900 sm:text-4xl`}
							>
								料金表
							</h2>
							<p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
								ストレッチで身体の本来の動きを引き出し、
								<br />
								お客様一人一人に合わせたプランでサポート致します。
								<br />
								<span className="mt-2 inline-block text-xs text-slate-500 sm:text-sm">
									Ex. 肩こり・腰痛・姿勢改善・ゴルフパフォーマンスアップなど
								</span>
							</p>
						</div>

						<div className="mt-10 grid gap-5 sm:grid-cols-2">
							<div className="rounded-3xl border border-white/70 bg-white/90 p-6 shadow-[0_20px_60px_-50px_rgba(15,23,42,0.7)] transition-transform duration-300 hover:-translate-y-1">
								<h3 className="text-2xl font-semibold text-slate-900">40分</h3>
								<p className="mt-3 text-3xl font-semibold text-teal-700">
									¥ 5,500
								</p>
								<p className="mt-3 text-sm text-slate-600 sm:text-base">
									上半身もしくは
									<br />
									下半身のみの施術
								</p>
							</div>
							<div className="rounded-3xl border border-white/70 bg-white/90 p-6 shadow-[0_20px_60px_-50px_rgba(15,23,42,0.7)] transition-transform duration-300 hover:-translate-y-1">
								<h3 className="text-2xl font-semibold text-slate-900">60分</h3>
								<p className="mt-3 text-3xl font-semibold text-teal-700">
									¥ 7,700
								</p>
								<p className="mt-3 text-sm text-slate-600 sm:text-base">
									全身スッキリプラン
								</p>
							</div>
							<div className="rounded-3xl border border-teal-200 bg-gradient-to-br from-white via-teal-50 to-amber-50 p-6 shadow-[0_20px_60px_-50px_rgba(15,23,42,0.7)] transition-transform duration-300 hover:-translate-y-1">
								<div className="mb-4 inline-flex items-center rounded-full bg-red-500 px-4 py-1 text-xs font-semibold text-white">
									おすすめ
								</div>
								<h3 className="text-2xl font-semibold text-slate-900">80分</h3>
								<p className="mt-3 text-3xl font-semibold text-teal-700">
									¥ 9,900
								</p>
								<p className="mt-3 text-sm text-slate-700 sm:text-base">
									全身
									<br />+<br />
									体の気になる箇所
								</p>
							</div>
							<div className="rounded-3xl border border-white/70 bg-white/90 p-6 shadow-[0_20px_60px_-50px_rgba(15,23,42,0.7)] transition-transform duration-300 hover:-translate-y-1">
								<h3 className="text-2xl font-semibold text-slate-900">100分</h3>
								<p className="mt-3 text-3xl font-semibold text-teal-700">
									¥ 12,100
								</p>
								<p className="mt-3 text-sm text-slate-600 sm:text-base">
									全身
									<br />+<br />
									コアを鍛え
									<br />
									悩みを繰り返さない体づくり
								</p>
							</div>
						</div>

						<div className="mt-6 rounded-3xl bg-slate-100/80 p-5 text-center text-sm text-slate-700 shadow-inner sm:text-base">
							<h3 className="text-lg font-semibold text-slate-900">
								オプション
							</h3>
							<p className="mt-2">トレーニング　　10分　　　¥ 1,000</p>
						</div>
					</div>
				</section>

				<section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 sm:pb-16">
					<div className="animate-fade-in-delay-4 rounded-[32px] bg-white/80 p-6 shadow-[0_25px_80px_-55px_rgba(15,23,42,0.55)] backdrop-blur sm:p-10">
						<div className="grid gap-8 md:grid-cols-[1fr,1.2fr] md:items-center">
							<div className="text-center">
								<h2
									className={`${headingFont.className} text-2xl font-semibold text-slate-900 sm:text-3xl`}
								>
									KODAI
								</h2>
								<div className="mt-5 inline-flex rounded-full bg-white/90 p-2 shadow-lg">
									<Image
										className="rounded-full"
										src="https://x73yjxo4qx7cwsgw.public.blob.vercel-storage.com/koudai.jpg"
										alt="Improve Stretch代表 金澤航大(KODAI) - 経験豊富なストレッチトレーナー"
										width={180}
										height={180}
									/>
								</div>
							</div>
							<div>
								<h3
									className={`${headingFont.className} text-xl font-semibold text-slate-900 sm:text-2xl`}
								>
									経歴
								</h3>
								<div className="mt-4 space-y-2 text-xs text-slate-600 sm:text-sm">
									<p>名古屋リゾート&スポーツ専門学校卒業</p>
									<p>卒業後　業界No. 1大手ストレッチ専門店入社</p>
									<p>在職中に　関西→関東、初駅中新店舗立ち上げ→関西</p>
									<p>退職後、関西初出店新店舗立ち上げメンバーとして</p>
									<p>ストレッチ専門店入社</p>
									<p>立ち上げ後、新店舗の立て直しとして店長に就任。</p>
									<p>新人育成、店舗運営を経験し売上大幅アップに貢献。</p>
									<p>在職中、関西個人売上No.１、指名数No.1、</p>
									<p>総施術数No.１、新規&指名リピート率No.１、経験あり。</p>
									<p className="pt-2 text-sm font-semibold text-teal-700">
										2023年5月〜Improve Stretch 開業
									</p>
								</div>
							</div>
						</div>

						<div className="mt-8 border-t border-slate-200/70 pt-8">
							<h3
								className={`${headingFont.className} text-center text-xl font-semibold text-slate-900 sm:text-2xl`}
							>
								LICENSE
							</h3>
							<ul className="mt-5 grid gap-3 text-xs text-slate-700 sm:grid-cols-2 sm:text-sm">
								<li className="flex items-center gap-3">
									<span className="h-2.5 w-2.5 rounded-full bg-teal-600" />
									健康運動実践指導者
								</li>
								<li className="flex items-center gap-3">
									<span className="h-2.5 w-2.5 rounded-full bg-teal-600" />
									JATI-ATI
								</li>
								<li className="flex items-center gap-3">
									<span className="h-2.5 w-2.5 rounded-full bg-teal-600" />
									日本ストレッチングパートーナー（JSA-CSTP）
								</li>
								<li className="flex items-center gap-3">
									<span className="h-2.5 w-2.5 rounded-full bg-teal-600" />
									Phi pilates
								</li>
							</ul>
						</div>
					</div>
				</section>

				<section className="mx-auto max-w-6xl px-4 pb-14 sm:px-6 sm:pb-20">
					<div className="animate-fade-in-delay-5 grid gap-6 md:grid-cols-2">
						<div className="rounded-[28px] bg-white/85 p-6 text-center shadow-[0_20px_60px_-50px_rgba(15,23,42,0.7)] backdrop-blur sm:p-8">
							<h2
								className={`${headingFont.className} text-xl font-semibold text-slate-900 sm:text-2xl`}
							>
								お問い合わせ先
							</h2>
							<Link
								href="https://lin.ee/qzUDHGR"
								target="_blank"
								className="mt-5 inline-flex rounded-2xl bg-white p-2 shadow-lg transition-transform duration-300 hover:-translate-y-1"
							>
								<Image
									className="rounded-xl"
									src="https://x73yjxo4qx7cwsgw.public.blob.vercel-storage.com/qrcode.jpg"
									alt="Improve Stretch LINE公式アカウント QRコード - 予約・お問い合わせ"
									width={180}
									height={180}
								/>
							</Link>
							<p className="mt-4 text-xs text-slate-500 sm:text-sm">
								タップしてLINEで連絡
							</p>
						</div>

						<div className="rounded-[28px] bg-white/85 p-6 shadow-[0_20px_60px_-50px_rgba(15,23,42,0.7)] backdrop-blur sm:p-8">
							<h2
								className={`${headingFont.className} text-center text-xl font-semibold text-slate-900 sm:text-2xl`}
							>
								アクセス
							</h2>
							<div className="mt-5 space-y-2 text-xs text-slate-600 sm:text-sm">
								<p className="text-sm font-semibold text-slate-900 sm:text-base">
									〒572-0084
									<br />
									大阪府寝屋川市香里南之町32-5 YNレジデンス香里607
								</p>
								<p>
									<span className="font-semibold">TEL：</span>
									<a
										href="tel:09042349046"
										className="text-teal-700 underline transition-colors hover:text-teal-900"
									>
										090-4234-9046
									</a>
								</p>
								<p>
									<span className="font-semibold">営業時間：</span>10:00〜21:00
								</p>
								<p className="text-slate-500">不定休（時間外相談可）</p>
								<div className="mt-4 border-t border-slate-200/80 pt-4">
									<p className="text-[10px] leading-relaxed text-slate-500 sm:text-xs">
										香里園駅西口→線路沿いに歩くと左手に踏切、右手に〈金券ショップ〉がある場所を右折。踏切を背に〈香里ダイエー本通り商店街〉を直進。左手１Fの薬局〈サンドラッグ〉があるマンションに当店舗があります。入口はサンドラッグを通過し、左手に居酒屋〈ハコ〉と黄色の看板〈買取センタ－キングラム〉の間の路地を入り、左側〈YNレジデンス〉マンション6階です。インターホンで【607】を押して下さい。
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<div className="h-12 sm:h-16" />
			</div>
		</div>
	);
}
