# ステート管理(useState)

## useStateとは

useStateは、Reactのフックの一つで、関数コンポーネントに状態(state)を持たせるために使用されます。useStateを使うことで、コンポーネント内で状態を管理し、その状態が変更された際にコンポーネントが再レンダリングされるようになります。

**Reactのフック**

Reactが用意してくれている便利な関数
- useState
- useEffect
etc...

## ステート（状態）

ステートは、コンポーネント内で動的に変化するデータを保持するものです。

## useStateの書き方

```
const [newTask, setNewTask] = useState<string>("掃除");
console.log(newTask); 
setNewTask("洗濯");
```