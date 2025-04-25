import { fireEvent, render } from "@testing-library/react";
import { TodoItem } from ".";
import React from "react";
import { Table, Tbody } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { screen } from "@testing-library/react";

const mockUseAuthStore = jest.fn();

jest.mock("../../../stores/use-auth-store", () => ({
    useAuthStore: () => mockUseAuthStore()
  }));

describe("TodoItemコンポーネントのテスト", () => {
  beforeEach(() => {
    mockUseAuthStore.mockReturnValue({ userName: "田中太郎" })
  });
  test("コンポーネントが正しくレンダリングされること", () => {
    render(
      <BrowserRouter>
        <Table>
          <Tbody>
            <TodoItem
              id="123"
              task="掃除"
              person="山田太郎"
              deadline="2023-10-10"
              deleteTodo={() => {}}
            />
          </Tbody>
        </Table>
      </BrowserRouter>
    );

    expect(screen.getByText("123")).toBeInTheDocument();
    expect(screen.getByText("掃除")).toBeInTheDocument();
    expect(screen.getByText("山田太郎")).toBeInTheDocument();
    expect(screen.getByText("2023-10-10")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "削除" })).toBeInTheDocument();
    expect(screen.getByRole("link", )).toHaveAttribute("href", "/todo/123");
  });
  test("userNameとpersonが一致しない場合、colorがredにならないこと", () => {
    render(
      <BrowserRouter>
        <Table>
          <Tbody>
            <TodoItem
              id="123"
              task="掃除"
              person="山田太郎"
              deadline="2023-10-10"
              deleteTodo={() => {}}
            />
          </Tbody>
        </Table>
      </BrowserRouter>
    );
    expect(screen.getByRole("row")).not.toHaveStyle("color: red");
  });
  test("userNameとpersonが一致する場合、colorがredになること", () => {
    mockUseAuthStore.mockReturnValue({ userName: "山田太郎" });
    render(
      <BrowserRouter>
        <Table>
          <Tbody>
            <TodoItem
              id="123"
              task="掃除"
              person="山田太郎"
              deadline="2023-10-10"
              deleteTodo={() => {}}
            />
          </Tbody>
        </Table>
      </BrowserRouter>
    );
    expect(screen.getByRole("row")).toHaveStyle("color: red");
  });
  test("削除ボタンがクリックされたときに、deleteTodoが呼ばれること", () => {
    const mockDeleteTodo = jest.fn();
    render(
      <BrowserRouter>
        <Table>
          <Tbody>
            <TodoItem
              id="123"
              task="掃除"
              person="山田太郎"
              deadline="2023-10-10"
              deleteTodo={mockDeleteTodo}
            />
          </Tbody>
        </Table>
      </BrowserRouter>
    );
    fireEvent.click(screen.getByRole("button", {name: "削除"}));
    expect(mockDeleteTodo).toHaveBeenCalledWith("123");
  });

});