# Kenji Ikeda Portfolio

Next.js 14 + Tailwind CSS + MDX で構築したポートフォリオサイトです。

## セットアップ

```bash
npm install
npm run dev
```

開発サーバーが http://localhost:3000 で起動します。

## 写真の追加・変更方法

1. 写真ファイルを `public/images/` に追加する
2. `content/photos/index.json` を編集して写真の情報を追加する

```json
[
  {
    "src": "/images/ファイル名.jpg",
    "caption": "キャプション, 2026",
    "width": 3000,
    "height": 2000
  }
]
```

- `src`: `/images/` から始まるパス
- `caption`: 写真の下に表示されるテキスト
- `width` / `height`: 元画像のピクセルサイズ（レイアウト計算に使用）
- 配列の順番がそのまま表示順になります

3. GitHub に push すると Vercel が自動デプロイします

## 記事の追加方法

1. `content/writing/` に `.mdx` ファイルを作成する

```
content/writing/記事のスラッグ.mdx
```

2. ファイルの先頭に frontmatter を書く

```mdx
---
title: "記事タイトル"
date: "2026-03-06"
---

ここに本文を書きます。Markdownの記法がすべて使えます。
```

3. GitHub に push すると自動デプロイされます
4. `/writing/記事のスラッグ` で記事が表示されます

## ページ構成

- `/` — 写真フィード（トップページ）
- `/writing` — 記事一覧
- `/writing/[slug]` — 記事の個別ページ
- `/about` — 自己紹介
- `/contact` — 連絡先

## デプロイ

Vercel と GitHub リポジトリを連携してください。`main` ブランチに push すると自動でデプロイされます。

### 独自ドメインの設定

Vercel のダッシュボード → Settings → Domains からドメインを追加できます。

## OGP 画像

`public/images/og.jpg` に OGP 用の画像（1200x630px 推奨）を置いてください。SNS でシェアされたときに表示されます。
