import React, {FC, useState, useEffect } from 'react';

//useState : 'message'라는 상태를 정의하고 초기값은 빈 문자열("")로 설정됨
//useEffect : name이 변경될때마다 호출되는 효과함수를 정의함 name이 주어지면 setMessage를 통해 message 상태를 업데이트 하여 해당이름을 포함한 인사메세지를 설정
//            name이 변경될때마다 useEffect가 다시 실행되로록 함

interface GreetingProps {
    name?: string
}

const Greeting: FC<GreetingProps> =
    ( {name}: GreetingProps) => {
    const [message, setMessage] = useState("");
    useEffect(() => {
        if (name) {
            setMessage(`Hello from ,${name}`);
        }
    }, [name])
        if (!name) {
            return <div>no name given</div>;
        }
        return <div>
            {message}
        </div>;
     }

     export default  Greeting;