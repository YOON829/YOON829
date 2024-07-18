import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import UseStateApp1 from "./UseStateApp1";
// import UseStateApp2 from "./UseStateApp2";
// import UseEffectApp1 from "./UseEffectApp1";
// import UseEffectApp2 from "./UseEffectApp2";
// import UseSampleApp1 from "./UseSampleApp1";
import UseContextApp1 from "./UseContextApp1";
import UseRefApp1 from "./useRefApp1";
import UseRefApp2 from "./useRefApp2";
// import UseRefApp3 from "./useRefApp3";
import UseRefApp4 from "./useRefApp4"
import UseMemoApp1 from "./UseMemoApp1";
import UseMemoApp2 from "./UseMemoApp2";
import UseCallBackApp1 from "./UseCallBackApp1";
import UseCallBackApp2 from "./UseCallBackApp2";
import UseLayoutEffect from "./UseLayoutEffect";
import UseLayoutEffectApp2 from "./UseLayoutEffectApp2";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.Fragment>
    <UseLayoutEffectApp2 />
  </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
