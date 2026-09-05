import {
  ArrowDown,
  ArrowRight,
  ChevronRight,
  Fish,
  Camera,
  Leaf,
  Menu,
  MessageCircle,
  Ship,
  Sprout,
  Users,
} from 'lucide-react';
import activities from '../data/activities.json';
import news from '../data/news.json';
import config from '../data/config.json';

const policies = [
  {
    number: '01',
    title: '自然と共生する島づくり',
    copy: '美しい島を、次の世代へ。',
    icon: Leaf,
    points: ['漂着ごみ対策', '海岸環境保全', '自然環境保護', '観光と環境保全の両立'],
  },
  {
    number: '02',
    title: '水産業の振興と漁港整備',
    copy: '海で働き続けられる島へ。',
    icon: Fish,
    points: ['漁港整備', 'パヤオ設置', '漁業環境改善', '若手漁業者支援'],
  },
  {
    number: '03',
    title: '地産地消と自給率向上',
    copy: '島の食を、島で支える。',
    icon: Sprout,
    points: ['島内生産品の活用', '地産地消', '農水産物流通', '地域内経済循環'],
  },
  {
    number: '04',
    title: '若者が残れる島へ',
    copy: '子どもたちが、未来を描ける島へ。',
    icon: Users,
    points: ['雇用創出', '子育て支援', '教育環境と住宅', '若者定住・事業承継'],
  },
  {
    number: '05',
    title: '島をつなぐ交通・港整備',
    copy: '島と島、人と暮らしをつなぐ。',
    icon: Ship,
    points: ['離島航路と船賃', '港湾整備', '島間交通と物流', '医療・生活交通'],
  },
] as const;

const profile = [
  '西表島住吉で育つ',
  '沖縄県立向陽高校卒',
  '宮崎国際大学中退',
  '上原地区青年会長を経験',
  '上原地区連合公民館長を経験',
];

