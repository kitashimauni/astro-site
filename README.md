# kitashima.dev

東京農工大学大学院での研究活動と、個人開発・技術記事をまとめたポートフォリオサイトです。Astroで構築し、プロフィール、研究・制作物、ブログ、外部リンクを公開しています。

公開サイト: <https://kitashima.dev/>

## ページ構成

- `/`: 自己紹介、代表的な研究・制作物、ブログ・外部リンクへの入口
- `/about/`: 所属、研究関心、経歴、活動実績
- `/portfolio/`: 研究・制作物と技術スタック
- `/blog/`: 技術ブログと日常ブログへの案内
- `/links/`: GitHub、X、ブログなど外部リンクの一覧

## データ構成

ページごとの情報の重複を避けるため、プロフィールや作品情報は共通データから表示しています。

- `src/data/about.ts`: プロフィール、研究関心、経歴、活動実績
- `src/data/portfolio.ts`: 研究・制作物、公開状態、リンク、論文、技術ID
- `src/data/links.ts`: 外部リンクの名前、説明、公開先
- `src/data/technologies.ts`: 技術ID、表示名、カテゴリ
- `src/data/repository-triage.ts`: 公開リポジトリの掲載・除外判定

データの追加・検証ルールは [`src/data/README.md`](src/data/README.md) にまとめています。

## 開発

Node.js 22.22.0以上（Astro 7.4のサポート要件）とnpmを使用します。リポジトリ直下の `.nvmrc` は、AstroとCloudflare Pagesのビルドに必要な `22.22.0` を指定しています。

```sh
npm ci
npm run dev
```

開発サーバーは <http://localhost:4321/> で起動します。

## ビルドと確認

```sh
npm run build
npm run preview
```

`npm run build` はAstroの型チェック、ポートフォリオデータの検証、静的サイトの生成を実行します。公開前にローカルで生成結果を確認する場合は、ビルド後に `npm run preview` を実行してください。

## Cloudflare Pages

- ビルドコマンド: `npm run build`
- 出力ディレクトリ: `dist`
- Node.js: `22.22.0`（`.nvmrc`またはPagesの `NODE_VERSION` で指定）
- 現在の静的ビルドで追加の環境変数は不要です

## ライセンス

サイトの文章・画像・データの利用については、各ファイルおよびリンク先の記載に従ってください。
