# Security / Privacy Checklist

        ## 方針

        アプリ一覧は端末内処理とし、利用状況権限は任意の手動許可だけにする

        ## チェック

        - [x] 外部送信をMVP外にした。
        - [x] サンプルに実個人情報を含めない。
        - [x] 手動テストで確認すべき権限を列挙。
        - [x] release asset に手動テスト手順を添付。

        ## Android / Host 権限

        - QUERY_ALL_PACKAGES は閉域アルファでは要求せず、検証用 allowlist で代替
- PACKAGE_USAGE_STATS は任意の手動許可として扱う

        ## Adobe 公式参照

        - 対象ドメイン docs と created_idea metadata を優先。
