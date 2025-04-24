import { fireEvent, render } from "@testing-library/react";
import { NewTodoForm } from "./NewTodoForm";
import React from "react";
import { screen } from "@testing-library/react";

describe("NewTodoFormコンポーネントのテスト", () => {
  test("コンポーネントが正しくレンダリングされること", () => {
    render(<NewTodoForm addTodo={() => {}}/>);
    const task = screen.getByPlaceholderText("タスク名");
    const person = screen.getByPlaceholderText("担当者名");
    const deadline = screen.getByPlaceholderText("締め切り");
    const button = screen.getByRole("button", { name: "追加" });

    expect(task).toBeInTheDocument();
    expect(person).toBeInTheDocument();
    expect(deadline).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
  test("input要素に値を入力すると、正しくvalueがセットされること", () => {
    render(<NewTodoForm addTodo={() => {}}/>);
    const task = screen.getByPlaceholderText("タスク名");
    const person = screen.getByPlaceholderText("担当者名");
    const deadline = screen.getByPlaceholderText("締め切り");
    fireEvent.change(task, { target: { value: "掃除" } });
    fireEvent.change(person, { target: { value: "山田太郎" } });
    fireEvent.change(deadline, { target: { value: "2023-10-10" } })

    expect(task).toHaveValue("掃除");
    expect(person).toHaveValue("山田太郎");
    expect(deadline).toHaveValue("2023-10-10");
  });
  test("追加ボタンをクリックすると、addTodo関数が実行され、input要素のvalueが空になること", () => {
    const mockAddTodo = jest.fn();

    render(<NewTodoForm addTodo={mockAddTodo}/>);
    const task = screen.getByPlaceholderText("タスク名");
    const person = screen.getByPlaceholderText("担当者名");
    const deadline = screen.getByPlaceholderText("締め切り");
    const button = screen.getByRole("button", { name: "追加" });
    fireEvent.change(task, { target: { value: "掃除" } });
    fireEvent.change(person, { target: { value: "山田太郎" } });
    fireEvent.change(deadline, { target: { value: "2023-10-10" } })
    fireEvent.click(button);

    expect(mockAddTodo).toHaveBeenCalledWith("掃除", "山田太郎", "2023-10-10");
    expect(task).toHaveValue("");
    expect(person).toHaveValue("");
    expect(deadline).toHaveValue("");
    expect(button).toHaveValue("");
  });
});