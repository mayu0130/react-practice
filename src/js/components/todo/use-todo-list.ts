import { useCallback, useEffect, useMemo, useState } from "react";
import { Todo } from "./type";

export const useTodoList = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [filterWord, setFilterWord] = useState<string>("");

    // マウント時に、一度だけLocalStorageからTODO一覧のデータを取得する
    useEffect(() => {
      const todoListData = localStorage.getItem("todo-list");
      if (todoListData){
        setTodoList(JSON.parse(todoListData));
      }
    }, []);

    // TodoListが更新されるたびに、LocalStorageにデータを保存する
    useEffect(() => {
      localStorage.setItem("todo-list", JSON.stringify(todoList));
    }, [todoList]);

    const addTodo = (newTask: string, newPerson: string, newDeadline: string ) => {
      setTodoList((prev: Todo[]) => [...prev, {id: Date.now(), task: newTask, person: newPerson, deadline: newDeadline}]);
    };

    const deleteTodo = useCallback((id: number) =>
      setTodoList((prev) => prev.filter(todo => todo.id !== id))
    , []);

    const filteredTodoList = useMemo(() => {
      return todoList.filter(
        (todo) =>
          todo.task.includes(filterWord) || todo.person.includes(filterWord)
          );
        },[todoList, filterWord]);

  return {
    todoList: filteredTodoList,
    addTodo,
    deleteTodo,
    filterWord,
    setFilterWord
  };
};