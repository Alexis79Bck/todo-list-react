import React from "react";
import { RadioButton } from "primereact/radiobutton";
import { InputText } from "primereact/inputtext";

interface FilterFormProps {
  filterType: string;
  filterText: string;
  setFilterType: (value: string) => void;
  setFilterText: (value: string) => void;
}

const FilterForm: React.FC<FilterFormProps> = ({
  filterType,
  filterText,
  setFilterType,
  setFilterText,
}) => {
  return (
    <div
      className="flex justify-content-center w-full mt-2 "
      style={{
        backgroundColor: "#f0f0f0",
        color: "#333",
        paddingTop: "18px",
        paddingBottom: "18px",
        border: "2px solid blue",
      }}
    >
      <div className="flex align-items-center px-2">
        <RadioButton
          inputId="all"
          name="filter"
          value="all"
          onChange={(e) => setFilterType(e.value)}
          checked={filterType === "all"}
        />
        <label htmlFor="all" className="ml-2">
          Todos
        </label>
      </div>
      <div className="flex align-items-center px-2">
        <RadioButton
          inputId="pending"
          name="filter"
          value="pending"
          onChange={(e) => setFilterType(e.value)}
          checked={filterType === "pending"}
        />
        <label htmlFor="pending" className="ml-2">
          Pendientes
        </label>
      </div>
      <div className="flex align-items-center px-2">
        <RadioButton
          inputId="completed"
          name="filter"
          value="completed"
          onChange={(e) => setFilterType(e.value)}
          checked={filterType === "completed"}
        />
        <label htmlFor="completed" className="ml-2">
          Finalizados
        </label>
      </div>
      <div className="flex align-items-center px-2">
        <RadioButton
          inputId="search"
          name="filter"
          value="search"
          onChange={(e) => setFilterType(e.value)}
          checked={filterType === "search"}
        />
        <label htmlFor="search" className="ml-2">
          Buscar
        </label>
      </div>
      {filterType === "search" && (
        <InputText
          placeholder="Buscar tarea"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
      )}
    </div>
  );
};

export default FilterForm;
