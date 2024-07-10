import { SetStateAction, useState} from "react";

function UseStateApp2() {
    const [names, setNames] = useState(["홍길동", "김민수"]);
    const [input, setInput] = useState("");

    const handleInputChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setInput(e.target.value);
  };

  const handleUpload = () => {
    setNames((prevState) => {
      return [input, ...prevState];
    });
    // setInput(""); // 입력값 초기화
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={handleUpload}>Upload</button>
      {names.map((name, idx) => {
        return <p key={idx}>{name}</p>;
      })}
    </div>
  );
}

export default UseStateApp2;