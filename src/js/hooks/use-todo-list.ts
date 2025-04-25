import { useEffect, useMemo, useState } from "react";
import { Todo } from "../types/type";

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

    const addTodo = (newTask: string, newPerson: string, newDeadline: string ) => {
      const updatedTodoList = [
        ...todoList,
        {
          id: Date.now().toString(),
          task: newTask,
          person: newPerson,
          deadline: newDeadline
        }
      ];
      localStorage.setItem("todo-list", JSON.stringify(updatedTodoList));
      setTodoList(updatedTodoList);
    };

    const deleteTodo =
      (id: string) =>
      {
        const updatedTodoList = todoList.filter(todo => todo.id !== id);
        localStorage.setItem("todo-list", JSON.stringify(updatedTodoList));
      setTodoList(updatedTodoList)
      };

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