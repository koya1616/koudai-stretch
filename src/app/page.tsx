import Link from 'next/link'
import styles from "./page.module.css";
import React from "react";
import Image from 'next/image'
import topImage1 from '../../public/top-image-1.jpg'
import topImage2 from '../../public/top-image-2.jpg'
import topImage3 from '../../public/top-image-3.jpg'
import topImage4 from '../../public/top-image-4.jpg'
import koudaiFace from '../../public/koudai.jpg'
import lineQr from '../../public/qrcode.jpg'

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
    <div className={styles.content}>
      <div className={styles.topMessage}>
        幸福感を決める最も重要な項目は身体が健康であること。
      </div>
      <div className="carousel carousel-center rounded space-x-4 my-4 mx-auto w-[95%]">
        <Image className="carousel-item w-11/12" src={topImage1} alt="部屋画像" />
        <Image className="carousel-item w-11/12" src={topImage2} alt="部屋画像" />
        <Image className="carousel-item w-11/12" src={topImage3} alt="部屋画像" />
        <Image className="carousel-item w-11/12" src={topImage4} alt="部屋画像" />
      </div>
      <div className={styles.mainMessage}>
        かがむと腰が痛い・肩が痛くて腕が上がらない・歩くと股関節が痛いなど、<br/>
        Improve Stretchでは、そんな人の人生の幸福度を高めるサポートをさせていただきます。<br/>
        Improveとは「向上」<br/>
        その場しのぎではなく、その後の身体機能をImprove（向上）し<br/>
        本来の動きを取り戻して年齢関係なく人生でできる幅を広げて欲しい！<br/>
        そんな想いが込められています。<br/>
        ストレッチで身体が動く楽しさを知って欲しい<br/>
        Improve Stretchではお客様の「こうなりたい！」に全力でサポート致します。<br/>
      </div>
      <div className={styles.profile}>
        <div className={styles.kodaiImg}>
          <h1>KODAI</h1>
          <Image src={koudaiFace} alt="金澤航大" />
        </div>
        <div className={styles.career}>
          <h2>経歴</h2>
          <p>名古屋リゾート&スポーツ専門学校卒業</p>
          <p>卒業後　業界No. 1大手ストレッチ専門店入社</p>
          <p>在職中に　関西→関東、初駅中新店舗立ち上げ→関西</p>
          <p>退職後、関西初出店新店舗立ち上げメンバーとして</p>
          <p>ストレッチ専門店入社</p>
          <p>立ち上げ後、新店舗の立て直しとして店長に就任。</p>
          <p>新人育成、店舗運営を経験し売上大幅アップに貢献。</p>
          <p>在職中、関西個人売上No.１、指名数No.1、</p>
          <p>総施術数No.１、新規&指名リピート率No.１、経験あり。</p>
          <p>2023年5月〜Improve Stretch 開業</p>
        </div>
      </div>
      <div className={styles.license}>
        <h1>LICENSE</h1>
        <div className={styles.licenseList}>
          <ul>
            <li>健康運動実践指導者</li>
            <li>JATI-ATI</li>
            <li>日本ストレッチングパートーナー（JSA-CSTP）</li>
            <li>Phi pilates</li>
          </ul>
        </div>
      </div>
      <div className={styles.price}>
        <h1>料金表</h1>
        <div className={styles.message}>
          ストレッチで身体の本来の動きを引き出し、<br/>
          お客様一人一人に合わせたプランでサポート致します。<br/>
          Ex. 肩こり・腰痛・姿勢改善・ゴルフパフォーマンスアップなど<br/>
        </div>
      </div>
      <div className={styles.priceCards}>
        <div className={styles.timeCard}>
          <div className={styles.fortyMinutes}>
            <br/>
            <h3>40分</h3>
            <br/><br/>
            <h3>¥ 5,500</h3>
            <br/>
            <p>上半身もしくは</p>
            <p>下半身のみの施術</p>
            <br/>
          </div>
          <div className={styles.sixMinutes}>
            <br/>
            <h3>60分</h3>
            <br/><br/>
            <h3>¥ 7,700</h3>
            <br/>
            <p>全身スッキリプラン</p>
            <br/>
          </div>
          <div className={styles.eightyMinutes}>
            <br/>
            <h3>80分</h3>
            <p className={styles.recommendation}>おすすめ</p>
            <br/>
            <h3>¥ 9,900</h3>
            <br/>
            <p>全身</p>
            <p>＋</p>
            <p>体の気になる箇所</p>
            <br/>
          </div>
          <div className={styles.hundredMinutes}>
            <br/>
            <h3>100分</h3>
            <br/><br/>
            <h3>¥ 12,100</h3>
            <br/>
            <p>全身</p>
            <p>＋</p>
            <p>コアを鍛え</p>
            <p>悩みを繰り返さない体づくり</p>
            <br/>
          </div>
        </div>
        <div className={styles.optionCard}>
          <h3>オプション</h3>
          トレーニング　　10分　　　¥ 1,000
        </div>
      </div>
      <div className={styles.qrAndAccess}>
        <div className='w-2/4 text-center'>
          <h2 className='font-bold mb-4'>お問い合わせ先</h2>
          <Link href="https://lin.ee/qzUDHGR" target='_blank'>
            <Image className='w-4/5 mx-auto' src={lineQr} alt="LINE QRコード" />
          </Link>
        </div>
        <div className={styles.access}>
          <h2>アクセス</h2>
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
