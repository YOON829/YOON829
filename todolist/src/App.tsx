// import React, { useState } from "react";
// import "./App.css";
// import TodoBoard from "./components/TodoBoard";
//
// function App() {
//   const [inputValue, setInputValue] = useState<string>(""); // inputValue의 타입을 문자열로 지정
//   const [todoList, setTodoList] = useState<string[]>([]); // todoList의 타입을 문자열 배열로 지정
//
//   // Function to add a new item to the todo list
//   const addItem = () => {
//     if (inputValue.trim() !== "") {
//       setTodoList([...todoList, inputValue]);
//       setInputValue("");
//     }
//   };
//
//
//   // Function to delete an item from the todo list
//   const deleteItem = (index: number) => {
//     const updatedTodoList = [...todoList];
//     updatedTodoList.splice(index, 1);
//     setTodoList(updatedTodoList);
//   };
//
//   return (
//     <main>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(event) => setInputValue(event.target.value)}
//         placeholder="할 일을 입력하세요..."
//       />
//       <button onClick={addItem}>추가</button>
//
//       <TodoBoard todoList={todoList} onDelete={deleteItem} />
//       {/* Pass todoList and deleteItem function as props to TodoBoard */}
//     </main>
//   );
// }
//
// export default App;



import React, { useState } from "react";
import "./App.css";
import TodoBoard from "./components/TodoBoard";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState<string[]>([]);

  const addItem = () => {
    if (inputValue.trim() !== "") {
      setTodoList([...todoList, inputValue]);
      setInputValue(""); // 입력 필드 비우기
    }
  };

  const deleteItem = (index: number) => {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

  return (
    <main>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        placeholder="할 일을 입력하세요..."
      />
      <button onClick={addItem}>추가</button>

      <TodoBoard todoList={todoList} onDelete={deleteItem} />
    </main>
  );
}

export default App;
