# aboutkafka — legacy profile prototype

`aboutkafka`は、2024年10月に作成したReact / TypeScript / ViteのプロフィールUI試作です。

**このリポジトリは現在のKAFKA2306プロフィールの正準ではなく、legacyとして保守を停止します。** 現在の活動、主要リポジトリ、公開媒体、公開URL台帳は[`KAFKA2306/KAFKA2306`](https://github.com/KAFKA2306/KAFKA2306)を参照してください。

> **状態:** legacy / maintenance stopped  
> **正準:** [`KAFKA2306/KAFKA2306`](https://github.com/KAFKA2306/KAFKA2306)  
> **作成時期:** 2024年10月  
> **判断:** [Issue #1](https://github.com/KAFKA2306/aboutkafka/issues/1)

## 停止判断

2026年8月9日の監査で、このUIを現行portfolioへ刷新せず、2024年の試作としてlegacy化することを決定しました。

理由は次のとおりです。

- 現在のプロフィール正準と公開URL台帳は`KAFKA2306/KAFKA2306`で既に管理されている。
- 旧`src/App.tsx`には固定されたStar / Follower / Following数、2024年のproject一覧、現在確認していない連絡先が含まれていた。
- 2026年8月4日のPR #2監査では、locked installとbuildは成功した一方、依存監査で16 vulnerabilities（1 low / 5 moderate / 10 high）が報告されていた。
- 同じ情報を別UIで手動保守すると正準とのdriftを再発させる。

停止方針のため、旧プロフィール内容を更新して延命するのではなく、`src/App.tsx`自体をlegacy noticeへ置き換えました。過去の固定統計、古いproject一覧、個別連絡先は公開画面から削除しています。

## 公開URLの監査

旧READMEには次のNetlify URLが記載されていました。

```text
https://calm-creponne-3a08d9.netlify.app/
```

2026年8月9日に公開Web検索でこのURLの現行配信を裏付ける結果を確認できませんでした。また、このリポジトリ内にはNetlify deploy設定や、当該URLと現在の`main` commitを対応付ける証跡がありません。

したがって、このURLを**現在有効な公開入口として扱いません**。配信が外部設定で残存している場合でも、次回deploy時には`src/App.tsx`のlegacy noticeだけを表示する設計です。

## 現在の画面契約

このリポジトリのUIが表示してよい内容は、次の2点だけです。

1. 2024年の旧プロフィール試作であること。
2. 現在の正準プロフィール`KAFKA2306/KAFKA2306`へのリンク。

CIの`Guard legacy boundary`で以下を検査します。

- legacy表示が存在する。
- 正準プロフィールURLが存在する。
- 固定されたStars / Followers / Following値を再導入しない。
- Discord個別連絡先を再導入しない。

## 検証

```bash
npm ci
npm run build
npm run lint
```

GitHub Actionsの`.github/workflows/quality.yml`でもlocked install、production build、lint、legacy boundary監査を実行します。

## セキュリティと保守

このリポジトリはlegacyのため、新機能やプロフィール情報を追加しません。依存更新を含む継続開発が必要になった場合は、このリポジトリを再利用するのではなく、正準プロフィールから生成する新しい公開contractを先に定義します。

過去に検出されたdependency vulnerabilitiesを「解消済み」とは扱いません。legacy化によって公開プロフィール機能の継続保守を停止し、旧コンテンツと個別連絡先を実行画面から除去します。

## 関連

- [正準プロフィール](https://github.com/KAFKA2306/KAFKA2306)
- [判断Issue #1](https://github.com/KAFKA2306/aboutkafka/issues/1)
- [README・Quality整備 PR #2](https://github.com/KAFKA2306/aboutkafka/pull/2)

**最終監査:** 2026年8月9日