export default function Home() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="塩澤ヒロシ トップへ">
          <span><strong>塩澤ヒロシ</strong><small>西表島・上原在住</small></span>
        </a>
        <nav aria-label="メインナビゲーション">
          <a href="#message">想い</a>
          <a href="#policy">取り組み</a>
          <a href="#profile">プロフィール</a>
          <a href="#activity">活動報告</a>
        </nav>
        <a className="header-cta" href="#voice">声を届ける <ArrowRight size={17} /></a>
        <details className="mobile-menu">
          <summary aria-label="メニューを開く"><Menu size={22} /></summary>
          <div>
            <a href="#message">竹富町への想い</a>
            <a href="#policy">5つの取り組み</a>
            <a href="#profile">プロフィール</a>
            <a href="#activity">活動報告</a>
            <a href="#voice">声を届ける</a>
          </div>
        </details>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="mode-badge">{config.electionMode ? '選挙運動期間表示' : '政治活動サイト'}</div>
          <p className="eyebrow">TAKETOMI COMMUNITY ACTION</p>
          <h1>島の声を、<br /><em>町の力に。</em></h1>
          <p className="hero-lead">竹富町の明日を、みんなでつくる。</p>
          <p className="hero-body">
            暮らし、子育て、産業、環境。<br />
            一人ひとりの声から、島の未来を考えます。
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#voice">竹富町への声を届ける <ArrowRight size={18} /></a>
            <a className="button ghost" href="#policy">5つの取り組みを見る <ArrowDown size={18} /></a>
          </div>
        </div>
        <div className="hero-visual" aria-label="塩澤ヒロシの写真">
          <img className="hero-kv" src={`${basePath}/images/hero-kv.png`} alt="西表島の海を背景にした塩澤ヒロシのキービジュアル" />
        </div>
      </section>

      <section className="intro" id="message">
        <p className="section-kicker">OUR VISION</p>
        <h2>未来は、島から。</h2>
        <p>
          西表島で育ち、地域とともに歩んできました。<br />
          子どもたちからおじい、おばあまで。みんなの声を聞き、<br className="desktop-only" />
          竹富町の未来につながる提案をつくります。
        </p>
        <div className="principles">
          <article><span>01</span><h3>声を聞く</h3><p>島を歩き、暮らしの中にある課題や願いを受け止めます。</p></article>
          <article><span>02</span><h3>一緒に考える</h3><p>立場や世代をこえて話し合い、地域の知恵をつなぎます。</p></article>
          <article><span>03</span><h3>町の力にする</h3><p>集まった声を、実現可能な提案へ丁寧に育てます。</p></article>
        </div>
      </section>

      <section className="policy-section" id="policy">
        <div className="section-heading">
          <div><p className="section-kicker">FIVE ACTIONS</p><h2>竹富町の未来へ<br />5つの取り組み</h2></div>
          <p>地域で聞いた声を出発点に、自然、産業、暮らしがつながる町の未来を考えます。</p>
        </div>
        <div className="policy-grid">
          {policies.map(({ number, title, copy, icon: Icon, points }) => (
            <article className="policy-card" key={number}>
              <div className="policy-top"><span>{number}</span><Icon size={28} strokeWidth={1.8} /></div>
              <h3>{title}</h3>
              <p className="policy-copy">{copy}</p>
              <ul>{points.map((point) => <li key={point}>{point}</li>)}</ul>
              <a href="#voice">このテーマへの声を届ける <ChevronRight size={16} /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="profile-section" id="profile">
        <div className="profile-photo">
          <img src={`${basePath}/images/profile-blue.jpg`} alt="両手を広げる塩澤ヒロシ" />
          <span>PROFILE</span>
        </div>
        <div className="profile-content">
          <p className="section-kicker">ABOUT HIROSHI</p>
          <h2>西表島で育ち、<br />地域とともに歩む。</h2>
          <p className="profile-intro">
            島の暮らしの中で学び、地域活動に携わってきました。
            対話を重ねながら、竹富町のこれからを皆さんと一緒に考えていきます。
          </p>
          <ul className="profile-list">{profile.map((item) => <li key={item}>{item}</li>)}</ul>
          <a className="social-link" href="https://www.instagram.com/choukaimaru/" target="_blank" rel="noopener noreferrer">
            <Camera size={20} /> Instagram @CHOUKAIMARU <ArrowRight size={17} />
          </a>
        </div>
      </section>

      <section className="activity-section" id="activity">
        <div className="section-heading light">
          <div><p className="section-kicker">LOCAL ACTIONS</p><h2>地域での活動</h2></div>
          <p>対話や地域活動の様子を、これから継続的にお伝えします。</p>
        </div>
        {activities.length > 0 ? (
          <div className="content-cards">
            {activities.map((item) => <article key={item.title}><time>{item.date}</time><span>{item.category}</span><h3>{item.title}</h3></article>)}
          </div>
        ) : (
          <div className="empty-state"><MessageCircle size={30} /><div><h3>活動報告を準備しています</h3><p>今後の地域活動や意見交換の様子を、こちらでお知らせします。</p></div></div>
        )}
        {news.length > 0 && (
          <div className="news-list">{news.map((item) => <article key={item.title}><time>{item.date}</time><h3>{item.title}</h3></article>)}</div>
        )}
      </section>

      <section className="voice-section" id="voice">
        <div className="voice-copy">
          <p className="section-kicker">YOUR VOICE</p>
          <h2>あなたの「理想」を<br />聞かせてください。</h2>
          <p>暮らしのこと、子育てのこと、産業のこと、環境のこと。どんな小さなことでも構いません。一人ひとりの声が、竹富町の未来を考える第一歩です。</p>
        </div>
        <div className="voice-card">
          <span className="voice-icon"><MessageCircle size={30} /></span>
          <h3>竹富町への声を届ける</h3>
          <p>お住まいの地域と、ご意見・ご要望をお聞かせください。</p>
          {config.formUrl ? (
            <a className="button primary full" href={config.formUrl} target="_blank" rel="noopener noreferrer">意見フォームを開く <ArrowRight size={18} /></a>
          ) : (
            <span className="button disabled full">意見フォーム準備中</span>
          )}
          <small>フォーム公開時には、個人情報の利用目的を明示します。</small>
        </div>
      </section>

      <footer>
        <div className="footer-main">
          <div className="footer-brand"><div><strong>塩澤ヒロシ</strong><small>島の声を、町の力に。</small></div></div>
          <div className="footer-links"><a href="#message">竹富町への想い</a><a href="#policy">5つの取り組み</a><a href="#profile">プロフィール</a><a href={`${basePath}/privacy`}>プライバシーポリシー</a></div>
        </div>
        <div className="footer-bottom"><p>本サイトは地域活動・政策提案・住民意見収集のための政治活動サイトです。</p><p>© 2026 塩澤ヒロシ</p></div>
      </footer>
    </main>
  );
}
