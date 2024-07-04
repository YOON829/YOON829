import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as D from "./data";
import reportWebVitals from "./reportWebVitals";

const children = D.makeArray(10).map((notUsed, index) => (
  <div key={index}>
    <p>{D.randomId()}</p>
    <p>{D.randomName()}</p>
    <p>{D.randomJobTitle()}</p>
    <p>{D.randomSentence()}</p>
    <img src={D.randomAvatar()} width={100} height={100} />
  </div>
));
// const children = [0, 1, 2].map((n: number) => <h3>Hello world {n}</h3>);

const hello = "Hello world";
// const children = [
//   <li>
//     <a href="http://www.google.com" target="_blank">
//       <p>go to Google</p>
//       <input type="text" />
//       <img src="some url" />
//       <p>{/*string must be wrapped by Text*/}</p>
//       <p>{hello}</p>
//     </a>
//   </li>,
//   <li>
//     <a href="http://www.facebook.com" target="_blank">
//       <p>go to Google</p>
//       <input type="text" />
//       <img src="some url" />
//       <p>{/*string must be wrapped by Text*/}</p>
//       <p>{hello}</p>
//     </a>
//   </li>,
//   <li>
//     <a href="http://www.twitter.com" target="_blank">
//       <p>go to Google</p>
//       <input type="text" />
//       <img src="some url" />
//       <p>{/*string must be wrapped by Text*/}</p>
//       <p>{hello}</p>
//     </a>
//   </li>,
// ];
// const rootVirtualDOM = <ul>{children}</ul>;
const rootVirtualDOM = <App />;
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(rootVirtualDOM);
// root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
