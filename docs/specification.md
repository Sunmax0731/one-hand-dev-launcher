# 仕様

        ## 対象レコード

        - `launcherItem`
- `workMode`
- `quickAction`
- `reviewShortcut`

        ## 必須項目

        `title`, `mode`, `nextAction`

        ## 警告項目

        `permissionReason`, `reviewDate`

        ## フロー

        1. 入力レコードを受け取る。
        2. `src/core/scenarioEngine.js` が必須項目と警告項目を評価する。
        3. `src/report/reportBuilder.js` が検証結果を集計する。
        4. `dist/validation-result.json` を release evidence の前提証跡にする。

        ## 保存方針

        アプリ一覧は端末内処理とし、利用状況権限は任意の手動許可だけにする
