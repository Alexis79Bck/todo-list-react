import React, { ReactNode } from "react";

interface TodoCardProps {
    children: ReactNode;
  }
  
  const TodoCard: React.FC<TodoCardProps> = ({ children }) => {
    return (
        <div className="flex flex-column align-items-center w-full p-4">
            {children}
        </div>
    );
  };
  
  export default TodoCard;