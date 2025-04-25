import { render } from "@testing-library/react";
import { Layout } from ".";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { fireEvent, screen } from "@testing-library/dom"

const mockUseAuthStore = jest.fn();
jest.mock("../../stores/use-auth-store", () => ({
  useAuthStore: () => mockUseAuthStore()
}));

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => {
  return {
    ...jest.requireActual("react-router-dom"),
    useNavigate : () => mockNavigate,
  };
});

describe("Layoutコンポーネントのテスト", () => {
  test("コンポーネントが正しくレンダリングされること", () => {
    mockUseAuthStore.mockReturnValue({
      isLoggedIn: true,
      isLoginCheckDone: true,
      logout: () => {},
      userName: "山田太郎",
    });
    render(
      <BrowserRouter>
        <Layout title="Todoリスト">
          <div>コンポーネントのchildren</div>
        </Layout>
      </BrowserRouter>
    );

  expect(screen.getByRole("heading", { name: "Todoリスト" })).toBeInTheDocument();
  expect(screen.getByText("山田太郎")).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "ログアウト" })).toBeInTheDocument();
  expect(screen.getByText("コンポーネントのchildren")).toBeInTheDocument();
  });
  test("isLoginCheckDoneがtrueで、isLoggedInがfalseの時、/loginに遷移すること", () => {
    mockUseAuthStore.mockReturnValue({
      isLoggedIn: false,
      isLoginCheckDone: true,
      logout: () => {},
      userName: "山田太郎",
    });
    render(
      <BrowserRouter>
        <Layout title="Todoリスト">
          <div>コンポーネントのchildren</div>
        </Layout>
      </BrowserRouter>
    );

    expect(mockNavigate).toHaveBeenCalledWith("/login");
  });
  test("isLoginCheckDoneがfalseで、isLoggedInがfalseの時、何もレンダリングされないこと", () => {
    mockUseAuthStore.mockReturnValue({
      isLoggedIn: false,
      isLoginCheckDone: false,
      logout: () => {},
      userName: "山田太郎",
    });
    render(
      <BrowserRouter>
        <Layout title="Todoリスト">
          <div>コンポーネントのchildren</div>
        </Layout>
      </BrowserRouter>
    );

    expect(screen.queryByRole("heading", { name: "Todoリスト" })).not.toBeInTheDocument();
    expect(screen.queryByText("山田太郎")).not.toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "ログアウト" })).not.toBeInTheDocument();
    expect(screen.queryByText("コンポーネントのchildren")).not.toBeInTheDocument();
  });
  });
  test("ログアウトボタンをクリックされると、logout関数が呼ばれること", () => {
    const mockLogout = jest.fn();
    mockUseAuthStore.mockReturnValue({
      isLoggedIn: true,
      isLoginCheckDone: true,
      logout: mockLogout,
      userName: "山田太郎",
    });
    render(
      <BrowserRouter>
        <Layout title="Todoリスト">
          <div>コンポーネントのchildren</div>
        </Layout>
      </BrowserRouter>
    );
    const button = screen.getByRole("button", { name: "ログアウト" });
    fireEvent.click(button);
    expect(mockLogout).toHaveBeenCalled;

    });