# 仮想DOMを自作する

## 仮想DOMを使用したJavaScriptのの実行

1. 仮想DOMを変更する
1. 仮想DOMとリアルDOMの差分(diff)を検知する
1. 差分をリアルDOMに適用する(patch)
1. ブラウザの表示が更新される

## 実装

1. 仮想DOMをリアルDOMに描画する(render)
1. リアルDOMと仮想DOMの差分を検出する(diff)
1. 検出した差分を反映する(patch)
1. 適切なタイミングでdiff/patchを動作させる(hook)

# 参考URL

- https://zenn.dev/khmory/articles/de4c2478046173
