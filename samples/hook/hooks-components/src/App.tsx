import logo from './logo.svg';
import './App.css';
import {useCallback, useState} from "react";



const reducer = (state: any, action: any) => {
  console.log("enteredNameReducer");
  switch (action.type) {
    case "enteredName":
      if (state.enteredName === action.payload) {
        return state;
      }
      return { ...state, enteredName: action.payload}
    case "message":
      return {
        ...state, message: `Hello, ${action.payload}`
      }
    default:
      throw new Error("Invalid action type" + action.type);
  }
}

const initialState = {
  enteredName: "",
  message: "",
};



function App() {
  const [{message, enteredName}, dispatch] = useReducer(reducer, initialState);

  const [startCount, setStartCount] = useState(0);
  const [count, setCount] = useState(0);
  const setCountCallback = useCallback(() => {
    const inc = count + 1 > startCount ? count + 1 :
        Number(count + 1) + startCount;
    setCount(inc);
  }, [count, startCount]);
  const onWelcomBtnClick = () => {
    setCountCallback();
  }
  const onChangeStartCount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartCount(NUmber(e.target.value));
  }


  const onChangeName = (e: React.ChangeEvent<HTMLInputElement) => {
    dispatch({type: "enteredName", payload: e.target.value});

    dispatch({type: "message", payload: e.target.value});

  }
  console.log("App.tsx render");
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <Greeting
              message={message}
              enteredName={enteredName}
              greetingDispatcher={dispatch}/>
          <div style={{marginTop: '10px'}}>
            <label>Enter a number and we'll increment it</label>
            <br/>
            <input value={startCount}
                   onChange={onChangeStartCount}
                   style={{width: '.75rem'}}/>&nbsp;
            <label>count</label>
            <br/>
            <button onClick={onWelcomBtnClick}>Increment count</button>
          </div>
        </header>
      </div>
  )
}





  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
