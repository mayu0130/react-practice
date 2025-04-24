# 単体テストとは

アプリケーション開発において、**単体テスト**は非常に重要な役割を果たします。単体テストを行うことで、コードが期待通りに動作していることが確認でき、バグの発見やコードの品質向上につながります。

**Jest**は、JavaScriptで広く使われているテストフレームワークで、Reactのアプリケーションでもよく利用されます。

また、**React Testing Library**は、Reactコンポーネントのテストをより簡単に行えるツールです。

## Jestの例
```
// sum.ts
export const sum = (a: number, b: number ) => a + b;
```

```
// sum.test.ts
import { sum } from './sum';

test('引数に1と2を渡すと返り値が3になること', () => {
  expect(sum(1, 2)).toBe(3);
});

test('引数に3と4を渡すと返り値が7になること', () => {
  expect(sum(3, 4)).toBe(7);
});
```

## React Testing Libraryとは
React Testing Libraryは、ユーザーの観点からテストを行うために設計されており、実際にユーザーがどう操作するかをシミュレーションしながらテストを作成できます。

## インストール
```
npm i --save-exact --save-dev jest ts-jest jest-environment-jsdom @testing-library/jest-dom @testing-library/react @types/jest
```

### jest.setup.js
```
// Testing Libraryのカスタムマッチャーを読み込む
require('@testing-library/jest-dom');
```

### jest.config.js
```
module.exports = {
  // JestでTypeScriptのコードを実行するための設定
  preset: "ts-jest",
  // テストが実行される環境を設定
  // jest-environment-jsdomは、ブラウザライクな環境をエミュレートし、DOM操作を伴うテストが可能なようにする設定
  testEnvironment: "jest-environment-jsdom",
  // 各テストファイルが実行される前に実行されるスプリクト
  setupFilesAfterEnv: ["./jest.setup.js"]
};
```

### tsconfig.jsonを編集
```
{
  "compilerOptions": {
    "jsx": "react",
    // ソースマップを有効化
    "sourceMap": true,
    // TSはECMAScript 5に変換
    "target": "ES5",
    // TSのモジュールはES Modulesとして出力
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    // 厳密モードとして設定
    "strict": true,
    // ESモジュールとCommonJSモジュールの互換性を向上させるための設定
    "esModuleInterop": true, // <- 追加
    // 参照する型定義のリストを明示的に指定する
    "types": [
      "jest",
      "@testing-library/jest-dom",
      "@testing-library/react",
      "node"
    ] // <- 追加
  }
}
```