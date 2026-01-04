"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ModernHome() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-slate-50 to-white overflow-x-hidden">
			{/* Hero Section - モバイル最適化 */}
			<section className="pt-12 pb-6 px-4 sm:pt-20 sm:pb-16 sm:px-6 md:px-8 text-center animate-fade-in max-w-7xl mx-auto">
				<h1 className="text-slate-800 font-bold leading-relaxed">
					<span className="block text-xl sm:text-3xl md:text-4xl mb-2 sm:mb-3">
						幸福感を決める
					</span>
					<span className="block text-xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">
						最も重要な項目は
					</span>
					<span className="block text-2xl sm:text-4xl md:text-5xl text-blue-600 font-extrabold">
						身体が健康であること。
					</span>
				</h1>
			</section>

			{/* Image Section - モバイル：カルーセル / PC：グリッド */}
			<section className="py-8 sm:py-12 animate-fade-in-delay-1 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
				{/* モバイル用カルーセル */}
				<div className="md:hidden carousel carousel-center rounded-box w-full space-x-3 bg-transparent snap-x snap-mandatory overflow-x-auto scroll-smooth">
					<div className="carousel-item w-[85%] snap-center flex-shrink-0">
						<Image
							className="rounded-2xl shadow-2xl w-full h-auto active:scale-95 transition-transform duration-200 touch-manipulation"
							src="https://x73yjxo4qx7cwsgw.public.blob.vercel-storage.com/top-image-1.jpg"
							alt="部屋画像"
							width={400}
							height={240}
							priority
						/>
					</div>
					<div className="carousel-item w-[85%] snap-center flex-shrink-0">
						<Image
							className="rounded-2xl shadow-2xl w-full h-auto active:scale-95 transition-transform duration-200 touch-manipulation"
							src="https://x73yjxo4qx7cwsgw.public.blob.vercel-storage.com/top-image-2.jpg"
							alt="部屋画像"
							width={400}
							height={240}
						/>
					</div>
					<div className="carousel-item w-[85%] snap-center flex-shrink-0">
						<Image
							className="rounded-2xl shadow-2xl w-full h-auto active:scale-95 transition-transform duration-200 touch-manipulation"
							src="https://x73yjxo4qx7cwsgw.public.blob.vercel-storage.com/top-image-3.jpg"
							alt="部屋画像"
							width={400}
							height={240}
						/>
					</div>
					<div className="carousel-item w-[85%] snap-center flex-shrink-0">
						<Image
							className="rounded-2xl shadow-2xl w-full h-auto active:scale-95 transition-transform duration-200 touch-manipulation"
							src="https://x73yjxo4qx7cwsgw.public.blob.vercel-storage.com/top-image-4.jpg"
							alt="部屋画像"
							width={400}
							height={240}
						/>
					</div>
				</div>

				{/* PC用グリッド */}
				<div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
					<div className="group overflow-hidden rounded-2xl shadow-2xl transition-all duration-300 hover:shadow-3xl hover:-translate-y-1">
						<Image
							className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
							src="https://x73yjxo4qx7cwsgw.public.blob.vercel-storage.com/top-image-1.jpg"
							alt="部屋画像"
							width={400}
							height={240}
							priority
						/>
					</div>
					<div className="group overflow-hidden rounded-2xl shadow-2xl transition-all duration-300 hover:shadow-3xl hover:-translate-y-1">
						<Image
							className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
							src="https://x73yjxo4qx7cwsgw.public.blob.vercel-storage.com/top-image-2.jpg"
							alt="部屋画像"
							width={400}
							height={240}
						/>
					</div>
					<div className="group overflow-hidden rounded-2xl shadow-2xl transition-all duration-300 hover:shadow-3xl hover:-translate-y-1">
						<Image
							className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
							src="https://x73yjxo4qx7cwsgw.public.blob.vercel-storage.com/top-image-3.jpg"
							alt="部屋画像"
							width={400}
							height={240}
						/>
					</div>
					<div className="group overflow-hidden rounded-2xl shadow-2xl transition-all duration-300 hover:shadow-3xl hover:-translate-y-1">
						<Image
							className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
							src="https://x73yjxo4qx7cwsgw.public.blob.vercel-storage.com/top-image-4.jpg"
							alt="部屋画像"
							width={400}
							height={240}
						/>
					</div>
				</div>
			</section>

			{/* About Section - モバイル最適化 */}
			<section className="py-12 sm:py-16 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto animate-fade-in-delay-2">
				<div className="max-w-3xl mx-auto">
					<div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 md:p-12 active:shadow-2xl transition-shadow duration-200">
						<p className="text-sm sm:text-base leading-relaxed text-slate-700">
							かがむと腰が痛い・肩が痛くて腕が上がらない・歩くと股関節が痛いなど、
							Improve
							Stretchでは、そんな人の人生の幸福度を高めるサポートをさせていただきます。
						</p>
						<div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4 text-sm sm:text-base text-slate-600">
							<p>
								<span className="font-bold text-blue-600 text-base sm:text-lg">
									Improve
								</span>
								とは「向上」
							</p>
							<p>
								その場しのぎではなく、その後の身体機能をImprove（向上）し本来の動きを取り戻して年齢関係なく人生でできる幅を広げて欲しい！
							</p>
							<p>そんな想いが込められています。</p>
							<p className="font-semibold text-base sm:text-lg text-slate-800 pt-2">
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

			{/* Pricing Section - モバイル最適化 */}
			<section className="py-12 sm:py-16 px-4 sm:px-6 md:px-8 animate-fade-in-delay-3 max-w-7xl mx-auto">
				<div className="max-w-5xl mx-auto">
					<h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 sm:mb-6 text-slate-800">
						料金表
					</h2>
					<p className="text-center text-slate-600 mb-8 sm:mb-12 leading-relaxed text-sm sm:text-base px-2">
						ストレッチで身体の本来の動きを引き出し、
						<br />
						お客様一人一人に合わせたプランでサポート致します。
						<br />
						<span className="text-xs sm:text-sm text-slate-500 mt-2 inline-block">
							Ex. 肩こり・腰痛・姿勢改善・ゴルフパフォーマンスアップなど
						</span>
					</p>

					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
						<div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 active:scale-95 sm:active:scale-100 sm:hover:shadow-2xl sm:hover:-translate-y-2 transition-all duration-300 touch-manipulation">
							<h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-2">
								40分
							</h3>
							<p className="text-3xl sm:text-4xl font-bold text-blue-600 mb-3 sm:mb-4">
								¥ 5,500
							</p>
							<p className="text-sm sm:text-base text-slate-600">
								上半身もしくは
								<br />
								下半身のみの施術
							</p>
						</div>

						<div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 active:scale-95 sm:active:scale-100 sm:hover:shadow-2xl sm:hover:-translate-y-2 transition-all duration-300 touch-manipulation">
							<h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-2">
								60分
							</h3>
							<p className="text-3xl sm:text-4xl font-bold text-blue-600 mb-3 sm:mb-4">
								¥ 7,700
							</p>
							<p className="text-sm sm:text-base text-slate-600">
								全身スッキリプラン
							</p>
						</div>

						<div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-xl p-6 sm:p-8 border-4 border-blue-400 active:scale-95 sm:active:scale-100 sm:hover:shadow-2xl sm:hover:-translate-y-2 transition-all duration-300 relative touch-manipulation">
							<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-500 text-white px-4 sm:px-6 py-1 rounded-full text-xs sm:text-sm font-bold shadow-lg">
								おすすめ
							</div>
							<h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-2">
								80分
							</h3>
							<p className="text-3xl sm:text-4xl font-bold text-blue-600 mb-3 sm:mb-4">
								¥ 9,900
							</p>
							<p className="text-sm sm:text-base text-slate-700">
								全身
								<br />+<br />
								体の気になる箇所
							</p>
						</div>

						<div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 active:scale-95 sm:active:scale-100 sm:hover:shadow-2xl sm:hover:-translate-y-2 transition-all duration-300 touch-manipulation">
							<h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-2">
								100分
							</h3>
							<p className="text-3xl sm:text-4xl font-bold text-blue-600 mb-3 sm:mb-4">
								¥ 12,100
							</p>
							<p className="text-sm sm:text-base text-slate-600">
								全身
								<br />+<br />
								コアを鍛え
								<br />
								悩みを繰り返さない体づくり
							</p>
						</div>
					</div>

					<div className="bg-slate-100 rounded-2xl shadow-md p-5 sm:p-6 text-center">
						<h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2">
							オプション
						</h3>
						<p className="text-sm sm:text-base text-slate-700">
							トレーニング　　10分　　　¥ 1,000
						</p>
					</div>
				</div>
			</section>

			{/* Profile Section - モバイル最適化 */}
			<section className="py-12 sm:py-16 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-slate-50 to-white animate-fade-in-delay-4 max-w-7xl mx-auto">
				<div className="max-w-4xl mx-auto">
					<div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 md:p-12">
						<div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center mb-8 sm:mb-12">
							<div className="text-center sm:w-1/3">
								<h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-slate-800">
									KODAI
								</h2>
								<Image
									className="rounded-full shadow-2xl mx-auto ring-4 ring-blue-200"
									src="https://x73yjxo4qx7cwsgw.public.blob.vercel-storage.com/koudai.jpg"
									alt="金澤航大"
									width={180}
									height={180}
								/>
							</div>
							<div className="sm:w-2/3">
								<h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-slate-800 text-center sm:text-left">
									経歴
								</h3>
								<div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
									<p>名古屋リゾート&スポーツ専門学校卒業</p>
									<p>卒業後　業界No. 1大手ストレッチ専門店入社</p>
									<p>在職中に　関西→関東、初駅中新店舗立ち上げ→関西</p>
									<p>退職後、関西初出店新店舗立ち上げメンバーとして</p>
									<p>ストレッチ専門店入社</p>
									<p>立ち上げ後、新店舗の立て直しとして店長に就任。</p>
									<p>新人育成、店舗運営を経験し売上大幅アップに貢献。</p>
									<p>在職中、関西個人売上No.１、指名数No.1、</p>
									<p>総施術数No.１、新規&指名リピート率No.１、経験あり。</p>
									<p className="font-semibold text-blue-600 text-sm sm:text-base pt-2">
										2023年5月〜Improve Stretch 開業
									</p>
								</div>
							</div>
						</div>

						<div className="border-t border-slate-200 pt-6 sm:pt-8">
							<h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center text-slate-800">
								LICENSE
							</h3>
							<ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm text-slate-700">
								<li className="flex items-center">
									<span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0" />
									健康運動実践指導者
								</li>
								<li className="flex items-center">
									<span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0" />
									JATI-ATI
								</li>
								<li className="flex items-center">
									<span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0" />
									日本ストレッチングパートーナー（JSA-CSTP）
								</li>
								<li className="flex items-center">
									<span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0" />
									Phi pilates
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* Contact & Access Section - モバイル最適化 */}
			<section className="py-12 sm:py-16 px-4 sm:px-6 md:px-8 animate-fade-in-delay-5 max-w-7xl mx-auto">
				<div className="max-w-5xl mx-auto">
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
						{/* Contact */}
						<div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 text-center">
							<h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-slate-800">
								お問い合わせ先
							</h2>
							<Link
								href="https://lin.ee/qzUDHGR"
								target="_blank"
								className="inline-block active:scale-95 sm:hover:scale-105 transition-transform duration-300 touch-manipulation"
							>
								<Image
									className="rounded-xl shadow-lg mx-auto"
									src="https://x73yjxo4qx7cwsgw.public.blob.vercel-storage.com/qrcode.jpg"
									alt="LINE QRコード"
									width={180}
									height={180}
								/>
							</Link>
							<p className="text-xs sm:text-sm text-slate-500 mt-4">
								タップしてLINEで連絡
							</p>
						</div>

						{/* Access */}
						<div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8">
							<h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center text-slate-800">
								アクセス
							</h2>
							<div className="text-xs sm:text-sm text-slate-600 space-y-2 leading-relaxed">
								<p className="font-semibold text-slate-800 text-sm sm:text-base">
									〒572-0084
									<br />
									大阪府寝屋川市香里南之町32-5 YNレジデンス香里607
								</p>
								<p>
									<span className="font-semibold">TEL：</span>
									<a
										href="tel:09042349046"
										className="text-blue-600 underline active:text-blue-800 sm:hover:text-blue-800 transition-colors touch-manipulation"
									>
										090-4234-9046
									</a>
								</p>
								<p>
									<span className="font-semibold">営業時間：</span>10:00〜21:00
								</p>
								<p className="text-slate-500">不定休（時間外相談可）</p>
								<div className="mt-4 pt-4 border-t border-slate-200">
									<p className="text-[10px] sm:text-xs text-slate-500 leading-relaxed">
										香里園駅西口→線路沿いに歩くと左手に踏切、右手に〈金券ショップ〉がある場所を右折。踏切を背に〈香里ダイエー本通り商店街〉を直進。左手１Fの薬局〈サンドラッグ〉があるマンションに当店舗があります。入口はサンドラッグを通過し、左手に居酒屋〈ハコ〉と黄色の看板〈買取センタ－キングラム〉の間の路地を入り、左側〈YNレジデンス〉マンション6階です。インターホンで【607】を押して下さい。
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Footer Spacing */}
			<div className="h-12 sm:h-16" />
		</div>
	);
}
