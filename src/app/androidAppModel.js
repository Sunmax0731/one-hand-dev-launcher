export const androidClosedAlphaModel = {
  packageName: "io.github.sunmax0731.onehanddevlauncher",
  localOnlyStorage: true,
  requestedPermissions: ["QUERY_ALL_PACKAGES は閉域アルファでは要求せず、検証用 allowlist で代替", "PACKAGE_USAGE_STATS は任意の手動許可として扱う"],
  storeReviewNotes: [
    "閉域アルファでは個人データの端末内保存を前提にする。",
    "権限が必要な機能は任意の明示操作でのみ有効化する。"
  ]
};
