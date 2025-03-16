import { useState } from "react";

import { Todo } from "./types/todo";
import TodoCard from "./components/TodoCard";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import "primeicons/primeicons.css";
import "/node_modules/primeflex/primeflex.css";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState({
    type: "all",
    text: "",
  });

  const addTodo = (text: string) => {
    const newTodo: Todo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const updateTodo = (id: number, text: string) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text } : todo))
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const getFilteredTodos = () => {
    return todos.filter((todo) => {
      if (filter.type === "pending") {
        return !todo.completed;
      } else if (filter.type === "completed") {
        return todo.completed;
      } else if (filter.type === "search") {
        return todo.text.toLowerCase().includes(filter.text.toLowerCase());
      } else {
        return true;
      }
    });
  };

  return (
    <TodoCard >
      <TodoForm 
      addTodo={addTodo}
      filterType={filter.type}
      filterText={filter.text}
      setFilterType={(type: string) => setFilter({ ...filter, type })}
      setFilterText={(text: string) => setFilter({ ...filter, text })}
      todosLength={todos.length}
      />

      <TodoList align-items-center todos={getFilteredTodos()} toggleTodo={toggleTodo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
    </TodoCard>
  );
}

export default App;
