import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://tsuretaka.github.io/shiozawa-site/'),
  title: '塩澤ヒロシ｜島の声を、町の力に。',
  description: '竹富町・西表島での地域活動、政策提案、住民の声を集めるための政治活動サイトです。',
  openGraph: {
    title: '塩澤ヒロシ｜島の声を、町の力に。',
    description: '竹富町・西表島での地域活動、政策提案、住民の声を集めるための政治活動サイトです。',
    type: 'website',
    locale: 'ja_JP',
    images: [{ url: 'https://tsuretaka.github.io/shiozawa-site/og.png', width: 1731, height: 909, alt: '塩澤ヒロシ｜島の声を、町の力に。' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '塩澤ヒロシ｜島の声を、町の力に。',
    description: '竹富町・西表島での地域活動、政策提案、住民の声を集めるための政治活動サイトです。',
    images: ['https://tsuretaka.github.io/shiozawa-site/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja"><body>{children}</body></html>;
}
