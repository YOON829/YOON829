import { SyntheticEvent } from "react";

export default function StopPropagation() {
  const onDivClick = (e: SyntheticEvent) => {
    console.log("click event Bubbles on <div>");
  };
  const onButtonClick = (e: SyntheticEvent) => {
    console.log("mouse click occures on <button> and call stopPropagation");
    e.stopPropagation();
  };
  return (
    <div onClick={onDivClick}>
      <p>StopPropagation</p>
      <button onClick={onButtonClick}>
        Click me and Stop event Propagation
      </button>
    </div>
  );
}
