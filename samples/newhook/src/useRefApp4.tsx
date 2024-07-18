// import React, { useEffect, useRef } from "react";
//
// const UseRefApp4 = () => {
//     const inputRef = useRef<HTMLInputElement>(null);
//
//     useEffect(() => {
//         if(inputRef.current !== null){
//             inputRef.current.focus();
//             console.log(inputRef.current);
//             inputRef.current.addEventListener("dblclick", () => {
//                 alert("test");
//             });
//         }
//     });
//
//     const login = () => {
//         alert(`ㅎㅇ ${inputRef.current!.value}`)
//         inputRef.current?.focus();
//         // 깜빡깜빡 넣는거
//        };
//     };
//
//
//     return(
//         <div>
//             <input ref={inputRef} type="text" placeholder="username" />
//             <button > 로그인</button>
//         </div>
//     );
// };
//
// export default UseRefApp4;

import React, { useEffect, useRef } from "react";

const UseRefApp4 = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (inputRef.current !== null) {
            inputRef.current.focus();
            console.log(inputRef.current);
            inputRef.current.addEventListener("dblclick", () => {
                alert("test");
            });
        }

        return () => {
            if (inputRef.current !== null) {
                inputRef.current.removeEventListener("dblclick", () => {
                    alert("test");
                });
            }
        };
    }, []); // 빈 배열을 넣어 최초 마운트 시에만 useEffect 실행

    const login = () => {
        alert(`안녕하세요 ${inputRef.current!.value}`);
        inputRef.current?.focus(); // 입력 후 포커스 재설정
    };

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="username" />
            <button onClick={login}>로그인</button>
        </div>
    );
};

export default UseRefApp4;
