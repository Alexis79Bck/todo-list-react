import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { Button } from "primereact/button";
import FilterForm from "./FilterForm";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "/node_modules/primeflex/primeflex.css";

interface TodoFormProps {
  addTodo: (text: string) => void;
  filterType: string;
  filterText: string;
  setFilterType: (value: string) => void;
  setFilterText: (value: string) => void;
  todosLength: number;
}

const TodoForm: React.FC<TodoFormProps> = ({
  addTodo,
  filterType,
  filterText,
  setFilterType,
  setFilterText,
  todosLength,
}) => {
  const [text, setText] = useState("");
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (text.trim()) {
      addTodo(text);
      setText("");
    }
  };
  return (
    <>
      <form
        className="flex p-2  mt-6 justify-content-center"
        onSubmit={handleSubmit}
      >
        <div className="flex-initial gap-3 flex m-2  justify-content-center">
          <FloatLabel>
            <InputText
              type="text"
              id="inputTask"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <label htmlFor="inputTask">Escriba el Texto</label>
          </FloatLabel>
        </div>
        <div className="flex-initial gap-3 flex m-2 justify-content-center">
          <Button icon="pi pi-plus" tooltip="Nueva Tarea" />
        </div>
        <div className="flex-initial gap-3 m-2 flex justify-content-end">
          <Button
            icon="pi pi-filter"
            onClick={() => setIsFilterVisible(!isFilterVisible)}
            disabled={todosLength === 0}
          />
        </div>
      </form>
      {isFilterVisible && (
        <FilterForm
          filterType={filterType}
          filterText={filterText}
          setFilterType={setFilterType}
          setFilterText={setFilterText}
        />
      )}
    </>
  );
};

export default TodoForm;
