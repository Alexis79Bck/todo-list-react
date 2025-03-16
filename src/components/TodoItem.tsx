import React, { useState } from "react";
import { Todo } from "../types/todo";
import { Checkbox } from "primereact/checkbox";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Message } from "primereact/message";

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  updateTodo: (id: number, text: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  toggleTodo,
  deleteTodo,
  updateTodo,
}) => {
  // Definicion de variables para el comportamiento de los elementos
  const [isSelected, setIsSelected] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  //Funciones que controlara los eventos sobre los elementos
  const handleCheckboxChange = () => {
    setIsSelected(!isSelected);
    toggleTodo(todo.id);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleUpdateClick = () => {
    updateTodo(todo.id, editText);
    setIsEditing(false);
  };

  return (
    <div className="flex justify-content-center w-8">
      <div className="flex-initial gap-3  m-2  justify-content-center">
        <Checkbox
          type="checkbox"
          checked={todo.completed}
          disabled={isEditing}
          onChange={handleCheckboxChange}
        />
      </div>
      <div className="flex-initial flex-grow-1 gap-3  m-2  justify-content-center">
        {isEditing ? (
          <InputText
            className="w-full"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
        ) : (
          <Message
            className="w-full"
            text={todo.text}
            severity={todo.completed ? "success" : "info"}
          />
        )}
      </div>
      <div className="flex-initial gap-3  m-2  justify-content-center">
        {isEditing ? (
          <Button
            icon="pi pi-check"
            onClick={handleUpdateClick}
            severity="success"
            tooltip="Actualizar"
            tooltipOptions={{ position: "bottom" }}
          />
        ) : (
          <Button
            icon="pi pi-pencil"
            onClick={handleEditClick}
            tooltip="Editar"
            tooltipOptions={{ position: "bottom" }}
          />
        )}
      </div>
      <div className="flex-initial gap-3  m-2  justify-content-center">
        <Button
          icon="pi pi-times"
          onClick={() => deleteTodo(todo.id)}
          severity="danger"
          disabled={isEditing}
          tooltip="Eliminar"
          tooltipOptions={{ position: "bottom" }}
        />
      </div>
    </div>
  );
};

export default TodoItem;
