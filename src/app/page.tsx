import Link from 'next/link'
import React from "react";
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <header className='shadow-md'>
      <div className='flex justify-between items-center my-0 mx-auto w-[95%] h-14'>
        <h1 className='font-bold'>IMPROVE STRETCH</h1>
        <Link href="https://maps.app.goo.gl/5B4auCXvHaYtT2qg9" target='_blank' className='text-[8px] cursor-pointer'>
          〒572-0084 大阪府寝屋川市香里南之32-5<br/>YNレジデンス 607号室
        </Link>
      </div>
    </header>
    <div className='font-serif text-center mb-8'>
      <div className='text-sm mt-8'>
        幸福感を決める最も重要な項目は身体が健康であること。
      </div>
      <div className="carousel carousel-center rounded space-x-4 my-4 mx-auto w-[95%]">
        <Image className="carousel-item w-11/12" src="https://x73yjxo4qx7cwsgw.public.blob.vercel-storage.com/top-image-1.jpg" alt="部屋画像" width={400} height={240} priority />
        <Image className="carousel-item w-11/12" src="https://x73yjxo4qx7cwsgw.public.blob.vercel-storage.com/top-image-2.jpg" alt="部屋画像" width={400} height={240} />
        <Image className="carousel-item w-11/12" src="https://x73yjxo4qx7cwsgw.public.blob.vercel-storage.com/top-image-3.jpg" alt="部屋画像" width={400} height={240} />
        <Image className="carousel-item w-11/12" src="https://x73yjxo4qx7cwsgw.public.blob.vercel-storage.com/top-image-4.jpg" alt="部屋画像" width={400} height={240} />
      </div>
      <div className='w-[95%] mx-auto my-5 text-[8px] text-center'>
        かがむと腰が痛い・肩が痛くて腕が上がらない・歩くと股関節が痛いなど、<br/>
        Improve Stretchでは、そんな人の人生の幸福度を高めるサポートをさせていただきます。<br/>
        Improveとは「向上」<br/>
        その場しのぎではなく、その後の身体機能をImprove（向上）し<br/>
        本来の動きを取り戻して年齢関係なく人生でできる幅を広げて欲しい！<br/>
        そんな想いが込められています。<br/>
        ストレッチで身体が動く楽しさを知って欲しい<br/>
        Improve Stretchではお客様の「こうなりたい！」に全力でサポート致します。<br/>
      </div>
      <div className='flex mb-5'>
        <div className='w-2/4 text-center'>
          <h1>KODAI</h1>
          <Image className='rounded-full w-4/5 mx-auto' src="https://x73yjxo4qx7cwsgw.public.blob.vercel-storage.com/koudai.jpg" alt="金澤航大" width={180} height={180} />
        </div>
        <div className='text-center'>
          <h2 className='mb-5'>経歴</h2>
          <p className='text-[7px]'>名古屋リゾート&スポーツ専門学校卒業</p>
          <p className='text-[7px]'>卒業後　業界No. 1大手ストレッチ専門店入社</p>
          <p className='text-[7px]'>在職中に　関西→関東、初駅中新店舗立ち上げ→関西</p>
          <p className='text-[7px]'>退職後、関西初出店新店舗立ち上げメンバーとして</p>
          <p className='text-[7px]'>ストレッチ専門店入社</p>
          <p className='text-[7px]'>立ち上げ後、新店舗の立て直しとして店長に就任。</p>
          <p className='text-[7px]'>新人育成、店舗運営を経験し売上大幅アップに貢献。</p>
          <p className='text-[7px]'>在職中、関西個人売上No.１、指名数No.1、</p>
          <p className='text-[7px]'>総施術数No.１、新規&指名リピート率No.１、経験あり。</p>
          <p className='text-[7px]'>2023年5月〜Improve Stretch 開業</p>
        </div>
      </div>
      <div className='w-4/5 mx-auto mb-8'>
        <h1 className='text-center mb-2'>LICENSE</h1>
        <div className='text-xs text-left'>
          <ul>
            <li>健康運動実践指導者</li>
            <li>JATI-ATI</li>
            <li>日本ストレッチングパートーナー（JSA-CSTP）</li>
            <li>Phi pilates</li>
          </ul>
        </div>
      </div>
      <div className='text-center mb-6'>
        <h1 className='mb-2'>料金表</h1>
        <div className='text-xs'>
          ストレッチで身体の本来の動きを引き出し、<br/>
          お客様一人一人に合わせたプランでサポート致します。<br/>
          Ex. 肩こり・腰痛・姿勢改善・ゴルフパフォーマンスアップなど<br/>
        </div>
      </div>
      <div className='w-[95%] mb-8 mx-auto'>
        <div className='grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-5'>
          <div className='shadow-lg text-center rounded-xl'>
            <br/>
            <h3>40分</h3>
            <br/><br/>
            <h3>¥ 5,500</h3>
            <br/>
            <p className='text-xs'>上半身もしくは</p>
            <p className='text-xs'>下半身のみの施術</p>
            <br/>
          </div>
          <div className='shadow-lg text-center rounded-xl'>
            <br/>
            <h3>60分</h3>
            <br/><br/>
            <h3>¥ 7,700</h3>
            <br/>
            <p className='text-xs'>全身スッキリプラン</p>
            <br/>
          </div>
          <div className='shadow-lg text-center rounded-xl'>
            <br/>
            <h3>80分</h3>
            <p className='underline text-red-500'>おすすめ</p>
            <br/>
            <h3>¥ 9,900</h3>
            <br/>
            <p className='text-xs'>全身</p>
            <p className='text-xs'>＋</p>
            <p className='text-xs'>体の気になる箇所</p>
            <br/>
          </div>
          <div className='shadow-lg text-center rounded-xl'>
            <br/>
            <h3>100分</h3>
            <br/><br/>
            <h3>¥ 12,100</h3>
            <br/>
            <p className='text-xs'>全身</p>
            <p className='text-xs'>＋</p>
            <p className='text-xs'>コアを鍛え</p>
            <p className='text-xs'>悩みを繰り返さない体づくり</p>
            <br/>
          </div>
        </div>
        <div className='shadow-lg text-center rounded-xl py-3'>
          <h3>オプション</h3>
          トレーニング　　10分　　　¥ 1,000
        </div>
      </div>
      <div className='flex'>
        <div className='w-2/4 text-center'>
          <h2 className='font-bold mb-4'>お問い合わせ先</h2>
          <Link href="https://lin.ee/qzUDHGR" target='_blank'>
            <Image className='w-4/5 mx-auto' src="https://x73yjxo4qx7cwsgw.public.blob.vercel-storage.com/qrcode.jpg" alt="LINE QRコード" width={180} height={180} />
          </Link>
        </div>
        <div className='text-[7px]'>
          <h2 className='text-center text-2xl'>アクセス</h2>
          〒572-0084<br/>
          大阪府寝屋川市香里南之町32-5 YNレジデンス香里607<br/>
          TEL： 090-4234-9046<br/>
          営業時間： 10:00〜21:00<br/>
          不定休（時間外相談可）<br/>
          香里園駅西口→線路沿いに歩くと左手に踏切、<br/>
          右手に〈金券ショップ〉がある場所を右折。<br/>
          踏切を背に〈香里ダイエー本通り商店街〉を直進。<br/>
          左手１Fの薬局〈サンドラッグ〉があるマンションに<br/>
          当店舗があります。<br/>
          入口はサンドラッグを通過し、左手に居酒屋〈ハコ〉と<br/>
          黄色の看板〈買取センタ－キングラム〉の間の路地を入り、<br/>
          左側〈YNレジデンス〉マンション6階です。<br/>
          インターホンで【607】を押して下さい。<br/>
        </div>
      </div>
    </div>
    </>
  );
}
