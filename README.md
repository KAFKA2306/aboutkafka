# aboutkafka — 2024年に作成したプロフィールUI試作

`aboutkafka`は、2024年10月にStackBlitz / Boltを使って作成した、React・TypeScript・Viteによる個人プロフィール画面の試作です。

**現在のKAFKA2306プロフィールの正準ではありません。** 現在の活動、主要リポジトリ、公開媒体、運用方針は、GitHubプロフィールリポジトリ[`KAFKA2306/KAFKA2306`](https://github.com/KAFKA2306/KAFKA2306)のREADMEを確認してください。

> **現在状態:** legacy prototype / 扱いを検討中  
> **作成時期:** 2024年10月  
> **技術:** React 18 / TypeScript / Vite 5 / Tailwind CSS  
> **判断追跡:** [Issue #1](https://github.com/KAFKA2306/aboutkafka/issues/1)

---

## このリポジトリに含まれるもの

一枚のプロフィール画面として、次の情報を表示する実装があります。

- 自己紹介
- 技術・関心分野
- VRChat活動
- 当時のproject一覧
- 当時のarticle一覧
- GitHub、X、VRChat、Discord、noteへのlink

主要実装は`src/App.tsx`です。

---

## 現在の注意点

`src/App.tsx`には、2024年時点の手書き情報が固定されています。

- `9 Stars`、`7 Followers`、`18 Following`という固定値
- `© 2024`
- `oil`、`mstr`、`Swiss-Tournament-Manager`、`VRPhotoJourney`など、現在の正準project一覧ではない内容
- 現在の有効性をこの監査で確認していない外部link

したがって、このUIを現在のプロフィール、実績、活動状況の証拠として使用しないでください。

公開候補としてREADMEに記載されていたNetlify URL:

```text
https://calm-creponne-3a08d9.netlify.app/
```

この監査環境では、現在のdeploy状態、配信commit、表示内容を確認できていません。URLが記載されているだけで稼働中とは判断しません。

---

## 正準プロフィールとの関係

```text
KAFKA2306/KAFKA2306
  現在のプロフィール、主要project、公開媒体の正準
        │
        └─ 必要なら生成dataを供給

aboutkafka
  2024年のUI試作
  現在は正準ではない
```

このrepositoryを継続利用する場合は、固定された統計やproject一覧を手動更新せず、正準プロフィールまたは機械可読なregistryから生成する構造へ変更する必要があります。

---

## セットアップ

### 必要環境

- Node.js
- npm
- Git

依存関係:

```bash
npm ci
```

`package-lock.json`が利用できない状態では`npm install`を使用しますが、通常はlockfileに従う`npm ci`を優先します。

---

## ローカル実行

```bash
npm run dev
```

Viteが表示するURLを開きます。portは実行環境によって変わる場合があります。

---

## buildと検証

### production build

```bash
npm run build
```

このcommandはTypeScript compileとVite buildを行います。

### lint

```bash
npm run lint
```

### build結果のpreview

```bash
npm run preview
```

このrepositoryには、2026年8月4日時点でGitHub Actions workflowを確認できませんでした。README変更だけでbuild・lint成功を断定しません。

---

## ディレクトリ構成

```text
src/
  App.tsx        プロフィール画面本体
  main.tsx       React entry
package.json     scriptと依存関係
package-lock.json 固定依存
vite.config.ts   Vite設定
tailwind.config.js Tailwind設定
```

実際の構成を変更した場合はREADMEも更新します。

---

## 今後の選択肢

Issue #1で次を判断します。

1. 現行プロフィールから自動生成するportfolioへ刷新する
2. 2024年の試作としてarchive候補にする
3. 手動更新を継続する

固定値と正準プロフィールのdriftを再発させるため、3は推奨しません。

---

## セキュリティと公開境界

プロフィール画面へ次を直接埋め込まないでください。

- privateな連絡先
- API key、token、cookie
- 未公開の職務・住所・行動履歴
- 現在有効か確認していない個人account link
- GitHub APIなどから取得した個人統計の認証情報

外部linkを公開する場合は、本人が公開を意図していることと、現在のURLを確認します。

---

## 既知の制約

- 表示内容は2024年時点の手書きsnapshotです。
- GitHubのStar・Follower数を自動取得しません。
- 現在の主要projectを反映していません。
- Netlify deployの現在状態を確認していません。
- GitHub Actionsによるbuild・lintの継続検証を確認できません。
- 現行プロフィールの正準ではありません。

---

## 関連

- [現在のプロフィールREADME](https://github.com/KAFKA2306/KAFKA2306)
- [横断管理リポジトリ](https://github.com/KAFKA2306/com)
- [旧プロフィールUIの扱いを決めるIssue #1](https://github.com/KAFKA2306/aboutkafka/issues/1)

**README実体監査:** 2026年8月4日
