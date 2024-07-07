

import React from "react";
import TodoItem from "./TodoItem";

// interface TodoBoardProps {
//   todoList: string[];
//   onDelete: (index: number) => void; // onDelete prop 정의
// }

const TodoBoard = ({ todoList, onDelete }: TodoBoardProps) => {
  return (
    <div>
      <h1>Todo List</h1>
      {todoList.map((item, index) => (
        <TodoItem
          key={index}
          item={item}
          onDelete={() => onDelete(index)}
        />
      ))}
    </div>
  );
}

export default TodoBoard;
