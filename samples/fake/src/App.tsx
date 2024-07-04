// // import React from 'react';
// // import logo from './logo.svg';
// // import './App.css';
// //
// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.tsx</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }
// //
// // export default App;
//
// import * as D from "./data";
//
// export default function App() {
//   return (
//       <div>
//         <p>
//           {D.randomName()}, {D.randomJobTitle()}, {D.randomDayMonthYear()}
//         </p>
//         <img src={D.randomAvatar()} height="50"/>
//         <img src={D.randomImage()} height="300"/>
//       </div>
//   );
// }
//
//
// import { Component} from "react";
//
//
// export default class App extends Component {
//     render() {
//         const isLoading = true;
//         if (isLoading) return <p>loading.....</p>
//
//
//         return (
//             <ul>
//                 <li>
//                     <a href="http://www.google.com">
//                         <p>go to google</p>
//                     </a>
//                 </li>
//             </ul>
//         );
//
//
//         return (
//             <div>
//                 {isLoading && <p>loading...</p>}
//                 {!isLoading && <ul>{children}</ul>}
//             </div>
//         )
//     }
// }
//
//
//
// import { Component } from "react";
// export default class App2 extends Component {
//   render() {
//     const isLoading = true;
//     const children = isLoading ? ( <p> loading...</p> ) :
//         (
//             <ul>
//                 <li>
//                     <a href="http://www.google.com">
//                         <p> go to google</p>
//                     </a>
//                 </li>
//             </ul>
//         );
//       <li>
//         <a href="http://www.google.com">
//           <p>go to google</p>
//         </a>
//       </li>
//     );
//     return (
//       <div>
//         {isLoading && <p>loading....</p>}
//         {!isLoading && <p>{children}</p>}
//       </div>
//     );
//   }
// }


// import { Component } from "react";
// import ClassComponents from "./ClassComponent";
// import ArrowComponent from "./ArrowComponent";
// // export default function App () {
// //     return <div>Hello function keyword component!</div>;
// // }
//
// const App = () => {
//     return (
//         <ul>
//             <ClassComponents href="http://www.google.com" text="go to google"/>
//             <ArrowComponents href="http://www.x.com" text="go to X" />
//         </ul>
//     )
// }


// const App = () => {
//     // refactoring map 함수 사용
//     // [...].map ((item, index)) => <tag>)
//     // const texts = [<p>hello</p> , <p>world</p>];
//     // const texts = ['hello', 'world'].map((item, index) => <p key = {index}>{item}</p>)
//     const texts = ["hello" , "world"].map((itme,index)=> (<p key={index} children={item}) />
//     return <div>{texts}</div>
// };
//
//
//
//
//
// export default App;


//event 처리 부분
import EventLisner from './pages/EventListner';
import OnClick from './pages/OnClick'
import OnChange from './pages/OnChange'
import ReactOnCilck from './pages/ReactOnClick'
import DispatchEvent from './pages/DispatchEvent'
import DragDrop from './pages/DragDrop'
import EventBubbling from './pages/EventBubbling'
import FileDrop from './pages/FileDrop'
import FileInput from './pages/FileInput'
import StopPropagation from './pages/StopPropagation'
import VariousInputs from './pages/VariousInputs'

export default  function App () {
    return(
        <div>

        <EventLisner/>
        <OnClick/>
        <OnChange/>
        <ReactOnCilck/>
        <DispatchEvent/>
        <DragDrop/>
        <EventBubbling/>
        <FileDrop/>
        <FileInput />
        <StopPropagation/>
        <VariousInputs />
        </div>
    )

}