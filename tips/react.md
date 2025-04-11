# Reactとは

ReactとはFacebook(現在のMeta社)によって開発されたJavaScriptのライブラリで、主にユーザーインターフェースを作成するために使われる。

Reactの最大の特徴は、コンポーネントベースのアプローチである。

コンポーネントとは、UIの一部分を独立して定義できる再利用可能なパーツのこと。
これにより、コードの再利用性が高まり、開発が効率的になる。

FacebookやInstagram、Netflixなどの大手企業がReactを採用している。
これらのアプリケーションでは、ユーザーインターフェースが複雑であり、効率的なUI開発が求められるため、Reactの利点が活かされている。

## 仮想DOM

Reactには仮想DOMという仕組みがある。
これは、実装のウェブページの構造をオブジェクトのツリーとして保存し、変更DOMに適用するような仕組み。

仮想DOMを使うことで、Reactは変更が必要な部分だけを効率的に見つけて更新できます。これにより、ページの動作が速くなり、ユーザーにとっても快適な体験が提供されます。

<通常のDOM操作>
本来であれば、2と4は飛ばしてもいいコードだが、1〜4の順でコードを読み進めてしまう。

1.divAを追加
2.divBを追加
3.divCを追加
4.divBを削除

<仮想DOM>
仮想DOMで2と4は不要と判断し、本物のDOMに1と3のみを移し実行。

1.divAを追加
2.divBを追加(不要と判断)
3.divCを追加
4.divBを削除(不要と判断)

## 状態管理

データの状態とDOM構造が紐づけられ、データを更新したらDOMも自動的に更新され、従来の「データを更新＆DOM操作」の実装が「データ更新」だけに集中でき、開発体験が向上する。

## JSXとは

JSX（JavaScript XML）は、Reactで使われる特別な構文。
JSXを使うことで、HTMLのような構文をJavaScriptコードの中に書き込むことができ、UIの作成が直感的で分かりやすくなる。

## JSXの基本構文

**要素**
JSXでは、HTMLのタグと同じように要素を記述する。
例えば、<div>,<h1>,<p>などのタグを使用します。
これによりUIの構造を視覚的に理解しやすくなる。

```
const element = <h1>Hello, world!</h1>;
```

**属性**
HTMLと同様に、JSXでも要素に属性を追加できる。
ただし、属性名はキャメルケース(camelCase)で記述する必要がある。
例えばclassはclassNameに、onclickはonClickになる。

```
const element = <img src="logo.png" alt="Logo" />;
```

**子要素**
```
const element = {
  <div>
    <h1>Hello world</h1>
    <p>Reactの勉強をしています</p>
  </div>
};
```

**動的なデータの表示**
```
const todoItem = "掃除と洗濯";
const element = <h1>Task:{todoItem}</h1>
```
//Task:掃除と洗濯

**イベントハンドリング**
```
const handleClick = () => {
  alert('ボタンがクリックされました')
};
const element = <button onClick={handleClick}>完了</button>;
```

**JSXで書いたコードをビルドした後はどうなる**
<ビルド前>
const todoItem = "Learn React";
const element = <h1>Task: {todoItem}</h1>;

<ビルド後>
"use strict";
var todoItem = "Learn React";
var element = React.createElement("h1", null, "Task:" + todoItem);

## コンポーネントとは

コンポーネントは、Reactの基本単位であり、再利用可能なUIの部品。
コンポーネントを使うことで、アプリケーションのUIを小さな独立した再利用可能な部分に分割できる。これにより、コードの管理とメンテナンスが容易になる。

Reactには主に関数コンポーネントとクラスコンポーネントの2種類のコンポーネントがある。

現在では、関数コンポーネントが主流となっており、特にTypeScriptとの相性が良い。

## Props

Propsは、コンポーネントにデータを渡すための仕組み。

親コンポーネントから子コンポーネントへデータを渡す際に使用します。
Propsは読み取り専用であり、子コンポーネントで使用することはできません。
```
type TodoItemProps = {
  task: string;
  deadline: string;
};

const TodoItem: ({task, deadline}: TodoItemProps)= => {
  return(
    <div>
      <h2>{task}</h2>
      <p>締め切り：{deadline}</p>
    </div>
  );
};

root.render(<TodoItem task="掃除" deadline="明日まで" />);

//掃除
// 締め切り：明日まで
```

## ネストしたコンポーネント

コンポーネントをネストすることで、複雑なUIを簡単に構築できる。
親コンポーネントだ子コンポーネントにデータを渡し、UIを構築する。
```
type TodoItemProps = {
  task: string;
  deadline: string;
};

const TodoItem: ({task, deadline}: TodoItemProps)= => {
  return(
    <div>
      <h2>{task}</h2>
      <p>締め切り：{deadline}</p>
    </div>
  );
};

const TodoList:React.FC = () => {
  const todos = [
    {task: '掃除', deadline: '明日まで' };
    {task: '洗濯', deadline: '明後日まで' };
  ];

  return{
    <div>
    {todos.map((todo, index) => {
      <TodoItem key={index} task={todo.task} deadline={todo.deadline} />
    })}
    </div>
  };
};

root.render(<TodoList />);

//掃除
//締め切り：明日まで
//洗濯
//締め切り：明後日まで
```

コンポーネントをリストで表示する場合、キーが重要

1.パフォーマンスの向上
キーを使用することで、Reactはリスト内の各要素を効率的に更新できる。キーがあるとReactは要素の位置や内容が変更されたかどうかを迅速に判断でき不要な再レンダリングを避け、パフォーマンスが向上する。

2.バグの防止
キーがない場合、リストの要素が動的に変更された時に、Reactは正しく更新できないことがある。
例えば、リストの要素が削除されたり追加されたりする場合、キーがないとReactはどの要素が削除されたかを誤って判断することがある。キーを適切に設定することで、このようなバグを防ぐことができる。

通常、配列のidプロパティやインデックスをキーとして使用しますが、インデックスは動的なリストには推奨されない。
ユニークなIDを使用した方が良い。
