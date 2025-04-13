## ReactにおけるCSSでのスタイリング方法

1. CSSクラス
2. CSSモジュール
3. CSS-in-JSライブラリ
4. Tailwind CSS

## CSSクラス

CSSクラスは通常のCSSファイルを使用してスタイルを定義し、
JSX内でclassNameプロパティを使ってクラスを運用する方法です。

``` css/style.css
.todo{
  color: blue;
  font-size: 20px;
}
```

``` index.tsx
import "../css/styles.css";

const root = createRoot(document.getElementByID("app")!);
root.render(<TodoList />);
```

## CSSモジュール

CSSモジュールは、スタイルをモジュール化し、コンポーネントごとにスコープを分離する方法です。クラス名の衝突を防ぐことができます。

``` style.module.css
.todo{
  color: blue;
  font-size: 20px;
}
```

``` TodoItem.tsx
import styles from `./style.module.css`;

const Todo: React.FC<{ task: string }> = ( { task }) => {
  return <h2 className={styles.todo}>Task: {task}</h2>
};
```
ただ、css-loaderが非推奨になる可能性がある記事を見かけるようになりました。

## CSS-in-JSライブラリ

CSS-in-JSライブラリは、JavaScript内でCSSを記述し、スタイルをコンポーネントに直接適用するためのツールです。
これにより、スタイルのスコープがコンポーネントに限定され、CSSクラスの衝突を防ぐことができます。
代表的なCSS-in-JSライブラリには、Styled Componentsとemotionがあります。

``` install
npm install styled-components @types/styled-components
```

``` Todo.tsx
import styled from "styled-components";

const StyledTodo = styled.h2`
 color: blue;
 font-size: 20px;
`

const Todo: React.FC<{ task: string }> = ({ task }) => {
  return <StyledTodo>Task: {task}</StyledTodo>;
};
```

## TailwindCSS

TailwindCSSは、ユーティリティファーストのCSSフレームワークです。ユーティリティファーストとはスタイルを設定するために小さなクラスを使用するアプローチを指します。

**特徴**
- カスタマイズ性
デフォルトの設定をカスタマイズしたり、新しいユーティリティクラスを追加したりすることが容易です。tailwind.config.jsファイルを使って、テーマやカラーパレットを追加できます。

- Buildサイズの削減
再利用性の高いクラスを用いることで、CSSの重複を減らし、メンテナンス性を向上させます。使われていないCSSは削除されるため、最終的なファイルサイズも小さく保つことができます。

## TailwindCSS

TailwindCSS関連のnpmパッケージのインストール
```
npm i --save-dev --save-exact tailwindcss postcss autoprefixer postcss-loader
```

TailwindCSSの初期化
```
npx tailwindcss init
```

postcss.config.jsを作成
```
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
```

tailwind.config.jsを作成
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

src/css/main.cssを作成
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

webpack.config.jsを編集
```

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/js/index.tsx",
  output: {
    path: `${__dirname}/dist/`,
    filename: "bundle.js",
  },
  mode: "development",
  devServer: {
    static: {
      directory: "./dist",
    },
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        // 拡張子 css のファイル（正規表現）;
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"], // <- ここにpostcss-loaderを追加
      },
      {
        // 拡張子 .ts .tsx の場合
        test: /(\.ts|\.tsx)$/,
        // TypeScript をコンパイルする
        use: "ts-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      //テンプレートに使用するhtmlファイルを指定
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin(),
  ],
  resolve: {
    // 拡張子を配列で指定
    extensions: [".tsx", ".ts", ".js"],
  },
};
```

src/js/index.tsx
```
import '../css/main.css';
```