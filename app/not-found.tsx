import Link from 'next/link';

export default function NotFound() {
  return <main className="not-found"><p className="section-kicker">404</p><h1>ページが見つかりません</h1><p>お探しのページは移動または削除された可能性があります。</p><Link className="button primary" href="/">トップページへ戻る</Link></main>;
}
