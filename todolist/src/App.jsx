import React,{useState} from "react";
import './App.css';
import TodoBoard from "./components/TodoBoard";



// 1. 인풋창이 있고 버튼이 있다
// 2. 인풋창에 값을 입력하고 버튼을 클릭하면 아이템이 추가된다
// 3. 아이템 삭제버튼을 누르면 삭제가 가능하다



function App() {
    const [inputValue, setInputValue] = useState("");
    const [todoList, setTodoList] = useState([]);
    const addItem =() => {
         console.log("im heehehehhe!", inputValue);
         setTodoList([...todoList, inputValue]);
     }
    return (
        <main>
            <input value= {inputValue} type="text" onChange={event => console.log(event.target.value)} />
            <button onClick={addItem}>추가</button>

            <TodoBoard todoList={todoList} />
        {/*todolist를 받아오기 위해 props를 쓴다*/}
        </main>
    )
}
export default App;



//
// import React, { useState } from "react";
// import "./App.css";
// import TodoBoard from "./components/TodoBoard";
//
// function App() {
//   const [inputValue, setInputValue] = useState("");
//   const [todoList, setTodoList] = useState([]);
//
//   // Function to add a new item to the todo list
//   const addItem = () => {
//     if (inputValue.trim() !== "") { // Check if input value is not empty
//       setTodoList([...todoList, inputValue]); // Add new item to todoList
//       setInputValue(""); // Clear input field
//     }
//   };
//
//   // Function to delete an item from the todo list
//   const deleteItem = (index) => {
//     const updatedTodoList = [...todoList];
//     updatedTodoList.splice(index, 1); // Remove item at index
//     setTodoList(updatedTodoList); // Update todoList state
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
