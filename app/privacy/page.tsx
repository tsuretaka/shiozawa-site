import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'プライバシーポリシー｜塩澤ヒロシ',
  description: '塩澤ヒロシ政治活動サイトの個人情報保護方針です。',
};

export const dynamic = 'force-static';

export default function PrivacyPage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

  return (
    <main className="legal-page">
      <header className="legal-header">
        <Link href={`${basePath}/`} className="brand"><span><strong>塩澤ヒロシ</strong><small>島の声を、町の力に。</small></span></Link>
        <Link href={`${basePath}/`} className="back-link"><ArrowLeft size={17} />トップへ戻る</Link>
      </header>
      <article className="legal-content">
        <p className="section-kicker">PRIVACY POLICY</p>
        <h1>プライバシーポリシー</h1>
        <p className="legal-lead">本サイトでは、住民の皆さまからお寄せいただく情報を、以下の方針に基づき適切に取り扱います。</p>
        <section><h2>1. 取得する情報</h2><p>意見投稿フォームでは、お住まいの地域、ご意見・ご要望を必須項目とし、年代、氏名、メールアドレス等を任意項目として取得する場合があります。</p></section>
        <section><h2>2. 利用目的</h2><p>取得した情報は、竹富町の地域課題の把握、政策提案の検討、ご意見への対応および本サイトの改善のために利用します。</p></section>
        <section><h2>3. 第三者提供</h2><p>法令に基づく場合を除き、ご本人の同意なく個人情報を第三者へ提供しません。</p></section>
        <section><h2>4. 情報の管理</h2><p>投稿内容はGoogleフォームおよびGoogle Sheets上で管理し、公開用GitHubリポジトリには保存しません。不正アクセス、紛失、漏えい等を防止するため、適切な安全管理に努めます。</p></section>
        <section><h2>5. アクセス解析</h2><p>今後、サイト改善のためGoogle Analyticsを利用する場合があります。利用開始時には、Cookie等の取り扱いについて本ページへ追記します。</p></section>
        <section><h2>6. お問い合わせ</h2><p>個人情報の取り扱いに関するお問い合わせ窓口は、正式な連絡先の確定後に掲載します。</p></section>
        <p className="legal-date">制定日：2026年9月</p>
      </article>
    </main>
  );
}
