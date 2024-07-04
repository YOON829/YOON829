import { SyntheticEvent } from "react";

export default function EventBubbling() {
  const onDivClick = (e: SyntheticEvent) => {
    const { isTrusted, target, bubbles, currentTarget } = e;
    console.log(
      "click event Bubbles on <div>",
      isTrusted,
      target,
      currentTarget
    );
  };
  const onButtonClick = (e: SyntheticEvent) => {
    const { isTrusted, target, currentTarget } = e;
    console.log(
      "click event starts on <div>",
      isTrusted,
      target,
      currentTarget
    );
  };
  return (
    <div onClick={onDivClick}>
      <p>EventBubbling</p>
      <button onClick={onButtonClick}>Click me</button>
    </div>
  );
}
