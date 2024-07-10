import { useState } from "react";

export default function UseStateApp1() {
  const [time, setTime] = useState(11);
  const [minute, setMinute] = useState(11);
  const handleClick = () => {
    let newTime;
    if (time >= 24) {
      newTime = 1;
    } else {
      newTime = time + 1;
    }
    setTime(newTime);
  };
  const handleMinuteClick = () => {
    let newMinute = 0;
    if (minute >= 60) {
      newMinute = 0;
    } else {
      newMinute = minute + 1;
    }
    setMinute(newMinute);
  };
  return (
    <div>
      <span>
        현재시각:{time}시 {minute} 분
      </span>
      <br />
      <button onClick={handleClick}>Hour Update</button>
      <button onClick={handleMinuteClick}>Minute Update</button>
    </div>
  );
}