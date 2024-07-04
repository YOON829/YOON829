// import * as D from "./data";

// export default function App() {
//   return (
//     <div>
//       <p>
//         {D.randomName()}, {D.randomJobTitle()}, {D.randomDayMonthYear()},{" "}
//       </p>
//       <img src={D.randomAvatar()} height="50" />
//       <img src={D.randomImage()} height="300" />
//     </div>
//   );
// }

// import { Component } from "react";
// import ClassComponents from "./ClassComponents";
// export default class App extends Component {
//   render() {
//     return (
//       <ul>
//         <ClassComponents href="http://www.google.com" text="go to google" />
//         <ClassComponents href="http://www.X.com" text="go to x(twitter)" />
//       </ul>
//     );
//   }
// }

// import ArrowComponent from "./ArrowComponent";
// import P from "./P";
// export default function App() {
//   return <div>Hello function-keyword component!</div>;
// }

// const App = () => {
//   return (
//     <ul>
//       <ArrowComponent href="http://www.google.com" text="go to google" />
//       <ArrowComponent href="http://www.X.com" text="go to x(twitter)" />
//     </ul>
//   );
// };

//event 처리 부분

import EventListener from "./pages/EventListener";
import OnClick from "./pages/OnClick";
import ReactOnClick from "./pages/ReactOnClick";
import DispatchEvent from "./pages/DispatchEvent";
import EventBubbling from "./pages/EventBubbling";
import StopPropagation from "./pages/StopPropagation";
import VariousInputs from "./pages/VariousInputs";
import DragDrop from "./pages/DragDrop";
import FileDrop from "./pages/FileDrop";
import FileInput from "./pages/FileInput";
import OnChange from "./pages/OnChange";

export const App = () => {
  return (
    <>
      <FileDrop />
      <DragDrop />
      <FileInput />
      <OnChange />
      <VariousInputs />
      <StopPropagation />
      <EventBubbling />
      <DispatchEvent />
      <ReactOnClick />
      <OnClick />
      <EventListener />
    </>
  );
};

export default App;
// export default App;

//
// import Bootstrap from './pages/Bootstrap'
// import Icon from './pages/Icon';
// import Style from './pages/Styles';
// // import UsingIcon from './pages/UsingIcon'
// // import UsingIconWithCSSClass from './pages/UsingIconWithCSSClass';
//
// export default function App() {
//     return (
//     <div>
//         {/*<UsingIconWithCSSClass />*/}
//         {/*<UsingIcon />*/}
//         <Style />
//         <Icon />
//         <Bootstrap />
//     </div>
//     )
// }