# 塩澤ヒロシ 政治活動サイト

「島の声を、町の力に。」をコンセプトにした、竹富町・西表島での地域活動、政策提案、住民意見収集のためのサイトです。

## 更新箇所

- 告示前・告示後設定、GoogleフォームURL：`data/config.json`
- 活動報告：`data/activities.json`
- お知らせ：`data/news.json`
- ページ本文：`app/page.tsx`
- プライバシーポリシー：`app/privacy/page.tsx`

## 公開前に必要な設定

1. `data/config.json` の `formUrl` にGoogleフォームURLを設定
2. プライバシーポリシーへ正式な問い合わせ窓口を記載
3. 文言と公開時期を竹富町選挙管理委員会等へ確認
4. GitHubリポジトリの Settings → Pages → Source を **GitHub Actions** に設定

## 開発

```bash
npm install
npm run dev
```

## ビルド

```bash
npm run build
```

GitHub Actionsでは `GITHUB_PAGES=true` を設定し、`/shiozawa-site` 配下へ自動調整します。
