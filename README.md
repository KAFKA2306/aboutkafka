# aboutkafka — legacy profile prototype

[![Quality](https://github.com/KAFKA2306/aboutkafka/actions/workflows/quality.yml/badge.svg)](https://github.com/KAFKA2306/aboutkafka/actions/workflows/quality.yml)

2024年10月に作成したReact / TypeScript / ViteのプロフィールUI試作です。**現在のプロフィール正準ではなく、legacyとして新機能開発を停止しています。**

現在の活動・主要repository・公開入口は [`KAFKA2306/KAFKA2306`](https://github.com/KAFKA2306/KAFKA2306) を参照してください。

## Maintained boundary

このrepositoryで維持するのは次だけです。

- legacy prototypeであることを画面に明示する
- 現在の正準プロフィールへのリンクを表示する
- 固定されたStars / Followers / Following等の変動値を再導入しない
- 個別連絡先や未確認の公開URLを再導入しない

旧プロフィールの内容、2024年時点のproject一覧、過去の統計、旧deploy先を現在情報として更新しません。必要な履歴はGit historyと [Issue #1](https://github.com/KAFKA2306/aboutkafka/issues/1) に残っています。

## Verification

```bash
npm ci
npm run build
npm run lint
```

`.github/workflows/quality.yml` はlocked install、production build、lint、legacy boundaryを検証します。CI successは現在の正準プロフィールや外部deployの存在を証明するものではありません。

## Maintenance policy

このlegacy UIへ新しいプロフィール機能を追加しません。現在情報を公開する必要がある場合は正準repository側で更新します。

過去に存在した外部deploy URLやdependency vulnerabilityの状態は、現在の一次証拠を取得しない限り有効・解消済みとは扱いません。
