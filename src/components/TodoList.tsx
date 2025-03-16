import React from 'react';
import { Todo } from '../types/todo';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  updateTodo: (id: number, text: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo, deleteTodo, updateTodo }) => {
  return (

    <div className="flex justify-content-center flex-wrap w-full" >
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;