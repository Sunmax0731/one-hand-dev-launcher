# one-hand-dev-launcher

片手操作・開発用ランチャー は、片手ホーム、開発検証アプリ、作業モードを切り替えるAndroidランチャーです。

## Closed Alpha Scope

- Rank: 25
- Tier / Score: P1 / 64
- Domain / Idea No: AndroidApp / 10
- 主な公開先: Google Play
- GitHub: https://github.com/Sunmax0731/one-hand-dev-launcher
- Prerelease: https://github.com/Sunmax0731/one-hand-dev-launcher/releases/tag/v0.1.0-alpha.1

## 実装概要

- `src/core`: 製品プロファイルと代表シナリオ評価
- `src/validators`: 期待結果検証
- `src/report`: 検証レポート生成
- `src/review-model`: レビューゲートと責務モデル
- `src/cli`: `samples/representative-suite.json` の自動検証

## 代表データ

`samples/representative-suite.json` は `happy-path`、`missing-required`、`warning`、`mixed-batch` を含みます。

## 検証

```powershell
cd D:\AI\AndroidApp\one-hand-dev-launcher
cmd.exe /d /s /c npm test
```

手動テストは Codex 側では未実施です。手順は `docs/manual-test.md` と `docs/strict-manual-test-addendum.md` を参照してください。
