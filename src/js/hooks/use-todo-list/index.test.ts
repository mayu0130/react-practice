import { act, renderHook } from "@testing-library/react";
import { useTodoList } from ".";
import { Todo } from "../../types/type";

describe("useTodoListフックのテスト",() => {

  beforeEach(() => {
    let storage: Record<string, string> = {};
    Object.defineProperty(window, "localStorage", {
      value: {
        getItem: (key: string) => storage[key],
        setItem: (key: string, value: string) => {storage[key] = value},
      },
      writable: true,
    });
    const initData = [
      {
        id: "123",
        task: "掃除",
        person: "山田太郎",
        deadline: "2023-10-10"
      },
      {
        id: "456",
        task: "買い物",
        person: "田中太郎",
        deadline: "2023-10-20"
      },
    ];
    localStorage.setItem("todo-list", JSON.stringify(initData));
  });
  test("マウント時に、一度だけLocalStorageからtodo一覧のデータを取得すること", () => {
    const { result } = renderHook(() =>useTodoList());
    expect(result.current.todoList).toStrictEqual([
      {
        id: "123",
        task: "掃除",
        person: "山田太郎",
        deadline: "2023-10-10"
      },
      {
        id: "456",
        task: "買い物",
        person: "田中太郎",
        deadline: "2023-10-20"
      },
    ]);
    expect(result.current.filterWord).toBe("");
  });
  test("addTodoが実行されると、todoリストとlocalStorageが更新されること", () => {
    const { result } = renderHook(() =>useTodoList());
    act(() => {
      result.current.addTodo("洗濯", "鈴木太郎", "2023-10-30");
    });

    expect(result.current.todoList).toHaveLength(3);

    const newTodo = result.current.todoList[2];
    expect(newTodo.task).toBe("洗濯");
    expect(newTodo.person).toBe("鈴木太郎");
    expect(newTodo.deadline).toBe("2023-10-30");

    const localStorageData = localStorage.getItem("todo-list");
    expect(localStorageData).not.toBeNull();
    const todoList = JSON.parse(localStorageData!) as Todo[];

    expect(todoList).toHaveLength(3);
    expect(todoList[2].task).toBe("洗濯");
    expect(todoList[2].person).toBe("鈴木太郎");
    expect(todoList[2].deadline).toBe("2023-10-30");
  });
  test("deleteTodoが実行されると、todoリストとlocalStorageが更新されること", () => {
    const { result } = renderHook(() =>useTodoList());
    act(() => {
      result.current.deleteTodo("123");
    });

    expect(result.current.todoList).toHaveLength(1);
    const todo = result.current.todoList[0];
    expect(todo.id).toBe("456");
    expect(todo.task).toBe("買い物");
    expect(todo.person).toBe("田中太郎");
    expect(todo.deadline).toBe("2023-10-20");

    const localStorageData = localStorage.getItem("todo-list");
    expect(localStorageData).not.toBeNull();
    const todoList = JSON.parse(localStorageData!) as Todo[];

    expect(todoList).toHaveLength(1);
    expect(todoList[0].id).toBe("456");
    expect(todoList[0].task).toBe("買い物");
    expect(todoList[0].person).toBe("田中太郎");
    expect(todoList[0].deadline).toBe("2023-10-20");
  });
  test("setFilterWordが実行されると、絞り込まれたtodoListが返却されること", () => {
    const { result } = renderHook(() =>useTodoList());
    act(() => {
      result.current.setFilterWord("買");
    });

    expect(result.current.todoList).toHaveLength(1);

    const todo = result.current.todoList[0];
    expect(todo.id).toBe("456");
    expect(todo.task).toBe("買い物");
    expect(todo.person).toBe("田中太郎");
    expect(todo.deadline).toBe("2023-10-20");
  });
});