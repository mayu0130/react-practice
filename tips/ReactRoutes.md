# ルーティング(ReactRouter)とは

Reactは、シングルページアプリケーション(SPA)を構築するための強力なライブラリです。

SPAでは、ユーザーが異なるページに移動するときに、ページ全体を読み込みせずに、必要な部分だけを動的に更新します。このようなページ間の移動を管理するのがルーティングです。

ReactRouterは、Reactでルーティングを実現するための標準的なライブラリで、複数のページやビューを持つアプリケーションを構築する際に役立ちます。

## ルーティング(ReactRouter)でできること

1. 異なるURLに対応する複数のページやコンポーネントを表示する
2. ページ間のナビゲーションを管理する
3. 動的なルート(例: /todo/:id)を作成する

## インストール
```
npm i --save-exact react-router-dom
```

## webpack.config.jsの編集
```
module.exports = {
  output: {
    publicPath: "/",
  },
  devServer: {
    historyApiFallback: {
      index: "index.html",
    },
    devMiddleware: {
      writeToDisk: (filePath) => {
        // hot-update ファイルを除外
        return !/\.hot-update\.(js|json|js\.map)$/.test(filePath);
      },
    },
  },
};
```